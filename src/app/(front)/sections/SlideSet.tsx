import React, { MouseEventHandler, useEffect, useRef } from 'react'
import Image from 'next/image'

const SlideSet = () => {
	const containerRef = useRef<HTMLDivElement>(null)
	const numRef = useRef(0)

	const handleMouseEnter: MouseEventHandler<HTMLImageElement> = () => {
		document.querySelectorAll('.slide-set').forEach((el) => {
			el.classList.add('paused')
		})
	}

	const handleMouseLeave: MouseEventHandler<HTMLImageElement> = () => {
		document.querySelectorAll('.slide-set').forEach((el) => {
			el.classList.remove('paused')
		})
	}

	const animate = () => {
		if (
			containerRef.current &&
			!containerRef.current.classList.contains('paused')
		) {
			const containerWidth = containerRef.current.offsetWidth

			if (numRef.current >= containerWidth) {
				numRef.current = 0
			}
			containerRef.current.style.transform = `translate3d(-${numRef.current}px, 0px, 0px)`
			numRef.current += 1
		}

		requestAnimationFrame(animate)
	}

	useEffect(() => {
		animate()
	}, [])

	return (
		<div ref={containerRef} className='slide-set flex items-center'>
			<div className='w-[15vw] h-auto p-2'>
				<Image
					width={400}
					height={400}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					className='w-full duration-300 hover:blur-xs rounded-xl'
					src={
						'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg'
					}
					alt={
						'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg'
					}
				/>
			</div>
			<div className='w-[13vw] h-auto p-2'>
				<Image
					width={400}
					height={400}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					className='w-full duration-300 hover:blur-xs rounded-xl'
					src={
						'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg'
					}
					alt={
						'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg'
					}
				/>
			</div>
			<div className='w-[8vw] h-auto p-2'>
				<Image
					width={400}
					height={400}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					className='w-full duration-300 hover:blur-xs rounded-xl'
					src={
						'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg'
					}
					alt={
						'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg'
					}
				/>
			</div>
			<div className='w-[15vw] h-auto p-2'>
				<Image
					width={400}
					height={400}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					className='w-full duration-300 hover:blur-xs rounded-xl'
					src={
						'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg'
					}
					alt={
						'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg'
					}
				/>
			</div>
			<div className='w-[8vw] h-auto p-2'>
				<Image
					width={400}
					height={400}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					className='w-full duration-300 hover:blur-xs rounded-xl'
					src={
						'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg'
					}
					alt={
						'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg'
					}
				/>
			</div>
			<div className='w-[11vw] h-auto p-2'>
				<Image
					width={400}
					height={400}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					className='w-full duration-300 hover:blur-xs rounded-xl'
					src={
						'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg'
					}
					alt={
						'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg'
					}
				/>
			</div>
		</div>
	)
}

export default SlideSet
