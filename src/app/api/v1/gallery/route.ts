import { NextRequest } from 'next/server'
import {
	HttpInternalServerError,
	HttpValidationError,
} from '@/utils/api/errorResponse'
import { HttpSuccess } from '@/utils/api/successResponse'
import { uploadFile } from '@/utils/upload/uploadFile'
import { createServerClient } from '@/utils/supabase/server'

export async function POST(request: NextRequest) {
	try {
		const formData = await request.formData()
		const files = formData.getAll('files')

		if (!files) return HttpValidationError()

		for (const file of files) {
			if (!(file instanceof Blob)) return HttpValidationError()

			const response = await uploadFile(file, 'gallery_photo')

			const supabase = await createServerClient()
			const { error } = await supabase
				.from('image_upload')
				.insert([response])
			if (error) throw new Error('Failed to save file to database')
		}

		return HttpSuccess()
	} catch (err) {
		console.log(err)
		return HttpInternalServerError()
	}
}
