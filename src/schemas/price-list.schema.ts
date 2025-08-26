import * as z from 'zod'

export const priceListValidation = z.object({
	title: z.string().trim().nonempty('Title is required'),
	subtitle: z.string().trim().optional(),
	description: z.string().trim().nonempty('Description is required'),
	price: z.number().min(0, 'Price must be a positive number'),
	image: z.string().trim().optional(),
	category: z.number().int(),
})

export type PriceListSchema = z.infer<typeof priceListValidation>
