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
		axiosFileClient.delete(`/api/v1/price-list/${id}`)
	}

	if (item)
		return (
			<div
				ref={setNodeRef}
				style={{
					transform: CSS.Transform.toString(transform),
					transition,
				}}
				{...attributes}
				className='group flex gap-2 items-center justify-between bg-white/50 hover:bg-stone-800 transition-colors duration-200 dark:bg-stone-900 select-none cursor-pointer rounded-lg px-2 '
			>
				<div className='flex flex-1 items-center gap-2'>
					<div
						onClick={(e) => e.preventDefault()}
						className='p-1 flex flex-col justify-center items-center text-white/50 hover:text-white duration-200'
						{...listeners}
					>
						<FiCode size={18} className='rotate-90' />
					</div>

					<Link
						href={`/admin/price-list/${item.id}`}
						className='flex gap-1 flex-1 py-3'
					>
						<p className=' group-hover:underline text-nowrap'>
							{item.title}
						</p>

						<p className=''> - {item.price} CZK</p>
					</Link>
				</div>
				{/* TODO:Delete */}
				<DeletePriceInput handleDelete={deletePrice} />
			</div>
		)
}

export default DraggableItem
