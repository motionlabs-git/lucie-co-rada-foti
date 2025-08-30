import crypto from 'crypto'
import { writeFile, unlink } from 'fs/promises'
import path from 'path'
import { v2 as cloudinary } from 'cloudinary'
import { createServerClient } from '../supabase/server'

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
	secure: true,
})

export async function uploadFile(file: File) {
	const hash = crypto.randomBytes(8).toString('hex')
	const arrayBuffer = await file.arrayBuffer()
	const buffer = Buffer.from(arrayBuffer)
	const fileName = `${hash}_${file.name.replaceAll(' ', '_')}`
	const filePath = path.join(process.cwd(), 'public/upload/' + fileName)

	try {
		await writeFile(filePath, buffer)

		const uploadResult = await cloudinary.uploader.upload(filePath, {
			resource_type: 'image',
		})
		const supabase = await createServerClient()

		const { error } = await supabase.from('image_upload').insert([
			{
				name: fileName,
				url: uploadResult.url,
				public_id: uploadResult.public_id,
			},
		])
		if (error) throw new Error('Failed to save file to database')
	} catch (err) {
		console.log(err)
		throw new Error('File upload failed')
	} finally {
		await unlink(filePath)
	}
}
