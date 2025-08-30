'use client'

import React, { useState } from 'react'
import {
	PriceListCategorySchema,
	priceListCategoryValidation,
} from '@/schemas/price-list-category.schema'
import {
	closestCenter,
	DndContext,
	PointerSensor,
	useSensor,
	useSensors,
	DragEndEvent,
} from '@dnd-kit/core'
import {
	SortableContext,
	verticalListSortingStrategy,
	arrayMove,
} from '@dnd-kit/sortable'
import DraggableItem from './DraggableItem'
import { PriceListSchema } from '@/schemas/price-list.schema'
import { createClient } from '@/utils/supabase/client'

interface IProps {
	category: PriceListCategorySchema & { id: number }
	priceList: (PriceListSchema & { id: number })[]
}

const DroppableContainer: React.FC<IProps> = ({ category, priceList }) => {
	const [items, setItems] = useState<string[]>(
		category.item_order?.map((item) => item.toString()) ?? []
	)

	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint: { distance: 5 },
		})
	)

	const handleOrderChange = async (order: string[]) => {
		const result = priceListCategoryValidation.safeParse({
			...category,
			item_order: order.map((id) => parseInt(id)),
		})

		if (!result.success) {
			// TODO:
			console.error('Validation error:', result.error)
			return
		}

		const supabase = await createClient()
		const { error } = await supabase
			.from('price_list_category')
			.update({ item_order: result.data.item_order })
			.eq('id', category.id)

		if (error) {
			// TODO:
			console.error('Supabase error:', error)
		}
	}

	const handleDragEnd = (event: DragEndEvent) => {
		const { active, over } = event
		if (over && active.id !== over.id) {
			const oldIndex = items.indexOf(active.id.toString())
			const newIndex = items.indexOf(over.id.toString())
			const newItems = arrayMove(items, oldIndex, newIndex)
			setItems(newItems)
			handleOrderChange(newItems)
		}
	}

	if (!category.item_order || !items.length) return null

	return (
		<DndContext
			sensors={sensors}
			collisionDetection={closestCenter}
			onDragEnd={handleDragEnd}
		>
			<div className='bg-white/5 dark:bg-black/50 rounded-xl animate-fade-in p-4'>
				<h3>{category.name}</h3>

				<div className='flex flex-col gap-2 mt-2'>
					<SortableContext
						items={items.map((id) => id.toString())}
						strategy={verticalListSortingStrategy}
					>
						{items.map((id) => (
							<DraggableItem
								key={id}
								id={id}
								item={priceList.find(
									(item) => item.id.toString() === id
								)}
								disabled={items.length === 1}
							/>
						))}
					</SortableContext>
				</div>
			</div>
		</DndContext>
	)
}

export default DroppableContainer
