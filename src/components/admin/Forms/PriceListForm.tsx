'use client'

import { NextPage } from 'next'
import {
	FieldValue,
	FieldValues,
	useFieldArray,
	useForm,
	UseFormSetValue,
} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Input from '../Inputs/Input'
import { FiPlus, FiSave, FiTrash2, FiX } from 'react-icons/fi'
import {
	PriceListSchema,
	priceListValidation,
} from '@/schemas/price-list.schema'
import Textarea from '../Inputs/Textarea'
import Select from '../Inputs/Select'
import { ImSpinner2 } from 'react-icons/im'
import DropImageSingle from '../Inputs/DropImageSingle'
import { FileWithPath } from 'react-dropzone'
import { useEffect, useState } from 'react'

interface IProps {
	defaultValues?: PriceListSchema
	onSubmit: (data: FormData) => void
	handleDelete?: () => void
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
	handleDelete,
}) => {
	const [file, setFile] = useState<FileWithPath | null>(null)

	const {
		register,
		control,
		watch,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm<PriceListSchema>({
		defaultValues,
		resolver: zodResolver(priceListValidation),
	})

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'items',
	})

	const handleAppendItem = () => append({ id: Date.now(), name: '' })

	const handleRemoveItem = (index: number) => remove(index)

	useEffect(() => {
		if (!defaultValues || !defaultValues.image_url)
			setValue('image_url', null)
		if (!defaultValues || !defaultValues.image_public_id)
			setValue('image_public_id', null)
		if (!defaultValues || !defaultValues.image_name)
			setValue('image_name', null)
	}, [defaultValues, setValue])

	const handleSetFile = (file: FileWithPath | null) => setFile(file)

	const handleSubmitForm = (data: PriceListSchema) => {
		const formData = new FormData()

		formData.append('data', JSON.stringify(data))

		if (file) {
			formData.append('file', file)
		}

		onSubmit(formData)
	}

	useEffect(() => {
		if (!defaultValues) {
			setValue('image_name', null)
			setValue('image_url', null)
			setValue('image_public_id', null)
		}
	}, [defaultValues, setValue])

	return (
		<form
			onSubmit={handleSubmit(handleSubmitForm)}
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
				{/* TODO: REFACTOR */}
				<label>Items</label>
				<div className='flex flex-col items-stretch px-2'>
					{fields.length > 0 && (
						<ul className='w-full flex flex-col'>
							{fields.map((field, index) => (
								<li
									key={field.id}
									className='flex items-center animate-fade-in gap-2'
								>
									<Input
										{...register(
											`items.${index}.name` as const
										)}
										placeholder={`Item ${index + 1}`}
										type='text'
										error={
											errors.items && errors.items[index]
												? (errors.items[index]
														?.name as FieldValue<FieldValues>)
												: undefined
										}
										className='mt-1'
									/>
									<button
										onClick={() => handleRemoveItem(index)}
										className='h-8 w-8 flex items-center justify-center bg-red-500 rounded'
									>
										<FiX />
									</button>
								</li>
							))}
						</ul>
					)}
					<button
						type='button'
						onClick={handleAppendItem}
						className='flex items-center justify-center gap-1 bg-red-500 rounded py-1 px-2 mt-2'
					>
						<FiPlus /> Add item
					</button>
				</div>
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
				<DropImageSingle
					name='image'
					values={{
						image_name: watch('image_name') ?? null,
						image_public_id: watch('image_public_id') ?? null,
						image_url: watch('image_url') ?? null,
					}}
					setValue={
						setValue as unknown as UseFormSetValue<
							Record<string, string | null>
						>
					}
					file={file}
					setFile={handleSetFile}
					className='mt-1'
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

			<div className='flex gap-4 justify-end'>
				{handleDelete && (
					<button
						type='button'
						onClick={handleDelete}
						className='self-end flex justify-center items-center gap-2 bg-red-400/80 hover:bg-red-400 text-white rounded-lg duration-300 py-3 h-12 px-6'
					>
						<p>Delete</p>
						<FiTrash2 className='text-lg' />
					</button>
				)}

				<button
					type='submit'
					className='self-end flex justify-center items-center gap-2 bg-white/90 hover:bg-white text-gray-900 rounded-lg duration-300 h-12 px-6'
				>
					{loading ? (
						<ImSpinner2 className='animate-spin text-lg' />
					) : (
						'Save'
					)}
					<FiSave className='text-lg' />
				</button>
			</div>
		</form>
	)
}

export default PriceListForm
