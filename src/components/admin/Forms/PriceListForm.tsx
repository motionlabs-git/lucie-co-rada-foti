'use client'

import { NextPage } from 'next'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Input from '../Inputs/Input'
import { FiSave } from 'react-icons/fi'
import {
	PriceListSchema,
	priceListValidation,
} from '@/schemas/price-list.schema'
import Textarea from '../Inputs/Textarea'
import Select from '../Inputs/Select'
import { ImSpinner2 } from 'react-icons/im'

interface IProps {
	defaultValues?: PriceListSchema
	onSubmit: (data: PriceListSchema) => void
	loading: boolean
	response: boolean
	error: boolean
}

const PriceListForm: NextPage<IProps> = ({
	onSubmit,
	defaultValues,
	loading,
	response,
	error,
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<PriceListSchema>({
		defaultValues,
		resolver: zodResolver(priceListValidation),
	})

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col gap-4 mt-4'
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
			</div>

			<div>
				<label>Subtitle</label>
				<Input
					{...register('subtitle')}
					placeholder='Subtitle'
					type='text'
					error={errors.subtitle}
					className='mt-1'
				/>
			</div>

			<div>
				<label>Description</label>
				<Textarea
					{...register('description')}
					placeholder='Description'
					error={errors.description}
					className='resize-none mt-1'
					rows={3}
				/>
			</div>

			<div>
				<label>Price</label>
				<Input
					{...register('price', { valueAsNumber: true })}
					placeholder='Price'
					type='number'
					error={errors.price}
					className='resize-none mt-1'
				/>
			</div>

			<div>
				<label>Image</label>
				<Input
					{...register('image')}
					placeholder='Image'
					type='text'
					error={errors.image}
					className='resize-none mt-1'
				/>
			</div>

			<div>
				<label>Category</label>
				<Select
					{...register('category', { valueAsNumber: true })}
					error={errors.category}
					defaultValue={''}
					className='mt-1'
				>
					<option value='' disabled>
						Vyberte
					</option>
					<option value='1'>Svatební focení</option>
					<option value='2'>Ostatní focení</option>
				</Select>
			</div>

			{error && (
				<span className='text-red-500 animate-res-fade-out'>
					An error occurred while saving the data.
				</span>
			)}

			{response && (
				<span className='text-green-500 animate-res-fade-out'>
					Data saved successfully
				</span>
			)}

			<button
				type='submit'
				className='self-end flex justify-center items-center gap-2 bg-white/90 hover:bg-white text-gray-900 rounded-lg duration-300 py-3 px-6'
			>
				{loading ? (
					<ImSpinner2 className='animate-spin text-lg' />
				) : (
					'Save'
				)}
				<FiSave className='text-lg' />
			</button>
		</form>
	)
}

export default PriceListForm
