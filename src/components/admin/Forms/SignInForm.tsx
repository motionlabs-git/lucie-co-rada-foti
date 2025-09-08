'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signInValidation, SignInSchema } from '@/schemas/sign-in.schema'
import { axiosClient } from '@/utils/axios/client'
import Input from '../Inputs/Input'
import Image from 'next/image'
import Logo from '../../../../public/images/logo.svg'
import { useRouter } from 'next/navigation'
import { ImSpinner2 } from 'react-icons/im'

interface IProps {
	action: (data: SignInSchema) => Promise<void>
}

const SignInForm: React.FC<IProps> = () => {
	const router = useRouter()
	const [loading, setLoading] = useState(false)
	const [unauthorizedError, setUnauthorizedError] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignInSchema>({
		resolver: zodResolver(signInValidation),
	})

	const handleFormSubmit = async (data: SignInSchema) => {
		setLoading(true)

		axiosClient
			.post('/api/v1/auth/sign_in', data)
			.then(() => router.push('/admin'))
			.catch((error) => {
				if (error.response.status === 401) {
					return setUnauthorizedError(true)
				}

				router.push('/admin/error')
			})
			.finally(() => setLoading(false))
	}

	return (
		<form
			onSubmit={handleSubmit(handleFormSubmit)} // AJAX CALL
			// onSubmit={handleSubmit(action)} // SERVER ACTION
			className='w-full max-w-2xs flex flex-col items-center'
		>
			<Image
				src={Logo}
				alt={'logo'}
				width={100}
				height={100}
				className='w-24 h-auto invert'
			/>

			<h1 className='text-2xl mt-8'>Log in to App</h1>

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

			{unauthorizedError && (
				<p className='self-start text-red-500 text-sm mt-2'>
					Invalid email or password
				</p>
			)}

			<button
				type='submit'
				onClick={() => {
					setUnauthorizedError(false)
				}}
				disabled={loading}
				className='w-full flex justify-center items-center bg-white/90 hover:bg-white text-gray-900 rounded-lg duration-300 p-3 mt-3 h-12'
			>
				{loading ? (
					<ImSpinner2 className='animate-spin text-lg' />
				) : (
					'Log in'
				)}
			</button>
		</form>
	)
}

export default SignInForm
