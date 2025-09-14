'use client'

import React from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { PriceListSchema } from '@/schemas/price-list.schema'
import Link from 'next/link'
import { Model } from '@/schemas/model'
import { FiCode } from 'react-icons/fi'
import { axiosFileClient } from '@/utils/axios/client'
import DeletePriceInput from '../../Inputs/DeletePriceInput'

const DraggableItem = ({
	id,
	item,
	disabled,
}: {
	id: string
	item?: Model<PriceListSchema>
	disabled: boolean
}) => {
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id, disabled })

	const deletePrice = () => {
		//TODO:User friendly ... loading, response, error

		axiosFileClient.delete(`/api/v1/price-list/${id}`)
	}

	return (
		<div
			ref={setNodeRef}
			style={{
				transform: CSS.Transform.toString(transform),
				transition,
			}}
			{...attributes}
			className='group flex items-center justify-between bg-white/50 hover:bg-stone-800 duration-200 dark:bg-stone-900 select-none cursor-pointer rounded-lg p-2 '
		>
			<div className='flex items-center gap-2'>
				<div
					className='p-1 flex flex-col justify-center items-center text-white/50 hover:text-white duration-200'
					{...listeners}
				>
					<FiCode size={18} className='rotate-90' />
				</div>

				{item && (
					<Link
						href={`/admin/price-list/${item.id}`}
						className='flex-1 group-hover:underline'
					>
						{item.title}
					</Link>
				)}
			</div>

			<DeletePriceInput handleDelete={deletePrice} />
		</div>
	)
}

export default DraggableItem
