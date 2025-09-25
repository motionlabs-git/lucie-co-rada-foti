import * as z from 'zod'

export const galleryGridValidation = z.object({
	title: z.string().trim().nonempty('Name is required'),
	image_id: z.number().nullable(),
})

export type GalleryGridSchema = z.infer<typeof galleryGridValidation>
