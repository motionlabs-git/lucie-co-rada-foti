'use client'

import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import GalleryColumn from '@/components/front/Gallery/GalleryColumn'
import GalleryMiddleColumn from '@/components/front/Gallery/GalleryMiddleColumn'
import Hero from './Hero'
import { GalleryGridImage } from '@/types/gallery-grid'
import ImageModal from '@/components/front/Gallery/ImageModal'
import GalleryImage from '@/components/front/Gallery/GalleryImage'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Gallery = ({
	galleryData,
}: {
	galleryData: GalleryGridImage[] | null
}) => {
	const [selectedImage, setSelectedImage] = useState<null | number>(null)
	const [showThirdColumn, setShowThirdColumn] = useState(false)

	useEffect(() => {
		const tl = gsap
			.timeline({
				paused: true,
				scrollTrigger: {
					trigger: '#about',
					start: 'top top',
					end: '+=50% top',
					scrub: 1,
				},
			})
			.to(
				'#aboutPart1',
				{
					translateY: '100',
					filter: 'blur(10px)',
					scale: 0.8,
					opacity: 0,
					delay: 0.25,
				},
				'<'
			)
			.to('#aboutPart2', {
				opacity: 1,
				scale: 1,
				filter: 'blur(0px)',
			})

		gsap.to('.aboutPart2TitleSpan', {
			stagger: 0.07,
			opacity: 1,
			filter: 'blur(0px)',
			scrollTrigger: {
				trigger: '#aboutPart2Title',
				start: 'top 80%',
				end: 'bottom 80%',
				scrub: 3,
			},
		})

		// window.addEventListener('resize', function () {
		// 	ScrollTrigger.refresh()
		// 	ScrollTrigger.sort()
		// })

		return () => {
			tl.scrollTrigger?.kill()
			ScrollTrigger.refresh()
			tl.kill()
		}
	}, [showThirdColumn])

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
		<div>
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
				</div>
			</div>

			{showThirdColumn ? (
				<div className='grid grid-cols-2 gap-4 px-4 mt-2 md:hidden'>
					<div className='grid grid-cols-1 gap-4'>
						{galleryData
							.slice(8, 10)
							.reverse()
							.map((img, index) => (
								<GalleryImage
									key={index}
									onClick={() => {
										setSelectedImage(img.id)
									}}
									className={
										index % 2 === 1
											? 'aspect-[4/5]'
											: 'aspect-[5/4]'
									}
									img={img}
								/>
							))}
					</div>

					<div className='grid grid-cols-1 gap-4'>
						{galleryData
							.slice(10, 12)

							.map((img, index) => (
								<GalleryImage
									key={index}
									onClick={() => {
										setSelectedImage(img.id)
									}}
									className={
										index % 2 === 0
											? 'aspect-[4/5]'
											: 'aspect-[5/4]'
									}
									img={img}
								/>
							))}
					</div>
				</div>
			) : (
				<div className='flex md:hidden justify-center mt-10'>
					<button
						type='button'
						aria-label='Show more'
						className='px-6 py-2 border-black  rounded-xl border-2 font-bold text-base'
						onClick={() => {
							setShowThirdColumn(true)
							window.dispatchEvent(new Event('layoutChanged'))
						}}
					>
						Více
					</button>
				</div>
			)}
		</div>
	)
}

export default Gallery
