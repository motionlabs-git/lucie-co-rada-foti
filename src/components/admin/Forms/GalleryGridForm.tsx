import {
	GalleryGridSchema,
	galleryGridValidation,
} from '@/schemas/gallery-grid.schema'
import Image from 'next/image'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Input from '../Inputs/Input'
import { createClient } from '@/utils/supabase/client'
import { PostgrestResponse } from '@supabase/supabase-js'
import { Model } from '@/schemas/model'
import { ImageUploadSchema } from '@/schemas/image-upload.schema'
import { ImSpinner2 } from 'react-icons/im'
import { FiSave } from 'react-icons/fi'
import { GalleryGridUploadJoin } from '@/types/gallery-grid-upload-join'
import CSRPagination from '../Pagination/CSRPagination'

interface IProps {
	defaultValues: GalleryGridUploadJoin
	onSubmit: (data: GalleryGridSchema) => void
	loading: boolean
	response: boolean
	error: boolean
}

const GalleryGridForm: React.FC<IProps> = ({
	defaultValues,
	onSubmit,
	loading,
	response,
	error,
}) => {
	const supabase = createClient()

	const pageSize = 20
	const [page, setPage] = useState(1)

	const [pageData, setPageData] = useState<null | Model<ImageUploadSchema>[]>(
		null
	)
	const [count, setCount] = useState(0)
	const [selectedImage, setSelectedImage] =
		useState<null | ImageUploadSchema>(defaultValues.image_upload ?? null)

	const {
		handleSubmit,
		register,
		setValue,
		formState: { errors },
	} = useForm<GalleryGridSchema>({
		defaultValues: {
			title: defaultValues.title,
			image_id: defaultValues.image_upload?.id ?? null,
		},
		resolver: zodResolver(galleryGridValidation),
	})

	useEffect(() => {
		const fetchCount = async () => {
			const {
				count,
				error: paginationError,
			}: PostgrestResponse<Model<ImageUploadSchema>> = await supabase
				.from('image_upload')
				.select('*', { count: 'exact', head: true })

			if (paginationError) {
				// TODO: handle error
				return
			}

			setCount(count ?? 0)
		}

		fetchCount()
	}, [supabase])

	useEffect(() => {
		const fetchGalleryData = async () => {
			const { data }: PostgrestResponse<Model<ImageUploadSchema>> =
				await supabase
					.from('image_upload')
					.select('*')
					.range((page - 1) * pageSize, page * pageSize)

			setPageData(data)
		}

		fetchGalleryData()
	}, [supabase, page])

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col gap-4 overflow-y-auto mt-4'
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
				<label>Selected image</label>
				<div className='w-full max-w-3xs aspect-square bg-black/50 rounded-lg overflow-hidden mt-1'>
					{selectedImage && (
						<Image
							src={selectedImage.url}
							alt={selectedImage.name}
							width={500}
							height={500}
							className='w-full h-full object-cover object-center'
						/>
					)}
				</div>
			</div>
			<div>
				<label>Gallery</label>
				<ul className='w-full grid grid-cols-[repeat(auto-fill,minmax(12rem,2fr))] gap-4'>
					{pageData?.map((image) => (
						<li
							key={image.id}
							className='w-full aspect-square border border-white/5 hover:border-white/20 duration-300 rounded-lg overflow-hidden cursor-pointer select-none'
						>
							<button
								type='button'
								className='w-full h-full'
								onClick={() => {
									setValue('image_id', image.id)
									setSelectedImage(image)
								}}
							>
								<Image
									src={image.url}
									alt={image.name}
									width={500}
									height={500}
									className='w-full h-full object-cover object-center'
								/>
							</button>
						</li>
					))}
				</ul>
			</div>

			<CSRPagination
				page={page}
				onPageChange={(page) => setPage(page)}
				count={count}
				pageSize={pageSize}
			/>

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

export default GalleryGridForm
