import { NextRequest } from 'next/server'
import { createServerClient } from '@/utils/supabase/server'
import { priceListValidation } from '@/schemas/price-list.schema'
import { PostgrestSingleResponse } from '@supabase/supabase-js'
import { PriceListCategorySchema } from '@/schemas/price-list-category.schema'
import {
	HttpSupabaseError,
	HttpValidationError,
} from '@/utils/api/errorResponse'
import { HttpSuccess } from '@/utils/api/successResponse'

interface Params {
	id: string
}

export async function POST(
	request: NextRequest,
	{ params }: { params: Promise<Params> }
) {
	const { id } = await params
	const data = await request.json()

	const result = priceListValidation.safeParse(data)
	if (!result.success) return HttpValidationError()

	const supabase = await createServerClient()

	// CREATE NEW PRICE LIST ITEM
	const { error: priceListErr } = await supabase
		.from('price_list')
		.update(result.data)
		.eq('id', id)
	if (priceListErr) return HttpSupabaseError(priceListErr)

	// GET CATEGORY
	const {
		data: categoryData1,
		error: categoryErr1,
	}: PostgrestSingleResponse<PriceListCategorySchema & { id: number }> =
		await supabase
			.from('price_list_category')
			.select('*')
			.contains('item_order', [Number(id)])
			.single()
	if (categoryErr1) return HttpSupabaseError(categoryErr1)

	if (categoryData1.id === data.category) return HttpSuccess()

	// FILTER OLD CATEGORY
	const { error: categoryErr2 } = await supabase
		.from('price_list_category')
		.update({
			item_order: categoryData1.item_order?.filter(
				(item) => item !== Number(id)
			),
		})
		.eq('id', categoryData1.id)
	if (categoryErr2) return HttpSupabaseError(categoryErr2)

	// ADD TO NEW CATEGORY
	const { data: categoryData3, error: categoryErr3 } = await supabase
		.from('price_list_category')
		.select('*')
		.eq('id', data.category)
		.single()
	if (categoryErr3) return HttpSupabaseError(categoryErr3)

	const { error: categoryErr4 } = await supabase
		.from('price_list_category')
		.update({
			item_order: categoryData3.item_order
				? [...categoryData3.item_order, Number(id)]
				: [Number(id)],
		})
		.eq('id', data.category)
	if (categoryErr4) return HttpSupabaseError(categoryErr4)

	return HttpSuccess()
}
