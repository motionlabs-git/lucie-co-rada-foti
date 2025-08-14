import React from 'react'
import Image from 'next/image'

interface Props {
	title: string
	price: number
}

const PricelistSlide = ({ title, price }: Props) => {
	return (
		<div className='embla__slide flex flex-col md:flex-row-reverse items-center select-none gap-8 p-8'>
			<div className='w-full md:flex-1 flex items-center justify-center'>
				<div className='w-full aspect-video md:aspect-square md:max-w-xs rounded-2xl overflow-hidden shadow-lg'>
					<Image
						src={
							'https://www.brides.com/thmb/LMyiMPxRFx82BLiHZC8lySJFnGo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/marriage-pose-photo-recirc-kyle-john-1-29-4f97523aa049471992292e8d6ddc41ee.jpg'
						}
						width={800}
						height={800}
						alt={'Slide'}
						className='w-full h-full object-cover'
					></Image>
				</div>
			</div>
			<div className='md:flex-1 flex flex-col items-center gap-4'>
				<h2 className='self-start text-4xl lg:text-5xl text-orange font-promenadeItalic font-bold'>
					{title}
				</h2>

				<ul className='font-promenadeItalic text-xl lg:text-2xl w-10/12 list-disc'>
					<li>Lorem ipsum dolor sit amet </li>
					<li>Lorem ipsum dolor sit amet </li>
				</ul>

				<p className='font-promenadeItalic text-xl lg:text-2xl w-10/12'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Iste magnam vitae assumenda repudiandae aliquam inventore
				</p>
				<p className='self-end font-promenadeItalic text-3xl lg:text-4xl'>
					{price},-
				</p>
			</div>
		</div>
	)
}

export default PricelistSlide
