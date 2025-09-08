import crypto from 'crypto'
import axios from 'axios'
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function uploadFile(file: File, preset: string) {
	try {
		const hash = crypto.randomBytes(8).toString('hex')
		const fileName = `${hash}_${file.name.replaceAll(' ', '_')}`

		const form = new FormData()
		form.append('file', file)
		form.append('upload_preset', preset)

		const uploadResult = await axios.post<{
			url: string
			public_id: string
		}>(process.env.CLOUDINARY_V1_URL!, form, {
			headers: { 'Content-Type': 'multipart/form-data' },
		})

		return {
			name: fileName,
			url: uploadResult.data.url,
			public_id: uploadResult.data.public_id,
		}
	} catch {
		throw new Error('File upload failed')
	}
}

export async function deleteFile(publicId: string) {
	try {
		await cloudinary.uploader.destroy(publicId)
	} catch {
		throw new Error('Error while deleting the file')
	}
}
