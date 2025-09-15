'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FiSave } from 'react-icons/fi'
import { ImSpinner2 } from 'react-icons/im'
import ImageSelector from '../Inputs/ImageSelector'
import { galleryGridImage } from '@/types/gallery-grid'
import { ImageType } from '@/types/image'

const GalleryGridForm = ({
	gridData,
	uploadedImages,
}: {
	gridData: galleryGridImage[]
	uploadedImages: ImageType[]
}) => {
	const router = useRouter()
	const [loading, setLoading] = useState(false)
	const [response, setResponse] = useState(false)
	const [error, setError] = useState(false)

	const [grid, setGrid] = useState(gridData)

	const deleteImage = (id: number) => {
		const index = grid.findIndex((item) => {
			return item.id === id
		})

		console.log(
			(grid[index] = {
				id: id,
				created_at: null,
				image_id: null,
			})
		)

		setGrid([
			...grid,
			(grid[index] = {
				id: id,
				created_at: null,
				image_id: null,
			}),
		])
	}

	return (
		<form className='flex flex-col mt-4'>
			<div className='flex gap-4'>
				<fieldset className='flex flex-col flex-1 gap-4'>
					{grid.slice(0, 4).map((item, index) => {
						return (
							<ImageSelector
								key={item.id}
								aspect={
									index % 2 === 0
										? 'aspect-[4/5]'
										: 'aspect-[5/4]'
								}
								image={uploadedImages.find((img) => {
									if (img.id === item.image_id)
										return img.id === item.image_id
								})}
								handleDelete={() => deleteImage(item.id)}
							></ImageSelector>
						)
					})}
				</fieldset>

				<fieldset className='flex flex-col flex-1 gap-4'>
					{grid.slice(4, 8).map((item, index) => {
						return (
							<ImageSelector
								key={item.id}
								aspect={
									index % 2 === 1
										? 'aspect-[4/5]'
										: 'aspect-[5/4]'
								}
								image={uploadedImages.find((img) => {
									return img.id === item.image_id
								})}
								handleDelete={() => deleteImage(item.id)}
							></ImageSelector>
						)
					})}
				</fieldset>

				{/* <fieldset className='flex flex-col flex-1 gap-4'>
					{grid.slice(8, 12).map((item) => {
						return (
							<ImageSelector
								key={item.id}
								aspect={'aspect-[4/5]'}
								image={
									uploadedImages.find((img) => {
										if (img.id === item.image_id)
											return img.id === item.image_id
									})?.url
								}
							></ImageSelector>
						)
					})}
				</fieldset> */}
			</div>

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
		</form>
	)
}

export default GalleryGridForm
