'use client'

import React from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { GoGrabber } from 'react-icons/go'
import { PriceListSchema } from '@/schemas/price-list.schema'
import Link from 'next/link'
import { Model } from '@/schemas/model'

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

	return (
		<div
			ref={setNodeRef}
			style={{
				transform: CSS.Transform.toString(transform),
				transition,
			}}
			{...attributes}
			className='group flex items-center justify-between bg-stone-900 select-none cursor-pointer rounded-lg p-2'
		>
			{item && (
				<Link
					href={`/admin/price-list/${item.id}`}
					className='flex-1 group-hover:underline'
				>
					{item.title}
				</Link>
			)}
			<div {...listeners}>
				<GoGrabber size={24} />
			</div>
		</div>
	)
}

export default DraggableItem
