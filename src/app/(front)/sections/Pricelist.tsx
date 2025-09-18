'use client'

import React, { useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import PricelistSlide from '@/components/front/Pricelist/PricelistSlide'
import {
	DotButton,
	useDotButton,
} from '@/components/front/Pricelist/EmblaDotsButton'
import PricelistSelector from '@/components/front/Pricelist/PricelistSelector'
import { PriceListSchema } from '@/schemas/price-list.schema'
import { PricelistCategoryType } from '@/types/pricelist-category'
import { Model } from '@/schemas/model'

const Pricelist = ({
	pricelistData: { pricelist, categories },
}: {
	pricelistData: {
		pricelist: Model<PriceListSchema>[] | null
		categories: Model<PricelistCategoryType>[] | null
	}
}) => {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
	const { selectedIndex, onDotButtonClick } = useDotButton(emblaApi)

	const [selectedCategory, setSelectedCategory] =
		useState<PricelistCategoryType | null>(
			Array.isArray(categories) ? categories[0] : null
		)

	const selectCategory = (category: PricelistCategoryType) => {
		setSelectedCategory(category)
	}

	return (
		<section className='container'>
			<h1 className='text-center'>
				<em className=''>Ceník služeb</em>
			</h1>

			<PricelistSelector
				categories={categories}
				selectCategory={selectCategory}
				selectedCategoryId={selectedCategory?.id ?? null}
			></PricelistSelector>

			<div
				id='pricelist'
				className=' relative flex flex-col items-center justify-center gap-6'
			>
				<div className='embla pricelist w-full relative' ref={emblaRef}>
					<div className='embla__container pointer-events-none'>
						{selectedCategory &&
							selectedCategory.item_order.map((id) => {
								const slide = pricelist?.find(
									(item) =>
										item.id === id &&
										item.category === selectedCategory.id
								)
								if (!slide) return null

								return (
									<PricelistSlide
										data={slide}
										key={slide.id}
									></PricelistSlide>
								)
							})}
					</div>
				</div>

				<div className='flex justify-center items-center gap-1'>
					{selectedCategory &&
						selectedCategory.item_order.map((_, index) => (
							<div
								key={index}
								className='w-5 aspect-square h-auto flex justify-center items-center'
							>
								<DotButton
									key={index}
									onClick={() => onDotButtonClick(index)}
									className={`aspect-square rounded-[3px] duration-200 ${
										index === selectedIndex
											? ' bg-orange w-[0.6rem]'
											: 'bg-lightOrange w-2'
									}`}
								/>
							</div>
						))}
				</div>
			</div>
		</section>
	)
}

export default Pricelist
