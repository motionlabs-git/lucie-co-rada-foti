import { NextRequest } from 'next/server'
import {
	HttpInternalServerError,
	HttpValidationError,
} from '@/utils/api/errorResponse'
import { HttpSuccess } from '@/utils/api/successResponse'
import { uploadFile } from '@/utils/upload/uploadFile'

export async function POST(request: NextRequest) {
	try {
		const formData = await request.formData()
		const files = formData.getAll('files')

		if (!files) return HttpValidationError()

		for (const file of files) {
			if (!(file instanceof Blob)) return HttpValidationError()

			await uploadFile(file)
		}

		return HttpSuccess()
	} catch {
		return HttpInternalServerError()
	}
}
