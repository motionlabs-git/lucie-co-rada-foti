import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/utils/supabase/server'
import { priceListValidation } from '@/schemas/price-list.schema'
import { PostgrestSingleResponse } from '@supabase/supabase-js'
import { PriceListCategorySchema } from '@/schemas/price-list-category.schema'

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
	if (!result.success) {
		return NextResponse.json({ code: 'VALIDATION_ERROR' }, { status: 400 })
	}

	const supabase = await createServerClient()

	// CREATE NEW PRICE LIST ITEM
	const { error: priceListErr } = await supabase
		.from('price_list')
		.update(result.data)
		.eq('id', id)
	if (priceListErr) {
		return NextResponse.json({ code: priceListErr.code }, { status: 400 })
	}

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
	if (categoryErr1) {
		return NextResponse.json({ code: categoryErr1.code }, { status: 400 })
	}

	if (categoryData1.id === data.category) {
		return NextResponse.json({ code: 'SUCCESS' }, { status: 200 })
	}

	// FILTER OLD CATEGORY
	const { error: categoryErr2 } = await supabase
		.from('price_list_category')
		.update({
			item_order: categoryData1.item_order?.filter(
				(item) => item !== Number(id)
			),
		})
		.eq('id', categoryData1.id)
	if (categoryErr2) {
		return NextResponse.json({ code: categoryErr2.code }, { status: 400 })
	}

	// ADD TO NEW CATEGORY
	const { data: categoryData3, error: categoryErr3 } = await supabase
		.from('price_list_category')
		.select('*')
		.eq('id', data.category)
		.single()
	if (categoryErr3) {
		return NextResponse.json({ code: categoryErr3.code }, { status: 400 })
	}

	const { error: categoryErr4 } = await supabase
		.from('price_list_category')
		.update({
			item_order: categoryData3.item_order
				? [...categoryData3.item_order, Number(id)]
				: [Number(id)],
		})
		.eq('id', data.category)
	if (categoryErr4) {
		return NextResponse.json({ code: categoryErr4.code }, { status: 400 })
	}

	return NextResponse.json({ code: 'SUCCESS' }, { status: 200 })
}
