import React from 'react'
import Image from 'next/image'
import { PriceListSchema } from '@/schemas/price-list.schema'

const PricelistSlide = ({ data }: { data: PriceListSchema }) => {
	if (!data.image_url || !data.image_name) return

	return (
		<div className='embla__slide flex flex-col md:flex-row-reverse items-center select-none gap-4 p-4 md:gap-8 md:p-8'>
			<div className='w-full md:flex-1 flex items-center justify-center'>
				<div className='w-full aspect-video md:aspect-square md:max-w-xs rounded-2xl overflow-hidden shadow-lg'>
					<Image
						src={data.image_url}
						width={800}
						height={800}
						alt={data.image_name}
						className='w-full h-full object-cover'
					></Image>
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

				<p className='self-end font-promenadeItalic text-2xl md:text-3xl lg:text-4xl'>
					{data.price
						.toString()
						.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}{' '}
					Kč
				</p>
			</div>
		</div>
	)
}

export default PricelistSlide
