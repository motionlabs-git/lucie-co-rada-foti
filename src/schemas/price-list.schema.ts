import * as z from 'zod'

export const priceListValidation = z.object({
	title: z.string().trim().nonempty('Title is required'),
	subtitle: z.string().trim().optional(),
	description: z.string().trim().nonempty('Description is required'),
	items: z.array(
		z.object({
			id: z.number().int(),
			name: z.string().trim().nonempty('Item name is required'),
		})
	),
	price: z.number().min(0, 'Price must be a positive number'),
	image_name: z.string().trim().nonempty('Image name is required').nullable(),
	image_public_id: z
		.string()
		.trim()
		.nonempty('Image public_id is required')
		.nullable(),
	image_url: z.string().trim().nonempty('Image URL is required').nullable(),
	category: z.number().int(),
})

export type PriceListSchema = z.infer<typeof priceListValidation>
