'use client'
import Lenis from 'lenis'
import React, { RefObject, useEffect, useState } from 'react'
import gsap from 'gsap'

const Loader = ({ lenis }: { lenis: RefObject<Lenis | null> }) => {
	const [isActive, setIsActive] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			function raf(time: number) {
				if (!lenis.current) return

				lenis.current.raf(time)
				requestAnimationFrame(raf)
			}
			requestAnimationFrame(raf)

			lenis.current?.scrollTo(0, {
				immediate: true,
				onComplete: () => {
					gsap.to('#loader', {
						opacity: 0,
						duration: 0.5,

						onComplete: () => {
							setIsActive(false)
						},
					})
				},
			})
		}, 3000)

		gsap.to('#loader', {
			width: '100%',
			repeat: -1,
			duration: 2,
			ease: 'power1.inOut',
		})
		gsap.to('#loaderText', {
			opacity: 1,
			repeat: -1,
			duration: 0.8,
			ease: 'power1.in',
			yoyo: true,
		})
	}, [lenis])

	if (isActive)
		return (
			<section
				id='loader'
				className='fixed top-0 left-0 w-full h-screen bg-bone z-50 flex items-center justify-center'
			>
				<h1
					id='loaderText'
					className='absolute top-4 left-4 text-2xl leading-0 opacity-0'
				>
					<strong className='text-2xl'>Načítání...</strong>
				</h1>

				<div className='w-full flex flex-col items-center gap-10'>
					<h1 className='flex gap-4 items-baseline '>
						<em className=''>Připravit</em>
						<em className=''>Úsměv</em>
						<em className=''>Sýr!</em>
					</h1>

					<div className='w-1/10 bg-lightOrange h-1.5 rounded-full'>
						<div
							id='loader'
							className='h-full w-0 bg-orange rounded-full'
						></div>
					</div>
				</div>
			</section>
		)
}

export default Loader
