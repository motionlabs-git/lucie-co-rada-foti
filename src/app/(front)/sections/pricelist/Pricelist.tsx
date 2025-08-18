'use client'

import React from 'react'
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

const Pricelist: React.FC<IProps> = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
	const { selectedIndex, onDotButtonClick } = useDotButton(emblaApi)

	return (
		<section className='container'>
			<h1>
				<em>Ceník</em>
			</h1>

			<div className='w-full mt-8 flex border-b border-black/30 '>
				<button className='flex-1 text-center'>
					<p className='font-bold'>Svatební focení</p>
					<div className='w-full h-0.5 bg-orange'></div>
				</button>

				<div className='h-full border-r border-black/30'></div>

				<button className='flex-1'>
					<p>Ostatní focení</p>
				</button>
			</div>

			<div className=' relative flex flex-col items-center justify-center gap-6'>
				<div
					className='embla pricelist w-full relative cursor-none'
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
										? ' bg-orange w-3'
										: 'bg-brown w-2'
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
