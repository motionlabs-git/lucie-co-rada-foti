import React from 'react'
import Image from 'next/image'
import Marquee from '../Marquee/Marquee'
import { GalleryImage } from '@/types/gallery-image'

const GalleryColumn = ({
	galleryData,
	className,
	handleClick,
}: {
	galleryData: GalleryImage[]
	className: string
	handleClick: (id: number) => void
}) => {
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
						className='relative rounded-xl cursor-pointer group'
					>
						<div className='w-full h-auto duration-300 group-hover:blur-xs'>
							<Image
								width={800}
								height={800}
								className='w-full duration-300 rounded-xl'
								src={img.url}
								alt={img.name}
							/>
						</div>

						<div className='absolute top-0 left-0 w-full h-full flex justify-center items-end opacity-0 group-hover:opacity-100 duration-300 '>
							<Marquee sets={4} containerClassName='gap-4'>
								<h2 className='text-orange font-promenadeItalic text-7xl'>
									Titulek obrázku ~{' '}
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
