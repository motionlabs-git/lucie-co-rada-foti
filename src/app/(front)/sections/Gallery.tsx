'use client'

import React from 'react'
// import gsap from 'gsap'
// import ImageModal from '@/components/front/Gallery/ImageModal'
import GalleryColumn from '@/components/front/Gallery/GalleryColumn'
import GalleryMiddleColumn from '@/components/front/Gallery/GalleryMiddleColumn'
import Hero from './Hero'
import { GalleryGridImage } from '@/types/gallery-grid'

const Gallery = ({
	galleryData,
}: {
	galleryData: GalleryGridImage[] | null
}) => {
	// const [selectedImage, setSelectedImage] = useState<null | number>(null)

	// const closeImage = () => {
	// 	gsap.to('#imageModal', {
	// 		opacity: 0,
	// 		pointerEvents: 'none',
	// 		onComplete: () => {
	// 			setSelectedImage(null)
	// 		},
	// 	})
	// }

	console.log(galleryData)

	if (galleryData)
		return (
			<div id='gallery' className='relative w-full md:h-[300vh]'>
				{/* {selectedImage && (
					<ImageModal
						img={galleryData[selectedImage - 1].url}
						title={galleryData[selectedImage - 1].name}
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
				)} */}

				<div className='md:sticky top-0 md:h-screen overflow-y-hidden px-4'>
					<Hero></Hero>

					<div className='w-full flex gap-4'>
						<GalleryColumn
							galleryData={galleryData.slice(0, 4)}
							className='md:translate-y-[98%]'
							handleClick={() => {
								return
							}}
						/>

						<GalleryMiddleColumn
							galleryData={galleryData.slice(4, 8)}
							className='md:translate-y-[-15%]'
							handleClick={() => {
								return
							}}
						></GalleryMiddleColumn>

						<GalleryColumn
							galleryData={galleryData.slice(8, 12)}
							className='md:translate-y-[90%]'
							handleClick={() => {
								return
							}}
						/>
					</div>

					<div className='flex md:hidden justify-center mt-10'>
						<button className='px-6 py-2 border-black rounded-xl border-2 font-bold'>
							Více
						</button>
					</div>
				</div>
			</div>
		)
}

export default Gallery
