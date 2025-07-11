'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signInValidation, SignInSchema } from '@/schemas/sign-in.schema'

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
		<form onSubmit={handleSubmit(action)}>
			<h1>Log in to App</h1>

			<input
				{...register('email')}
				placeholder='Email address'
				type='text'
			/>
			{errors.email && <span>{errors.email.message}</span>}
			<input
				{...register('password')}
				placeholder='Password'
				type='password'
			/>
			{errors.password && <span>{errors.password.message}</span>}

			<button type='submit'>Log in</button>
		</form>
	)
}

export default SignInForm
