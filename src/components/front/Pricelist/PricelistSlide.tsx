import React, { useState } from 'react'
import Image from 'next/image'
import { PriceListSchema } from '@/schemas/price-list.schema'
import { useLenis } from 'lenis/react'

const PricelistSlide = ({ data }: { data: PriceListSchema }) => {
	const [isLoading, setIsLoading] = useState(true)

	const lenis = useLenis()

	if (!data.image_url || !data.image_name) return

	return (
		<div className='embla__slide flex flex-col md:flex-row-reverse items-center gap-4 p-4 md:gap-8 md:p-8'>
			<div className='w-full md:flex-1 flex items-center justify-center'>
				<div className='w-full aspect-video md:aspect-square md:max-w-xs rounded-2xl overflow-hidden shadow-lg'>
					<Image
						src={data.image_url}
						width={800}
						height={800}
						alt={data.image_name}
						className={`w-full h-full object-cover transition-opacity duration-500 ${
							isLoading ? 'opacity-0' : 'opacity-100'
						}`}
						onLoadingComplete={() => setIsLoading(false)}
						placeholder='blur'
						blurDataURL='/images/AboutLucie2.webp'
					/>
				</div>
			</div>
			<div className='md:flex-1 w-full flex flex-col items-center gap-2 md:gap-4'>
				<h2 className='self-start text-4xl lg:text-5xl text-orange font-promenadeItalic font-bold'>
					{data.title}
				</h2>

				{data.items && data.items.length > 0 ? (
					<ul className='font-promenadeItalic text-lg md:text-xl lg:text-2xl w-10/12 list-disc'>
						{data.items.map((item) => (
							<li key={item.id}>{item.value}</li>
						))}
					</ul>
				) : null}

				<div className='flex flex-col justify-end w-full gap-4'>
					<p className='self-end font-promenadeItalic text-2xl md:text-3xl lg:text-4xl'>
						{data.price
							.toString()
							.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}{' '}
						Kč
					</p>

					<button
						aria-label='Go to contatct form'
						type='submit'
						className='group relative w-full rounded-xl'
						onClick={() => lenis?.scrollTo('#contact')}
					>
						<div className='absolute w-full h-full rounded-xl bg-lightOrange group-hover:blur-xs duration-400 blur-none'></div>
						<p className='relative font-satoshiBold font-semibold text-black py-3 duration-400'>
							To chci
						</p>
					</button>
				</div>
			</div>
		</div>
	)
}

export default PricelistSlide
