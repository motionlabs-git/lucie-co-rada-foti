import React from 'react'
import Marquee from '../Marquee/Marquee'
import Image from 'next/image'
import { GalleryImage } from '@/types/gallery-image'

const GalleryMiddleColumn = ({
	galleryData,
	className,
	handleClick,
}: {
	galleryData: GalleryImage[]
	className: string
	handleClick: (id: number) => void
}) => {
	return (
		<div className='hidden md:flex h-screen items-end flex-1'>
			<div
				id='galleryMiddleColumn'
				className={`h-fit w-full flex flex-col gap-4 ${className}`}
			>
				<div
					id='galleryMiddleColumnFill'
					className='w-full flex flex-col gap-4'
				>
					{galleryData.map((img, index) => (
						<div
							key={index}
							onClick={() => {
								handleClick(img.id)
							}}
							className={`relative w-full h-auto ${
								index % 2 === 0
									? 'aspect-[4/5]'
									: 'aspect-[5/4]'
							} overflow-hidden rounded-xl cursor-pointer group`}
						>
							<div className='w-full h-full duration-300 group-hover:blur-xs'>
								<Image
									width={800}
									height={800}
									className='w-full h-full object-cover duration-300 rounded-xl'
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

				{galleryData.map((img, index) => (
					<div
						key={index}
						onClick={() => {
							handleClick(img.id)
						}}
						className={`relative w-full h-auto ${
							index % 2 === 0 ? 'aspect-[4/5]' : 'aspect-[5/4]'
						} overflow-hidden rounded-xl cursor-pointer group`}
					>
						<div className='w-full h-full duration-300 group-hover:blur-xs'>
							<Image
								width={800}
								height={800}
								className='w-full h-full object-cover duration-300 rounded-xl'
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

export default GalleryMiddleColumn
