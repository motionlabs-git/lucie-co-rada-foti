import * as z from 'zod'

export const imageUploadValidation = z.object({
	name: z.string().trim().nonempty('Name is required'),
	url: z.string().trim().nonempty('URL is required'),
	public_id: z.string().trim().nonempty('Public ID is required'),
})

export type ImageUploadSchema = z.infer<typeof imageUploadValidation>
