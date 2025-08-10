import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import z from 'zod'
import emailjs from '@emailjs/browser'

const phoneRegex = /^(?:\d\s*){9}$/

const FormInputs = z.object({
	name: z.string().nonempty('Toto pole je povinné'),
	phone: z
		.string()
		.regex(phoneRegex, 'Neplatné telefonní číslo')
		.nonempty('Toto pole je povinné'),
	email: z.email().nonempty('Toto pole je povinné'),
	text: z
		.string()
		.min(5, { message: 'Minimální délka je 5 znaků' })
		.max(300, { message: 'Maximální délka je 300 znaků' })
		.nonempty('Toto pole je povinné'),
})

type Inputs = z.infer<typeof FormInputs>

const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>({
		resolver: zodResolver(FormInputs),
		mode: 'onSubmit',
	})

	const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
		console.log(data)

		emailjs
			.sendForm(
				'EMAILJS_SERVICE_ID',
				'EMAILJS_TEMPLATE_ID',
				JSON.stringify(data),
				{
					publicKey: 'EMAILJS_PUBLIC_KEY',
				}
			)
			.then(
				() => {
					console.log('SUCCESS!')
				},
				(error) => {
					console.log('FAILED...', error.text)
				}
			)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='flex-1'>
			<fieldset className='blurryItem'>
				<label htmlFor='name' className='font-promenadeItalic text-xl'>
					Jméno
				</label>

				<div className='relative flex justify-center overflow-hidden rounded-xl mt-2'>
					<input
						className='peer z-20 py-3 px-4 shadow-md border-stone-400 border rounded-xl block w-full focus:border-stone-700 duration-200 bg-stone-300/30 backdrop-blur-2xl font-satoshiBold font-semibold text-xl placeholder:text-black/40'
						type='text'
						placeholder='Jméno'
						id='name'
						autoComplete='off'
						{...register('name')}
					/>
					<div className='w-1/3 z-10 aspect-square h-auto rounded-full bg-orange absolute bottom-0 translate-y-1/2 opacity-30 blur-3xl peer-focus:opacity-20 peer-focus:w-2/3 duration-300'></div>
				</div>
				{errors.name && (
					<p className='text-red-400 text-base mt-2'>
						{errors.name.message}
					</p>
				)}
			</fieldset>

			<fieldset className='mt-3 blurryItem'>
				<label htmlFor='phone' className='font-promenadeItalic text-xl'>
					Telefon
				</label>

				<div className='relative flex justify-center overflow-hidden rounded-xl mt-2'>
					<input
						className='peer z-20 py-3 px-4 shadow-md border-stone-400 border rounded-xl block w-full focus:border-stone-700 duration-200 bg-stone-300/30 backdrop-blur-2xl font-satoshiBold font-semibold text-xl placeholder:text-black/40'
						type='text'
						placeholder='Telefon'
						id='phone'
						autoComplete='off'
						{...register('phone', {
							required: 'Toto pole je povinné',
						})}
					/>
					<div className='w-1/3 z-10 aspect-square h-auto rounded-full bg-orange absolute bottom-0 translate-y-1/2 opacity-30 blur-3xl peer-focus:opacity-20 peer-focus:w-2/3 duration-300'></div>
				</div>
				{errors.phone && (
					<p className='text-red-400 text-base mt-2'>
						{errors.phone.message}
					</p>
				)}
			</fieldset>

			<fieldset className='mt-3 blurryItem'>
				<label htmlFor='email' className='font-promenadeItalic text-xl'>
					Email
				</label>

				<div className='relative flex justify-center overflow-hidden rounded-xl mt-2'>
					<input
						className='peer z-20 py-3 px-4 shadow-md border-stone-400 border rounded-xl block w-full focus:border-stone-700 duration-200 bg-stone-300/30 backdrop-blur-2xl font-satoshiBold font-semibold text-xl placeholder:text-black/40'
						type='text'
						placeholder='Email'
						id='email'
						autoComplete='off'
						{...register('email')}
					/>
					<div className='w-1/3 z-10 aspect-square h-auto rounded-full bg-orange absolute bottom-0 translate-y-1/2 opacity-30 blur-3xl peer-focus:opacity-20 peer-focus:w-2/3 duration-300'></div>
				</div>
				{errors.email && (
					<p className='text-red-400 text-base mt-2'>
						{errors.email.message}
					</p>
				)}
			</fieldset>

			<fieldset className='mt-3 blurryItem'>
				<label
					htmlFor='textarea'
					className='invertText font-promenadeItalic text-xl'
				>
					Text
				</label>

				<div className='relative flex justify-center overflow-hidden rounded-xl mt-2'>
					<textarea
						className='peer z-20 py-3 px-4 max-h-[10em] shadow-md border-stone-400 border rounded-xl block w-full focus:border-stone-700 duration-200 bg-stone-300/30 backdrop-blur-2xl font-satoshiBold font-semibold text-xl placeholder:text-black/40'
						placeholder='Jméno'
						rows={5}
						maxLength={300}
						id='textarea'
						autoComplete='off'
						{...register('text')}
					/>
					<div className='w-1/3 z-10 aspect-square h-auto rounded-full bg-orange absolute bottom-0 translate-y-1/2 opacity-30 blur-3xl peer-focus:opacity-20 peer-focus:w-2/3 duration-300'></div>
				</div>
			</fieldset>
			{errors.text && (
				<p className='text-red-400 text-base mt-2'>
					{errors.text.message}
				</p>
			)}

			<button
				type='submit'
				className='group relative w-full mt-4 rounded-xl'
			>
				<div className='absolute w-full h-full rounded-xl bg-black group-hover:bg-lightOrange group-hover:blur-xs duration-400 blur-none'></div>
				<p className='relative font-satoshiBold font-semibold text-white py-3 group-hover:text-black duration-400'>
					Odeslat
				</p>
			</button>

			{errors.root && (
				<p className='text-red-400 text-base mt-2'>
					{errors.root.message}
				</p>
			)}
		</form>
	)
}

export default Form
