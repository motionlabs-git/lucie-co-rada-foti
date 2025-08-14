import * as z from 'zod'

export const seoValidation = z.object({
	title: z.string().trim().nonempty('Title is required'),
	description: z.string().trim().nonempty('Description is required'),
	keywords: z.string().trim().optional(),
})

export type SeoSchema = z.infer<typeof seoValidation>
