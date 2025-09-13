'use client'

import { useState } from 'react'
import { ImSpinner2 } from 'react-icons/im'
import { SeoSchema, seoValidation } from '@/schemas/seo.schema'
import { NextPage } from 'next'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { axiosClient } from '@/utils/axios/client'
import Input from '../Inputs/Input'
import { FiSave } from 'react-icons/fi'
import Textarea from '../Inputs/Textarea'
import ProgressBar from '../Inputs/ProgressBar'

interface IProps {
	id: number
	defaultValues?: SeoSchema
}

const SeoForm: NextPage<IProps> = ({ id, defaultValues }) => {
	const [loading, setLoading] = useState(false)
	const [response, setResponse] = useState(false)
	const [error, setError] = useState(false)

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<SeoSchema>({
		defaultValues,
		resolver: zodResolver(seoValidation),
	})

	const handleFormSubmit = async (data: SeoSchema) => {
		setLoading(true)

		axiosClient
			.post(`/api/v1/seo/${id}`, data)
			.then(() => {
				setResponse(true)
				setError(false)
			})
			.catch(() => {
				setResponse(false)
				setError(true)
			})
			.finally(() => {
				setLoading(false)
				setTimeout(() => {
					setResponse(false)
					setError(false)
				}, 2000)
			})
	}

	return (
		<form
			onSubmit={handleSubmit(handleFormSubmit)}
			className='flex flex-col gap-4 animate-fade-in'
		>
			<div>
				<label>Title</label>
				<Input
					{...register('title')}
					placeholder='Title'
					type='text'
					error={errors.title}
					className='mt-1'
				/>

				<ProgressBar
					characters={watch('title').length}
					low={20}
					enought={[50, 60]}
				/>
			</div>

			<div>
				<label>Description</label>
				<Input
					{...register('description')}
					placeholder='Description'
					type='text'
					error={errors.description}
					className='mt-1'
				/>

				<ProgressBar
					characters={watch('description').length}
					low={50}
					enought={[70, 155]}
				/>
			</div>

			<div>
				<label>Keywords</label>
				<Textarea
					{...register('keywords')}
					placeholder='Keywords'
					error={errors.keywords}
					className='resize-none mt-1'
					rows={3}
				/>
			</div>

			{error && (
				<span className='text-red-500 animate-res-fade-out'>
					An error occurred while saving the data
				</span>
			)}

			{response && (
				<span className='text-green-500 animate-res-fade-out'>
					Data saved successfully
				</span>
			)}

			<button
				type='submit'
				// disabled={loading}
				className='self-end flex justify-center items-center gap-2 bg-white/90 hover:bg-white text-gray-900 rounded-lg duration-300 py-3 px-6'
			>
				{loading ? (
					<ImSpinner2 className='animate-spin text-lg' />
				) : (
					<FiSave className='text-lg' />
				)}
				Save
			</button>
		</form>
	)
}

export default SeoForm
