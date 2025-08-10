import React from 'react'
import Image from 'next/image'

interface Props {
	title: string
	price: number
}

const PricelistSlide = ({ title, price }: Props) => {
	return (
		<div className='embla__slide flex items-center gap-10'>
			<div className='flex-3 h-full'>
				<h2 className='text-4xl text-orange font-promenadeItalic font-bold'>
					{title}
				</h2>
				<p className='font-promenadeItalic'>{price}</p>
			</div>
			<Image
				src={
					'https://www.brides.com/thmb/LMyiMPxRFx82BLiHZC8lySJFnGo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/marriage-pose-photo-recirc-kyle-john-1-29-4f97523aa049471992292e8d6ddc41ee.jpg'
				}
				width={800}
				height={800}
				alt={'Slide'}
				className='h-full object-cover max-h-[60vh] w-full flex-5 rounded-2xl select-none'
			></Image>
		</div>
	)
}

export default PricelistSlide
