'use client'
import React, { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { PostgrestResponse } from '@supabase/supabase-js'
import { GalleryGridUploadJoin } from '@/types/gallery-grid-upload-join'
import ImageSlot from '../Inputs/ImageSlot'
import ImagePicker from '../Inputs/ImagePicker'
import { ImageUploadSchema } from '@/schemas/image-upload.schema'
import { Model } from '@/schemas/model'

const GalleryGridForm = ({
	galleryData,
}: {
	galleryData: Model<ImageUploadSchema>[]
}) => {
	const supabase = createClient()
	// const router = useRouter()
	// const [loading] = useState(false)
	const [gridData, setGridData] = useState<null | GalleryGridUploadJoin[]>(
		null
	)
	const [updateGrid, setUpdateGrid] = useState(0)
	const [imagePickerOpened, setImagePickerOpened] = useState<null | number>(
		null
	)

	// const [response, setResponse] = useState(false)
	// const [error, setError] = useState(false)

	useEffect(() => {
		const fetchGridData = async () => {
			const { data } = (await supabase
				.from('gallery_grid')
				.select(
					`
					  id,
					  image_upload (
					  id,
					  url
					  )
				  `
				)
				.order('id', {
					ascending: true,
				})) as PostgrestResponse<GalleryGridUploadJoin>

			setGridData(data)
		}

		fetchGridData()
	}, [updateGrid, supabase])

	const deleteImage = async (id: number) => {
		const {} = await supabase
			.from('gallery_grid')
			.update({ image_id: null })
			.eq('id', id)

		setUpdateGrid((prev) => ++prev)
	}

	const selectImage = async (id: number) => {
		console.log(id)

		console.log(imagePickerOpened)

		const {} = await supabase
			.from('gallery_grid')
			.update({ image_id: id })
			.eq('id', imagePickerOpened)

		setImagePickerOpened(null)
		setUpdateGrid((prev) => ++prev)

		//TODO: update tabulky
	}

	return (
		<div className='flex flex-col mt-4'>
			{imagePickerOpened && (
				<ImagePicker
					handleClose={() => setImagePickerOpened(null)}
					galleryData={galleryData}
					handleSelect={selectImage}
				></ImagePicker>
			)}

			<div className='flex gap-4'>
				<fieldset className='flex flex-col flex-1 gap-4'>
					{gridData?.slice(0, 4).map((item, index) => {
						return (
							<ImageSlot
								key={item.id}
								aspect={
									index % 2 === 0
										? 'aspect-[4/5]'
										: 'aspect-[5/4]'
								}
								item={item}
								handleDelete={() => deleteImage(item.id)}
								handleOpenPicker={() =>
									setImagePickerOpened(item.id)
								}
							></ImageSlot>
						)
					})}
				</fieldset>

				<fieldset className='flex flex-col flex-1 gap-4'>
					{gridData?.slice(4, 8).map((item, index) => {
						return (
							<ImageSlot
								key={item.id}
								aspect={
									index % 2 === 1
										? 'aspect-[4/5]'
										: 'aspect-[5/4]'
								}
								item={item}
								handleDelete={() => deleteImage(item.id)}
								handleOpenPicker={() =>
									setImagePickerOpened(item.id)
								}
							></ImageSlot>
						)
					})}
				</fieldset>
				<fieldset className='flex flex-col flex-1 gap-4'>
					{gridData?.slice(8, 12).map((item, index) => {
						return (
							<ImageSlot
								key={item.id}
								aspect={
									index % 2 === 0
										? 'aspect-[4/5]'
										: 'aspect-[5/4]'
								}
								item={item}
								handleDelete={() => deleteImage(item.id)}
								handleOpenPicker={() =>
									setImagePickerOpened(item.id)
								}
							></ImageSlot>
						)
					})}
				</fieldset>
			</div>
		</div>
	)
}

export default GalleryGridForm
