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
		}, 200)

		// gsap.to()
	}, [lenis])

	if (isActive)
		return (
			<section
				id='loader'
				className='fixed top-0 left-0 w-full h-screen bg-bone z-50 flex items-center justify-center'
			>
				<h1 className='absolute top-4 left-4 text-2xl leading-0'>
					<strong className='text-2xl'>Načítání...</strong>
				</h1>

				<h1 className='flex gap-4 items-baseline'>
					<em className=''>Připravit</em>
					<em className=''>Úsměr</em>
					<em className=''>Sýr!</em>
				</h1>
				{/* <h1 className='flex gap-4 items-baseline'><strong>Vyfotím vaše</strong><em className='text-orange'>Svatby</em><em className='text-orange'>Akce</em><em className='text-orange'>Večírky</em></h1> */}
			</section>
		)
}

export default Loader
