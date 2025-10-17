import { GalleryGridImage } from '@/types/gallery-grid'
import React from 'react'
import Image from 'next/image'
import Marquee from '../Marquee/Marquee'

// index % 2 === 0 ? 'aspect-[4/5]' : 'aspect-[5/4]'

const GalleryImage = ({
	onClick,
	className,
	img,
}: {
	onClick: () => void
	className: string
	img: GalleryGridImage
}) => {
	return (
		<div
			onClick={onClick}
			className={`relative w-full h-auto ${className} overflow-hidden rounded-xl cursor-pointer group select-none`}
		>
			<div className='w-full h-full duration-300 group-hover:blur-xs'>
				{img.image_id && (
					<Image
						width={1000}
						height={1000}
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
	)
}

export default GalleryImage
