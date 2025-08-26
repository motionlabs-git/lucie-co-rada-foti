import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/utils/supabase/server'
import { priceListValidation } from '@/schemas/price-list.schema'

export async function POST(request: NextRequest) {
	const data = await request.json()

	const result = priceListValidation.safeParse(data)
	if (!result.success) {
		return NextResponse.json({ code: 'VALIDATION_ERROR' }, { status: 400 })
	}

	const supabase = await createServerClient()

	// CREATE NEW PRICE LIST ITEM
	const { data: priceListData, error: priceListErr } = await supabase
		.from('price_list')
		.insert([data])
		.select()
		.single()
	if (priceListErr) {
		return NextResponse.json({ code: priceListErr.code }, { status: 400 })
	}

	// GET CATEGORY
	const { data: categoryData, error: categoryErr1 } = await supabase
		.from('price_list_category')
		.select('item_order')
		.eq('id', data.category)
		.single()
	if (categoryErr1) {
		return NextResponse.json({ code: categoryErr1.code }, { status: 400 })
	}

	// UPDATE CATEGORY
	const { error: categoryErr2 } = await supabase
		.from('price_list_category')
		.update({
			order: categoryData.item_order
				? [...categoryData.item_order, priceListData.id]
				: [priceListData.id],
		})
		.eq('id', data.category)
	if (categoryErr2) {
		return NextResponse.json({ code: categoryErr2.code }, { status: 400 })
	}

	return NextResponse.json({ code: 'SUCCESS' }, { status: 200 })
}
