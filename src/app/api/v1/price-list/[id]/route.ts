import { NextRequest } from 'next/server'
import { createServerClient } from '@/utils/supabase/server'
import {
	PriceListSchema,
	priceListValidation,
} from '@/schemas/price-list.schema'
import { PostgrestSingleResponse } from '@supabase/supabase-js'
import { PriceListCategorySchema } from '@/schemas/price-list-category.schema'
import {
	HttpSupabaseError,
	HttpValidationError,
} from '@/utils/api/errorResponse'
import { HttpSuccess } from '@/utils/api/successResponse'
import { deleteFile, uploadFile } from '@/utils/upload/uploadFile'
import { Model } from '@/schemas/model'

interface Params {
	id: string
}

export async function POST(
	request: NextRequest,
	{ params }: { params: Promise<Params> }
) {
	try {
		const { id } = await params
		const formData = await request.formData()
		const data = formData.get('data')
		if (!data) return HttpValidationError()

		// VALIDATE DATA
		const parsedData = JSON.parse(data as string)
		const result = priceListValidation.safeParse(parsedData)
		if (!result.success) return HttpValidationError()

		const supabase = await createServerClient()

		const {
			data: existingData,
			error: existingErr,
		}: PostgrestSingleResponse<PriceListSchema> = await supabase
			.from('price_list')
			.select('*')
			.eq('id', id)
			.single()
		if (existingErr) return HttpSupabaseError(existingErr)

		// SET IMAGE VALUES FROM FORM
		let image_name: string | null = parsedData.image_name
		let image_public_id: string | null = parsedData.image_public_id
		let image_url: string | null = parsedData.image_url

		// UPLOAD IF FILE
		const file = formData.get('file')
		if (file) {
			if (!(file instanceof Blob)) return HttpValidationError()

			const response = await uploadFile(file, 'price_list_photo')
			image_name = response.name
			image_public_id = response.public_id
			image_url = response.url
		}

		// IF PUBLIC ID DOESN'T MATCH, DELETE OLD FILE
		if (
			image_public_id !== existingData.image_public_id &&
			existingData.image_public_id
		) {
			await deleteFile(existingData.image_public_id)
		}

		// UPDATE NEW PRICE LIST ITEM
		const { error: priceListErr } = await supabase
			.from('price_list')
			.update({ ...result.data, image_name, image_public_id, image_url })
			.eq('id', id)
		if (priceListErr) return HttpSupabaseError(priceListErr)

		// GET CATEGORY
		const {
			data: categoryData1,
			error: categoryErr1,
		}: PostgrestSingleResponse<Model<PriceListCategorySchema>> =
			await supabase
				.from('price_list_category')
				.select('*')
				.contains('item_order', [Number(id)])
				.single()
		if (categoryErr1) return HttpSupabaseError(categoryErr1)

		if (categoryData1.id === parsedData.category) return HttpSuccess()

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
			.eq('id', parsedData.category)
			.single()
		if (categoryErr3) return HttpSupabaseError(categoryErr3)

		const { error: categoryErr4 } = await supabase
			.from('price_list_category')
			.update({
				item_order: categoryData3.item_order
					? [...categoryData3.item_order, Number(id)]
					: [Number(id)],
			})
			.eq('id', parsedData.category)
		if (categoryErr4) return HttpSupabaseError(categoryErr4)

		return HttpSuccess()
	} catch {
		return HttpValidationError()
	}
}
