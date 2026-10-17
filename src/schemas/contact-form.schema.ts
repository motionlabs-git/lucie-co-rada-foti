import * as z from 'zod'

export const contactFormValidation = z.object({
	name: z.string().nonempty('Toto pole je povinné'),
	phone: z
		.string()
		.regex(/^(?:\d\s*){9}$/, 'Neplatné telefonní číslo')
		.nonempty('Toto pole je povinné'),
	email: z.email('Neplatný email').nonempty('Toto pole je povinné'),
	photo_package: z.string().nonempty('Prosím vyber balíček'),
	text: z
		.string()
		.min(5, { message: 'Minimální délka je 5 znaků' })
		.max(300, { message: 'Maximální délka je 300 znaků' })
		.nonempty('Toto pole je povinné'),
})

export type ContactFormSchema = z.infer<typeof contactFormValidation>
