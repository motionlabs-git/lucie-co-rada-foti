'use client'

import React, { useCallback, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import PricelistSlide from '@/components/front/Pricelist/PricelistSlide'
import {
	DotButton,
	useDotButton,
} from '@/components/front/Pricelist/EmblaDotsButton'
import PricelistSelector from '@/components/front/Pricelist/PricelistSelector'
import { PriceListSchema } from '@/schemas/price-list.schema'
import { PricelistCategoryType } from '@/types/pricelist-category'
import gsap from 'gsap'
import { Model } from '@/schemas/model'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

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

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev()
	}, [emblaApi])

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext()
	}, [emblaApi])

	const [selectedCategory, setSelectedCategory] =
		useState<PricelistCategoryType | null>(
			Array.isArray(categories) ? categories[0] : null
		)

	const selectCategory = (category: PricelistCategoryType) => {
		gsap.to('#pricelist-slider', {
			filter: 'blur(8px)',
			opacity: 0,

			onComplete: () => {
				setSelectedCategory(category)
				emblaApi?.scrollTo(0, true)

				gsap.to('#pricelist-slider', {
					filter: 'blur(0px)',
					opacity: 1,
				})
			},
		})
	}

	return (
		<section className='container' id='pricelist'>
			<h1 className='text-center'>
				<em className=''>Ceník služeb</em>
			</h1>

			<PricelistSelector
				categories={categories}
				selectCategory={selectCategory}
				selectedCategoryId={selectedCategory?.id ?? null}
			></PricelistSelector>

			<div
				id='pricelist-slider'
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

				<div className='flex justify-center items-center gap-4 md:gap-8'>
					<button
						type='button'
						aria-label='Show previous slide'
						onClick={scrollPrev}
						className='p-2 bg-orange hover:bg-orange/80 hover:scale-95 duration-200 rounded-md text-white'
					>
						<FiChevronLeft size={18}></FiChevronLeft>
					</button>
					<div className='flex items-center gap-1'>
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

					<button
						type='button'
						aria-label='Show next slide'
						onClick={scrollNext}
						className='p-2 bg-orange hover:bg-orange/80 hover:scale-95 duration-200 rounded-md text-white'
					>
						<FiChevronRight size={18}></FiChevronRight>
					</button>
				</div>
			</div>
		</section>
	)
}

export default Pricelist
