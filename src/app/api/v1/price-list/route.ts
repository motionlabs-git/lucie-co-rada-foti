import { NextRequest } from 'next/server'
import { priceListValidation } from '@/schemas/price-list.schema'
import {
	HttpInternalServerError,
	HttpSupabaseError,
	HttpValidationError,
} from '@/utils/api/errorResponse'
import { uploadFile } from '@/utils/upload/uploadFile'
import { createServerClient } from '@/utils/supabase/server'
import { HttpSuccess } from '@/utils/api/successResponse'

export async function POST(request: NextRequest) {
	try {
		const formData = await request.formData()
		const data = formData.get('data')
		if (!data) return HttpValidationError()

		// VALIDATE DATA
		const parsedData = JSON.parse(data as string)
		const result = priceListValidation.safeParse(parsedData)
		if (!result.success) return HttpValidationError()

		// HANDLE FILE UPLOAD
		let image_name: string | null = null
		let image_public_id: string | null = null
		let image_url: string | null = null

		const file = formData.get('file')
		if (file) {
			if (!(file instanceof Blob)) return HttpValidationError()

			// DELETE FILE
			const response = await uploadFile(file, 'price_list_photo')
			image_name = response.name
			image_public_id = response.public_id
			image_url = response.url
		}

		const supabase = await createServerClient()

		// CREATE NEW PRICE LIST ITEM
		const { data: priceListData, error: priceListErr } = await supabase
			.from('price_list')
			.insert([{ ...parsedData, image_name, image_public_id, image_url }])
			.select()
			.single()
		if (priceListErr) return HttpSupabaseError(priceListErr)

		// GET CATEGORY
		const { data: categoryData, error: categoryErr1 } = await supabase
			.from('price_list_category')
			.select('item_order')
			.eq('id', parsedData.category)
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
			.eq('id', parsedData.category)
		if (categoryErr2) return HttpSupabaseError(categoryErr2)

		return HttpSuccess()
	} catch {
		return HttpInternalServerError()
	}
}
