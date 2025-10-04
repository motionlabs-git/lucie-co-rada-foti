'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import z from 'zod'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import Link from 'next/link'
import { FiCheck } from 'react-icons/fi'

const FormInputs = z.object({
	name: z.string().nonempty('Toto pole je povinné'),
	phone: z
		.string()
		.regex(/^(?:\d\s*){9}$/, 'Neplatné telefonní číslo')
		.nonempty('Toto pole je povinné'),
	email: z.email('Neplatný email').nonempty('Toto pole je povinné'),
	text: z
		.string()
		.min(5, { message: 'Minimální délka je 5 znaků' })
		.max(300, { message: 'Maximální délka je 300 znaků' })
		.nonempty('Toto pole je povinné'),
})

type Inputs = z.infer<typeof FormInputs>

const Form = () => {
	const formRef = useRef<null | HTMLFormElement>(null)
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isSubmitSuccessful },
		reset,
		setError,
	} = useForm<Inputs>({
		resolver: zodResolver(FormInputs),
		mode: 'onSubmit',
	})

	const onSubmit: SubmitHandler<Inputs> = async () => {
		await emailjs.init({
			publicKey: process.env.EMAILJS_PUBLIC_KEY!,
			blockHeadless: true,
		})

		try {
			if (!formRef.current) {
				throw new Error('missing form')
			}

			await emailjs
				.sendForm(
					process.env.EMAILJS_SERVICE_ID!,
					process.env.EMAILJS_TEMPLATE_ID!,
					formRef.current
				)
				.then(
					() => {
						reset()
					},
					(error) => {
						throw new Error('Něco se pokazilo', error)
					}
				)
		} catch (e: unknown) {
			if (e instanceof TypeError) setError('root', { message: e.message })
		}
	}

	return (
		<form
			ref={formRef}
			onSubmit={handleSubmit(onSubmit)}
			className='flex-1 relative'
		>
			<div className='relative p-2'>
				{isSubmitSuccessful && (
					<div className='absolute top-0 left-0 bg-bone/50 backdrop-blur-xs z-20 w-full h-full flex flex-col gap-4 justify-center items-center opacity-0 animate-fade-in'>
						<p className='font-satoshiBold text-lg'>
							Formulář byl úspěšně odeslán{' '}
							<FiCheck className=' inline' size={20}></FiCheck>
						</p>

						<button
							type='button'
							aria-label='Send new form'
							className='relative h-12 font-satoshiBold border-black hover:bg-lightOrange duration-300 hover:border-lightOrange hover:text-black text-white border rounded-lg px-6 bg-black'
							onClick={() => reset()}
						>
							Poslat novou poptávku
						</button>
					</div>
				)}
				<fieldset className='blurryItem'>
					<label
						htmlFor='name'
						className='invertText font-promenadeItalic text-lg sm:text-xl'
					>
						Jméno
					</label>

					<div className='relative flex justify-center overflow-hidden rounded-xl mt-2'>
						<input
							readOnly={isSubmitting}
							className='invertText peer z-20 py-2 sm:py-3 px-3 sm:px-4 shadow-md border-stone-400 border rounded-xl block w-full focus:border-stone-700 duration-200 bg-stone-300/30 backdrop-blur-2xl font-satoshiBold font-semibold text-lg sm:text-xl placeholder:text-black/40'
							type='text'
							placeholder='Jméno'
							id='name'
							autoComplete='off'
							{...register('name')}
						/>
						<div className='w-1/3 z-10 aspect-square h-auto rounded-full bg-orange absolute bottom-0 translate-y-1/2 opacity-30 blur-3xl peer-focus:opacity-20 peer-focus:w-2/3 duration-300'></div>
					</div>
					{errors.name && (
						<p className='text-orange  text-base mt-2'>
							{errors.name.message}
						</p>
					)}
				</fieldset>

				<fieldset className='mt-3 blurryItem'>
					<label
						htmlFor='phone'
						className='invertText font-promenadeItalic text-lg sm:text-xl'
					>
						Telefon
					</label>

					<div className='relative flex justify-center overflow-hidden rounded-xl mt-1 sm:mt-2'>
						<input
							readOnly={isSubmitting ? true : false}
							className='invertText peer z-20 py-2 sm:py-3 px-3 sm:px-4 shadow-md border-stone-400 border rounded-xl block w-full focus:border-stone-700 duration-200 bg-stone-300/30 backdrop-blur-2xl font-satoshiBold font-semibold text-lg sm:text-xl placeholder:text-black/40'
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
						<p className='text-orange text-base mt-2'>
							{errors.phone.message}
						</p>
					)}
				</fieldset>

				<fieldset className='mt-3 blurryItem'>
					<label
						htmlFor='email'
						className='invertText font-promenadeItalic text-lg sm:text-xl'
					>
						Email
					</label>

					<div className='relative flex justify-center overflow-hidden rounded-xl mt-1 sm:mt-2'>
						<input
							readOnly={isSubmitting ? true : false}
							className='invertText peer z-20 py-2 sm:py-3 px-3 sm:px-4 shadow-md border-stone-400 border rounded-xl block w-full focus:border-stone-700 duration-200 bg-stone-300/30 backdrop-blur-2xl font-satoshiBold font-semibold text-lg sm:text-xl placeholder:text-black/40'
							type='text'
							placeholder='Email'
							id='email'
							autoComplete='off'
							{...register('email')}
						/>
						<div className='w-1/3 z-10 aspect-square h-auto rounded-full bg-orange absolute bottom-0 translate-y-1/2 opacity-30 blur-3xl peer-focus:opacity-20 peer-focus:w-2/3 duration-300'></div>
					</div>
					{errors.email && (
						<p className='text-orange text-base mt-2'>
							{errors.email.message}
						</p>
					)}
				</fieldset>

				<fieldset className='mt-3 blurryItem'>
					<label
						htmlFor='textarea'
						className='invertText font-promenadeItalic text-lg sm:text-xl'
					>
						Zpráva
					</label>

					<div className='relative flex justify-center overflow-hidden rounded-xl mt-1 sm:mt-2'>
						<textarea
							readOnly={isSubmitting ? true : false}
							className='invertText peer z-20 py-2 sm:py-3 px-3 sm:px-4 max-h-[10em] shadow-md border-stone-400 border rounded-xl block w-full focus:border-stone-700 duration-200 bg-stone-300/30 backdrop-blur-2xl font-satoshiBold font-semibold text-lg sm:text-xl placeholder:text-black/40'
							placeholder='Zpráva'
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
					<p className='text-orange text-base mt-2'>
						{errors.text.message}
					</p>
				)}

				<button
					aria-label='Submit form'
					type='submit'
					className='group relative w-full mt-4 rounded-xl invertText'
				>
					<div className='absolute w-full h-full rounded-xl bg-black group-hover:bg-lightOrange group-hover:blur-xs duration-400 blur-none'></div>
					<p className='relative font-satoshiBold font-semibold text-white py-3 group-hover:text-black duration-400'>
						{isSubmitting ? 'Odesílání' : 'Odeslat'}
					</p>
				</button>

				{errors.root && (
					<p className='text-orange text-base mt-2'>
						{errors.root.message}
					</p>
				)}

				<p className='text-xs invertText mt-2'>
					*Odesláním formuláře souhlasím se{' '}
					<Link aria-label='GDPR' target='_blank' href={'/gdpr'}>
						Zásadama ochrany osobních údajů
					</Link>
				</p>
			</div>
		</form>
	)
}

export default Form
