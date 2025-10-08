'use client'

import React, { useState } from 'react'
import gsap from 'gsap'
import GalleryColumn from '@/components/front/Gallery/GalleryColumn'
import GalleryMiddleColumn from '@/components/front/Gallery/GalleryMiddleColumn'
import Hero from './Hero'
import { GalleryGridImage } from '@/types/gallery-grid'
import ImageModal from '@/components/front/Gallery/ImageModal'

const Gallery = ({
	galleryData,
}: {
	galleryData: GalleryGridImage[] | null
}) => {
	const [selectedImage, setSelectedImage] = useState<null | number>(null)

	const closeImage = () => {
		gsap.to('#imageModal', {
			opacity: 0,
			pointerEvents: 'none',
			onComplete: () => {
				setSelectedImage(null)
			},
		})
	}

	if (!galleryData) return null

	const imgSrc = selectedImage
		? galleryData[selectedImage - 1]?.image_id?.url
		: null

	return (
		<div id='gallery' className='relative w-full h-[300vh]'>
			{selectedImage && imgSrc && (
				<ImageModal
					img={imgSrc}
					title={galleryData[selectedImage - 1].title}
					nextImage={() => {
						if (selectedImage === galleryData.length) {
							setSelectedImage(1)
						} else setSelectedImage((prev) => prev && prev + 1)
					}}
					prevImage={() => {
						if (selectedImage === 1) {
							setSelectedImage(galleryData.length)
						} else setSelectedImage((prev) => prev && prev - 1)
					}}
					handleCloseImage={closeImage}
				></ImageModal>
			)}

			<div className='sticky top-0 h-screen overflow-y-hidden px-4'>
				<Hero></Hero>

				<div className='w-full flex gap-4'>
					<GalleryColumn
						galleryData={galleryData.slice(0, 4)}
						className='translate-y-[80%] sm:translate-y-[88%] lg:translate-y-[98%]'
						wrapperClassname='flex flex-1'
						handleClick={(id) => {
							setSelectedImage(id)
						}}
					/>

					<GalleryMiddleColumn
						galleryData={galleryData.slice(4, 8)}
						className='translate-y-[-70%] sm:translate-y-[-50%] md:translate-y-[-22%]  lg:translate-y-[-22%] xl:translate-y-[-15%]'
						handleClick={(id) => {
							setSelectedImage(id)
						}}
					></GalleryMiddleColumn>

					<GalleryColumn
						galleryData={galleryData.slice(8, 12)}
						className='translate-y-[90%]'
						wrapperClassname='md:flex hidden flex-1'
						handleClick={(id) => {
							setSelectedImage(id)
						}}
					/>
				</div>

				<div className='flex md:hidden justify-center mt-10'>
					<button
						type='button'
						aria-label='Show more'
						className='px-6 py-2 border-black rounded-xl border-2 font-bold'
					>
						Více
					</button>
				</div>
			</div>
		</div>
	)
}

export default Gallery
