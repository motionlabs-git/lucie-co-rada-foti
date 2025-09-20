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
import gsap from 'gsap'

const Pricelist = ({
	pricelistData,
}: {
	pricelistData: {
		pricelist: PriceListSchema[] | null
		categories: PricelistCategoryType[] | null
	}
}) => {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
	const { selectedIndex, onDotButtonClick } = useDotButton(emblaApi)
	const [selectedCategory, setSelectedCategory] = useState(1)

	const selectCategory = (id: number) => {
		if (id !== selectedCategory)
			gsap.to('#pricelist-slider', {
				filter: 'blur(8px)',
				opacity: 0,

				onComplete: () => {
					setSelectedCategory(id)
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
				categories={pricelistData.categories}
				selectCategory={selectCategory}
				selectedCategory={selectedCategory}
			></PricelistSelector>

			<div
				id='pricelist-slider'
				className=' relative flex flex-col items-center justify-center gap-6'
			>
				<div className='embla pricelist w-full relative' ref={emblaRef}>
					<div className='embla__container pointer-events-none'>
						{pricelistData.pricelist
							?.filter((item) => {
								return item.category === selectedCategory
							})
							.map((slide, i) => (
								<PricelistSlide
									data={slide}
									key={i}
								></PricelistSlide>
							))}
					</div>
				</div>

				<div className='flex justify-center items-center gap-1'>
					{pricelistData.pricelist
						?.filter((item) => {
							return item.category === selectedCategory
						})
						.map((_, index) => (
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
