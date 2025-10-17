import React from 'react'
import { GalleryGridImage } from '@/types/gallery-grid'
import GalleryImage from './GalleryImage'

const GalleryColumn = ({
	galleryData,
	className,
	wrapperClassname,
	handleClick,
}: {
	galleryData: GalleryGridImage[]
	className: string
	wrapperClassname?: string
	handleClick: (id: number) => void
}) => {
	return (
		<div className={`h-screen w-full items-end ${wrapperClassname}`}>
			<div
				className={`h-fit w-full flex flex-col gap-4 galleryColumn pb-2 ${className}`}
			>
				{galleryData.map((img, index) => (
					<GalleryImage
						key={index}
						onClick={() => handleClick(img.id)}
						className={
							index % 2 === 0 ? 'aspect-[4/5]' : 'aspect-[5/4]'
						}
						img={img}
					/>
				))}
			</div>
		</div>
	)
}

export default GalleryColumn
