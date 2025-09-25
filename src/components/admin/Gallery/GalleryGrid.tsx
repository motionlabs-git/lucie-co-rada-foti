'use client'

import { GalleryGridUploadJoin } from '@/types/gallery-grid-upload-join'
import { createClient } from '@/utils/supabase/client'
import { PostgrestResponse } from '@supabase/supabase-js'
import React, { useEffect, useState } from 'react'
import ImageSlot from '../Inputs/ImageSlot'
import GalleryGridModal from '../Modal/GalleryGridModal'

const GalleryGrid = () => {
	const supabase = createClient()

	const [gridData, setGridData] = useState<null | GalleryGridUploadJoin[]>(
		null
	)
	const [loading, setLoading] = useState(true)

	const [updateGrid, setUpdateGrid] = useState(0)

	const [selectedId, setSelectedId] = useState<null | number>(null)
	const [isOpenModal, setIsOpenModal] = useState(false)

	const handleCloseModal = () => {
		setIsOpenModal(false)
		setSelectedId(null)
	}

	const handleUpdateGrid = () => {
		setUpdateGrid((prev) => prev + 1)
	}

	useEffect(() => {
		const fetchGridData = async () => {
			setLoading(true)
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

			if (data) {
				setGridData(data)
			}

			setLoading(false)
		}

		fetchGridData()
	}, [updateGrid, supabase])

	const handleDelete = async (id: number) => {
		const { error } = await supabase
			.from('gallery_grid')
			.update({ image_id: null })
			.eq('id', id)

		if (error) {
			// TODO: handle error
		}

		handleUpdateGrid()
	}

	if (loading) {
		return <div>Loading...</div>
	}

	return (
		<>
			<div className='flex gap-4 mt-8'>
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
								handleDelete={() => handleDelete(item.id)}
								handleOpenPicker={() => {
									setSelectedId(item.id)
									setIsOpenModal(true)
								}}
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
								handleDelete={() => handleDelete(item.id)}
								handleOpenPicker={() => {
									setSelectedId(item.id)
									setIsOpenModal(true)
								}}
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
								handleDelete={() => handleDelete(item.id)}
								handleOpenPicker={() => {
									setSelectedId(item.id)
									setIsOpenModal(true)
								}}
							></ImageSlot>
						)
					})}
				</fieldset>
			</div>

			<GalleryGridModal
				id={selectedId}
				opened={isOpenModal}
				onClose={handleCloseModal}
				onUpdate={handleUpdateGrid}
			/>
		</>
	)
}

export default GalleryGrid
