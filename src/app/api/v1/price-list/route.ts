import { NextRequest } from 'next/server'
import { createServerClient } from '@/utils/supabase/server'
import { priceListValidation } from '@/schemas/price-list.schema'
import {
	HttpSupabaseError,
	HttpValidationError,
} from '@/utils/api/errorResponse'
import { HttpSuccess } from '@/utils/api/successResponse'

export async function POST(request: NextRequest) {
	const data = await request.json()

	const result = priceListValidation.safeParse(data)
	if (!result.success) {
		return HttpValidationError()
	}

	const supabase = await createServerClient()

	// CREATE NEW PRICE LIST ITEM
	const { data: priceListData, error: priceListErr } = await supabase
		.from('price_list')
		.insert([data])
		.select()
		.single()
	if (priceListErr) return HttpSupabaseError(priceListErr)

	// GET CATEGORY
	const { data: categoryData, error: categoryErr1 } = await supabase
		.from('price_list_category')
		.select('item_order')
		.eq('id', data.category)
		.single()
	if (categoryErr1) return HttpSupabaseError(categoryErr1)

	// UPDATE CATEGORY
	const { error: categoryErr2 } = await supabase
		.from('price_list_category')
		.update({
			order: categoryData.item_order
				? [...categoryData.item_order, priceListData.id]
				: [priceListData.id],
		})
		.eq('id', data.category)
	if (categoryErr2) return HttpSupabaseError(categoryErr2)

	return HttpSuccess()
}
