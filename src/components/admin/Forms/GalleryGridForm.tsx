'use client'
import React, { useEffect, useState } from 'react'
import { FiSave } from 'react-icons/fi'
import { ImSpinner2 } from 'react-icons/im'
import ImageSelector from '../Inputs/ImageSelector'
import { createClient } from '@/utils/supabase/client'
import { PostgrestResponse } from '@supabase/supabase-js'
import { GalleryGridUploadJoin } from '@/types/gallery-grid-upload-join'

const GalleryGridForm = () => {
	const supabase = createClient()
	// const router = useRouter()
	const [loading] = useState(false)
	const [gridData, setGridData] = useState<null | GalleryGridUploadJoin[]>(
		null
	)
	const [updateGrid, setUpdateGrid] = useState(0)
	// const [response, setResponse] = useState(false)
	// const [error, setError] = useState(false)

	useEffect(() => {
		const fetchGridData = async () => {
			const { data, error } = (await supabase
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
		const { error } = await supabase
			.from('gallery_grid')
			.update({ image_id: null })
			.eq('id', id)

		setUpdateGrid((prev) => ++prev)
	}

	return (
		<form className='flex flex-col mt-4'>
			<div className='flex gap-4'>
				<fieldset className='flex flex-col flex-1 gap-4'>
					{gridData?.slice(0, 4).map((item, index) => {
						return (
							<ImageSelector
								key={item.id}
								aspect={
									index % 2 === 0
										? 'aspect-[4/5]'
										: 'aspect-[5/4]'
								}
								item={item}
								handleDelete={() => deleteImage(item.id)}
							></ImageSelector>
						)
					})}
				</fieldset>

				<fieldset className='flex flex-col flex-1 gap-4'>
					{gridData?.slice(4, 8).map((item, index) => {
						return (
							<ImageSelector
								key={item.id}
								aspect={
									index % 2 === 0
										? 'aspect-[4/5]'
										: 'aspect-[5/4]'
								}
								item={item}
								handleDelete={() => deleteImage(item.id)}
							></ImageSelector>
						)
					})}
				</fieldset>
				<fieldset className='flex flex-col flex-1 gap-4'>
					{gridData?.slice(8, 12).map((item, index) => {
						return (
							<ImageSelector
								key={item.id}
								aspect={
									index % 2 === 0
										? 'aspect-[4/5]'
										: 'aspect-[5/4]'
								}
								item={item}
								handleDelete={() => deleteImage(item.id)}
							></ImageSelector>
						)
					})}
				</fieldset>
			</div>
		</form>
	)
}

export default GalleryGridForm
