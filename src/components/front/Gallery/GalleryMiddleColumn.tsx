import React from 'react'
import { GalleryGridImage } from '@/types/gallery-grid'
import GalleryImage from './GalleryImage'

const GalleryMiddleColumn = ({
	galleryData,
	className,
	handleClick,
}: {
	galleryData: GalleryGridImage[]
	className: string
	handleClick: (id: number) => void
}) => {
	return (
		<div className='flex h-screen items-end flex-1'>
			<div
				id='galleryMiddleColumn'
				className={`h-fit w-full flex flex-col gap-4 ${className}`}
			>
				<div
					id='galleryMiddleColumnFill'
					className='w-full flex flex-col gap-4'
				>
					{galleryData.map((img, index) => (
						<GalleryImage
							key={index}
							onClick={() => handleClick(img.id)}
							className={
								index % 2 === 1
									? 'aspect-[4/5]'
									: 'aspect-[5/4]'
							}
							img={img}
						/>
					))}
				</div>

				{galleryData.map((img, index) => (
					<GalleryImage
						key={index}
						onClick={() => handleClick(img.id)}
						className={
							index % 2 === 1 ? 'aspect-[4/5]' : 'aspect-[5/4]'
						}
						img={img}
					/>
				))}
			</div>
		</div>
	)
}

export default GalleryMiddleColumn
