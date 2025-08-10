'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import ImageModal from '@/components/front/Gallery/ImageModal'
import Logo from '../../../../../public/images/Logo'
import Marquee from '@/components/front/Marquee/Marquee'

const imgData = [
	{
		src: 'https://www.brides.com/thmb/LMyiMPxRFx82BLiHZC8lySJFnGo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/marriage-pose-photo-recirc-kyle-john-1-29-4f97523aa049471992292e8d6ddc41ee.jpg',
		title: 'Forest Path',
	},
	{
		src: 'https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg',
		title: 'Golden Dunes',
	},
	{
		src: 'https://www.brides.com/thmb/LMyiMPxRFx82BLiHZC8lySJFnGo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/marriage-pose-photo-recirc-kyle-john-1-29-4f97523aa049471992292e8d6ddc41ee.jpg',

		title: 'Urban Skyline',
	},
	{
		src: 'https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg',
		title: 'Mountain Lake',
	},
]

const Gallery = () => {
	const [selectedImage, setSelectedImage] = useState<null | number>(null)

	useEffect(() => {
		gsap.to('.galleryColumn', {
			scrollTrigger: {
				trigger: '#gallery',
				start: 'top top',
				end: 'bottom bottom',
				scrub: 1,
			},
			translateY: 0,
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
		<div id='gallery' className='relative w-full h-[300vh]'>
			{selectedImage && (
				<ImageModal
					img={imgData[selectedImage].src}
					title={imgData[selectedImage].title}
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

			<div className='sticky top-0 h-screen overflow-y-hidden px-4'>
				<div
					id='heroModal'
					className='w-full h-full top-0 left-0 absolute flex justify-center items-center'
				>
					<div className='flex flex-col items-center'>
						<Logo id={'logo'} className='w-96'></Logo>
						<h1 className='leading-tight whitespace-nowrap'>
							<em className='text-6xl'>Lucie co ráda fotí</em>
						</h1>

						<p className='text-xs'>Jaký font zvolit?</p>
					</div>
				</div>

				<div className='w-full flex gap-4'>
					<div className='h-screen w-full items-end flex flex-1'>
						<div className='h-fit w-full flex flex-col gap-4 galleryColumn translate-y-[98%]'>
							{imgData.map((img, index) => (
								<div
									key={index}
									onClick={() => {
										setSelectedImage(index)
									}}
									className='relative rounded-xl cursor-pointer group'
								>
									<div className='w-full h-auto duration-300 group-hover:blur-xs'>
										<Image
											width={800}
											height={800}
											className='w-full duration-300 rounded-xl'
											src={img.src}
											alt={img.title}
										/>
									</div>

									<div className='absolute top-0 left-0 w-full h-full flex justify-center items-end opacity-0 group-hover:opacity-100 duration-300 '>
										<Marquee
											sets={4}
											containerClassName='gap-4'
										>
											<h2 className='text-orange font-promenadeItalic text-7xl'>
												Titulek obrázku ~{' '}
											</h2>
										</Marquee>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className='h-screen items-end flex flex-1'>
						<div className='h-fit w-full flex flex-col gap-4 galleryColumn translate-y-[-30%]'>
							{imgData.map((img, index) => (
								<div
									onClick={() => {
										setSelectedImage(index)
									}}
									key={index}
									className='group relative galleryImage overflow-hidden rounded-xl cursor-pointer w-full h-auto'
								>
									<Image
										key={index}
										width={800}
										height={800}
										className='w-full group-hover:scale-105 duration-300'
										src={img.src}
										alt={img.title}
									/>
								</div>
							))}
						</div>
					</div>

					<div className='h-screen w-full items-end flex flex-1'>
						<div className='h-fit w-full flex flex-col gap-4 galleryColumn translate-y-[90%]'>
							{imgData.map((img, index) => (
								<div
									key={index}
									onClick={() => {
										setSelectedImage(index)
									}}
									className='relative rounded-xl cursor-pointer group'
								>
									<div className='w-full h-auto duration-300 group-hover:blur-xs'>
										<Image
											width={800}
											height={800}
											className='w-full duration-300 rounded-xl'
											src={img.src}
											alt={img.title}
										/>
									</div>

									<div className='absolute top-0 left-0 w-full h-full flex justify-center items-end opacity-0 group-hover:opacity-100 duration-300 '>
										<Marquee
											sets={4}
											containerClassName='gap-4'
										>
											<h2 className='text-orange font-promenadeItalic text-7xl'>
												Titulek obrázku ~{' '}
											</h2>
										</Marquee>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Gallery
