'use client'

import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import PricelistSlide from '@/components/front/Pricelist/PricelistSlide'
import {
	DotButton,
	useDotButton,
} from '@/components/front/Pricelist/EmblaDotsButton'

interface IProps {
	onMouseEnter?: () => void
	onMouseLeave?: () => void
}

const fakeData = [
	{ title: 'Rychle a bezbolestně', price: 1000 },
	{ title: 'Mám rád kompromis', price: 2000 },
	{ title: 'Před foťákem jako doma', price: 3000 },
]

const Pricelist: React.FC<IProps> = ({ onMouseEnter, onMouseLeave }) => {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
	const { selectedIndex, onDotButtonClick } = useDotButton(emblaApi)

	// useEffect(() => {
	// 	if (!emblaApi) return

	// 	emblaApi.on('scroll', (e) => {
	// 		console.log('Embla scroll event:', e)
	// 	})
	// }, [emblaApi])

	return (
		<section className='container relative flex flex-col items-center justify-center gap-6'>
			<div
				className='embla pricelist w-full relative cursor-none'
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				ref={emblaRef}
			>
				<div className='embla__container pointer-events-none'>
					{fakeData.map((slide, i) => (
						<PricelistSlide
							title={slide.title}
							price={slide.price}
							key={i}
						></PricelistSlide>
					))}
				</div>
			</div>

			<div className='flex justify-center items-center gap-1'>
				{fakeData.map((_, index) => (
					<div
						key={index}
						className='w-5 aspect-square h-auto flex justify-center items-center'
					>
						<DotButton
							key={index}
							onClick={() => onDotButtonClick(index)}
							className={`aspect-square rounded-full duration-200 ${
								index === selectedIndex
									? ' bg-orange w-4'
									: 'bg-brown w-3'
							}`}
						/>
					</div>
				))}
			</div>
		</section>
	)
}

export default Pricelist
