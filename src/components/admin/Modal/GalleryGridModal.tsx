import React, { useEffect, useState } from 'react'
import GalleryGridForm from '../Forms/GalleryGridForm'
import { createClient } from '@/utils/supabase/client'
import { GalleryGridSchema } from '@/schemas/gallery-grid.schema'
import { PostgrestSingleResponse } from '@supabase/supabase-js'
import { GalleryGridUploadJoin } from '@/types/gallery-grid-upload-join'
import { FiX } from 'react-icons/fi'

interface IProps {
	id: number | null
	opened: boolean
	onClose: () => void
	onUpdate: () => void
}

const GalleryGridModal: React.FC<IProps> = ({
	id,
	opened,
	onClose,
	onUpdate,
}) => {
	const supabase = createClient()

	const [defaultValues, setDefaultValues] =
		useState<null | GalleryGridUploadJoin>(null)

	const [loading, setLoading] = useState(true)

	const [updateLoading, setUpdateLoading] = useState(false)
	const [updateResponse, setUpdateResponse] = useState(false)
	const [updateError, setUpdateError] = useState(false)

	useEffect(() => {
		const fetchDefaultValues = async () => {
			if (!id) return

			setLoading(true)
			const { data: galleryData, error: galleryError } = (await supabase
				.from('gallery_grid')
				.select(
					`
					  id,
					  title,
					  image_upload (
						id,
						name,
						url
					  )
				  `
				)
				.eq('id', id)
				.single()) as PostgrestSingleResponse<GalleryGridUploadJoin>

			if (galleryError) setDefaultValues(null)
			if (galleryData) setDefaultValues(galleryData)

			setLoading(false)
		}

		fetchDefaultValues()
	}, [id, supabase])

	const handleFormSubmit = async (data: GalleryGridSchema) => {
		setUpdateLoading(true)
		const { error: updateError } = await supabase
			.from('gallery_grid')
			.update({
				image_id: data.image_id,
				title: data.title,
			})
			.eq('id', id)

		if (updateError) setUpdateError(true)
		else setUpdateResponse(true)

		setUpdateLoading(false)
		setTimeout(() => {
			setUpdateResponse(false)
			setUpdateError(false)
			onUpdate()
			onClose()
		}, 2000)
	}

	if (!opened) return null

	return (
		<div className='bg-stone-800/20 animate-fade-in flex justify-center items-center backdrop-blur-xs fixed left-0 top-0 w-full h-screen z-50 p-10'>
			<div className='flex flex-col max-h-full bg-stone-800/50 border border-white/20 rounded-2xl p-8 w-7xl'>
				<div className='flex items-center justify-between'>
					<h2 className='text-xl'>Select image</h2>

					<button onClick={onClose}>
						<FiX className='w-6 h-6 hover:text-white/50 duration-300' />
					</button>
				</div>

				{loading ? (
					<p>Loading...</p>
				) : defaultValues ? (
					<GalleryGridForm
						defaultValues={defaultValues}
						onSubmit={handleFormSubmit}
						loading={updateLoading}
						response={updateResponse}
						error={updateError}
					/>
				) : null}
			</div>
		</div>
	)
}

export default GalleryGridModal
