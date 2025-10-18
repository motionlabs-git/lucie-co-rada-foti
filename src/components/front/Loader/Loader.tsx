'use client'
import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import initAnimations from '@/utils/initAnimations'
import { useLenis } from 'lenis/react'

const text = ['Tři', 'Dva', 'Jedna', 'Úsměv!']

const Loader = ({ isLoaded }: { isLoaded: boolean }) => {
	const [isActive, setIsActive] = useState(true)
	const [index, setIndex] = useState(0)

	const lenis = useLenis()

	console.log(isLoaded)

	useEffect(() => {
		lenis?.scrollTo(0, { immediate: true })

		gsap.to('#loaderProgress', {
			width: '100%',
			repeat: -1,
			duration: 2,
			ease: 'power1.inOut',
		})

		const tl = gsap.timeline({
			// repeat: -1,
			onComplete: () => {
				initAnimations()

				gsap.to('#loader', {
					opacity: 0,
					scale: 1.2,
					onComplete: () => {
						setIsActive(false)
					},
				})
			},
		})

		for (let i = 0; i < text.length - 1; i++) {
			tl.to('#loadingText', {
				opacity: 0,
				duration: 0.4,
				onComplete: () => {
					setIndex((prev) => (prev + 1) % text.length)
				},
			})
				.to('#loadingText', {
					opacity: 1,
					duration: 0.4,
				})
				.delay(0.1)
		}
	}, [lenis])

	if (isActive)
		return (
			<section
				id='loader'
				className='fixed top-0 left-0 w-full h-screen bg-bone z-50 flex items-center justify-center'
			>
				<div className='w-full flex flex-col items-center gap-10'>
					<h1 className='flex gap-4 items-baseline'>
						<em
							id='loadingText'
							className='text-6xl md:text-[5vw] px-6'
						>
							{text[index]}
						</em>
					</h1>

					<div className='w-1/3 md:w-1/10 bg-lightOrange h-1.5 rounded-full'>
						<div
							id='loaderProgress'
							className='h-full w-0 bg-orange rounded-full'
						></div>
					</div>
				</div>
			</section>
		)
}

export default Loader
