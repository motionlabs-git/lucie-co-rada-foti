import * as z from 'zod'

export const priceListCategoryValidation = z.object({
	name: z.string().trim().nonempty('Title is required'),
	item_order: z.array(z.number()).nullable(),
})

export type PriceListCategorySchema = z.infer<
	typeof priceListCategoryValidation
>
