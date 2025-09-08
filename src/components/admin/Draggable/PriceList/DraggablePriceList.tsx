'use client'

import React, { useState } from 'react'
import {
	DndContext,
	closestCenter,
	PointerSensor,
	useSensor,
	useSensors,
	DragEndEvent,
	DragOverEvent,
} from '@dnd-kit/core'
import {
	SortableContext,
	verticalListSortingStrategy,
	arrayMove,
} from '@dnd-kit/sortable'
import DraggableItem from './DraggableItem'
import { PriceListSchema } from '@/schemas/price-list.schema'
import { Model } from '@/schemas/model'

interface IProps {
	priceListData: Model<PriceListSchema>[]
	categoryData: { id: number; name: string; order: number[] }[]
}

const DraggablePriceList: React.FC<IProps> = ({
	priceListData,
	categoryData,
}) => {
	const [items, setItems] = useState<Record<string, string[]>>(
		Object.fromEntries(
			categoryData.map((category) => [
				category.id,
				category.order.map((item) => item.toString()),
			])
		)
	)

	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint: { distance: 5 },
		})
	)

	const findContainer = (id: string): string | undefined => {
		const category = categoryData.find((category) =>
			items[category.id.toString()].includes(id)
		)

		if (category) return category.id.toString()
	}

	const handleDragOver = (event: DragOverEvent) => {
		const { active, over } = event
		if (!over) return

		const activeContainer = findContainer(active.id as string)
		let overContainer = findContainer(over.id as string)

		// If dropped on an empty container, over.id will be the container id itself
		if (
			!overContainer &&
			categoryData.some((category) => category.id.toString() === over.id)
		) {
			overContainer = over.id as string
		}

		if (
			!activeContainer ||
			!overContainer ||
			activeContainer === overContainer
		)
			return

		setItems((prev) => {
			const activeIndex = prev[activeContainer].indexOf(
				active.id as string
			)
			const newActive = [...prev[activeContainer]]
			newActive.splice(activeIndex, 1)
			const overIndex = prev[overContainer].indexOf(over.id as string)
			const newOver = [...prev[overContainer]]
			// If dropped on container itself (empty), push to end
			if (overIndex === -1) {
				newOver.push(active.id as string)
			} else {
				newOver.splice(overIndex + 1, 0, active.id as string)
			}
			return {
				...prev,
				[activeContainer]: newActive,
				[overContainer]: newOver,
			}
		})
	}

	const handleDragEnd = (event: DragEndEvent) => {
		const { active, over } = event
		if (!over) return

		const activeContainer = findContainer(active.id as string)
		let overContainer = findContainer(over.id as string)

		// If dropped on an empty container, over.id will be the container id itself
		if (
			!overContainer &&
			categoryData.some((category) => category.id.toString() === over.id)
		) {
			overContainer = over.id as string
		}

		if (!activeContainer || !overContainer) return

		if (activeContainer === overContainer) {
			const oldIndex = items[activeContainer].indexOf(active.id as string)
			const newIndex = items[overContainer].indexOf(over.id as string)
			if (oldIndex !== newIndex && newIndex !== -1) {
				const newItems = {
					...items,
					[activeContainer]: arrayMove(
						items[activeContainer],
						oldIndex,
						newIndex
					),
				}
				setItems(newItems)
			}
		}
	}

	return (
		<DndContext
			sensors={sensors}
			collisionDetection={closestCenter}
			onDragOver={handleDragOver}
			onDragEnd={handleDragEnd}
		>
			<div className='flex flex-col gap-4 select-none mt-4'>
				{categoryData.map((category) => (
					<div
						key={category.id}
						className='bg-white/5 dark:bg-black/50 rounded-xl p-4'
					>
						<h3>{category.name}</h3>

						<div className='flex flex-col gap-2 mt-2'>
							<SortableContext
								items={items[`${category.id}`]}
								strategy={verticalListSortingStrategy}
							>
								{items[`${category.id}`].map((id) => (
									<DraggableItem
										key={id}
										id={id}
										item={priceListData.find(
											(item) => item.id.toString() === id
										)}
										disabled={
											items[`${category.id}`].length === 1
										}
									/>
								))}
							</SortableContext>
						</div>
					</div>
				))}
			</div>
		</DndContext>
	)
}

export default DraggablePriceList
