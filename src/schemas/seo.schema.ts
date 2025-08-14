import * as z from 'zod'

export const seoValidation = z.object({
	title: z.string().nonempty('Title is required'),
	description: z.string().nonempty('Description is required'),
	keywords: z.string().optional(),
})

export type SeoSchema = z.infer<typeof seoValidation>
