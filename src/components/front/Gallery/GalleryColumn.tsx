import React from 'react'
import Image from 'next/image'
import Marquee from '../Marquee/Marquee'
import { GalleryGridImage } from '@/types/gallery-grid'

const GalleryColumn = ({
	galleryData,
	className,
	handleClick,
}: {
	galleryData: GalleryGridImage[]
	className: string
	handleClick: (id: number) => void
}) => {
	console.log(galleryData)
	return (
		<div className='md:h-screen w-full md:items-end flex flex-1'>
			<div
				className={`h-fit w-full flex flex-col gap-4 galleryColumn pb-2 ${className}`}
			>
				{galleryData.map((img, index) => (
					<div
						key={index}
						onClick={() => {
							handleClick(img.id)
						}}
						className={`relative w-full h-auto ${
							index % 2 === 0 ? 'aspect-[4/5]' : 'aspect-[5/4]'
						} overflow-hidden rounded-xl cursor-pointer group select-none`}
					>
						<div className='w-full h-full duration-300 group-hover:blur-xs'>
							{img.image_id && (
								<Image
									width={800}
									height={800}
									className='w-full h-full object-cover duration-300 rounded-xl'
									src={img.image_id.url}
									alt={img.title}
								/>
							)}
						</div>

						<div className='absolute top-0 left-0 w-full h-full flex justify-center items-end opacity-0 group-hover:opacity-100 duration-300 '>
							<Marquee sets={6} containerClassName='gap-4'>
								<h2 className='text-orange font-promenadeItalic text-7xl'>
									{img.title} ~{' '}
								</h2>
							</Marquee>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default GalleryColumn
