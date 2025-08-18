'use client'
import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import ImageModal from '@/components/front/Gallery/ImageModal'
import Hero from '../hero/Hero'
import GalleryColumn from '@/components/front/Gallery/GalleryColumn'
import GalleryMiddleColumn from '@/components/front/Gallery/GalleryMiddleColumn'

const imgData = [
	{
		src: 'https://www.brides.com/thmb/LMyiMPxRFx82BLiHZC8lySJFnGo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/marriage-pose-photo-recirc-kyle-john-1-29-4f97523aa049471992292e8d6ddc41ee.jpg',
		title: 'Forest Path',
		id: 1,
	},
	{
		src: 'https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg',
		title: 'Golden Dunes',
		id: 2,
	},
	{
		src: 'https://www.brides.com/thmb/LMyiMPxRFx82BLiHZC8lySJFnGo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/marriage-pose-photo-recirc-kyle-john-1-29-4f97523aa049471992292e8d6ddc41ee.jpg',
		title: 'Urban Skyline',
		id: 3,
	},
	{
		src: 'https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg',
		title: 'Mountain Lake',
		id: 4,
	},

	{
		src: 'https://www.brides.com/thmb/LMyiMPxRFx82BLiHZC8lySJFnGo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/marriage-pose-photo-recirc-kyle-john-1-29-4f97523aa049471992292e8d6ddc41ee.jpg',
		title: 'Forest Path',
		id: 5,
	},
	{
		src: 'https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg',
		title: 'Golden Dunes',
		id: 6,
	},
	{
		src: 'https://www.brides.com/thmb/LMyiMPxRFx82BLiHZC8lySJFnGo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/marriage-pose-photo-recirc-kyle-john-1-29-4f97523aa049471992292e8d6ddc41ee.jpg',
		title: 'Urban Skyline',
		id: 7,
	},
	{
		src: 'https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg',
		title: 'Mountain Lake',
		id: 8,
	},

	{
		src: 'https://www.brides.com/thmb/LMyiMPxRFx82BLiHZC8lySJFnGo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/marriage-pose-photo-recirc-kyle-john-1-29-4f97523aa049471992292e8d6ddc41ee.jpg',
		title: 'Forest Path',
		id: 9,
	},
	{
		src: 'https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg',
		title: 'Golden Dunes',
		id: 10,
	},
	{
		src: 'https://www.brides.com/thmb/LMyiMPxRFx82BLiHZC8lySJFnGo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/marriage-pose-photo-recirc-kyle-john-1-29-4f97523aa049471992292e8d6ddc41ee.jpg',
		title: 'Urban Skyline',
		id: 11,
	},
	{
		src: 'https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg',
		title: 'Mountain Lake',
		id: 12,
	},
]

const Gallery = () => {
	const [selectedImage, setSelectedImage] = useState<null | number>(null)
	const mm = gsap.matchMedia()

	useEffect(() => {
		mm.add('(min-width: 768px)', () => {
			gsap.to('.galleryColumn', {
				scrollTrigger: {
					trigger: '#gallery',
					start: 'top top',
					end: 'bottom bottom',
					scrub: 1,
				},
				translateY: 0,
			})

			const middleColumn = document.getElementById('galleryMiddleColumn')
			const middleColumnFill = document.getElementById(
				'galleryMiddleColumnFill'
			)

			if (!middleColumn || !middleColumnFill) return

			gsap.to('#galleryMiddleColumn', {
				scrollTrigger: {
					trigger: '#gallery',
					start: 'top top',
					end: 'bottom bottom',
					scrub: 1,
				},
				translateY:
					0 +
					middleColumn?.clientHeight -
					middleColumnFill?.clientHeight -
					8,
			})

			gsap.to('#heroModal', {
				scrollTrigger: {
					trigger: '#gallery',
					start: 'top top',
					end: '5% top',
					scrub: 1,
				},
				opacity: 0,
				scale: 0.8,
			})
		})
	}, [])

	const closeImage = () => {
		gsap.to('#imageModal', {
			opacity: 0,
			pointerEvents: 'none',
			onComplete: () => {
				setSelectedImage(null)
			},
		})
	}

	return (
		<div id='gallery' className='relative w-full md:h-[300vh]'>
			{selectedImage && (
				<ImageModal
					img={imgData[selectedImage - 1].src}
					title={imgData[selectedImage - 1].title}
					nextImage={() =>
						setSelectedImage((prev) =>
							prev === imgData.length - 1
								? 0
								: prev !== null
								? prev + 1
								: null
						)
					}
					prevImage={() =>
						setSelectedImage((prev) =>
							prev === 0 ? imgData.length - 1 : prev && prev - 1
						)
					}
					handleCloseImage={closeImage}
				></ImageModal>
			)}

			<div className='md:sticky top-0 md:h-screen overflow-y-hidden px-4'>
				<Hero></Hero>

				<div className='w-full md:flex-row flex-col flex gap-4'>
					<GalleryColumn
						galleryData={imgData.slice(0, 4)}
						className='md:translate-y-[98%]'
						handleClick={(id) => {
							console.log(id)

							setSelectedImage(id)
						}}
					/>

					<GalleryMiddleColumn
						galleryData={imgData.slice(4, 8)}
						className='md:translate-y-[-15%]'
						handleClick={(id) => setSelectedImage(id)}
					></GalleryMiddleColumn>

					<GalleryColumn
						galleryData={imgData.slice(8, 12)}
						className='md:translate-y-[90%]'
						handleClick={(id) => setSelectedImage(id)}
					/>
				</div>
			</div>
		</div>
	)
}

export default Gallery
