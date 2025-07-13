'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signInValidation, SignInSchema } from '@/schemas/sign-in.schema'
import Input from '../Inputs/Input'
import Image from 'next/image'

interface SignInFormProps {
	action: (data: SignInSchema) => Promise<void>
}

const SignInForm: React.FC<SignInFormProps> = ({ action }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignInSchema>({
		resolver: zodResolver(signInValidation),
	})

	return (
		<form
			onSubmit={handleSubmit(action)}
			className='w-full max-w-2xs flex flex-col items-center'
		>
			<h1 className='text-2xl'>Log in to App</h1>

			<Input
				{...register('email')}
				placeholder='Email address'
				type='text'
				error={errors.email}
				className='mt-8'
			/>
			<Input
				{...register('password')}
				placeholder='Password'
				type='password'
				error={errors.password}
				className='mt-3'
			/>

			<button
				type='submit'
				className='w-full bg-white/90 hover:bg-white text-gray-900 rounded-lg duration-300 p-3 mt-3'
			>
				Log in
			</button>
		</form>
	)
}

export default SignInForm
