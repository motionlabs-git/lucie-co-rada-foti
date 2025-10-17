'use client'
import React, { useEffect } from 'react'
import Logo from '../../../../public/images/Logo'
import gsap from 'gsap'
import DrawSVGPlugin from 'gsap/DrawSVGPlugin'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

function Hero() {
	const animateLogo = () => {
		gsap.fromTo(
			'.HeroLogoPath',
			{ drawSVG: '0%' },
			{
				drawSVG: '100%',
				stagger: 0.3,
				duration: 1.5,
				ease: 'power1.inOut',
				overwrite: 'auto',
			}
		)
	}

	useEffect(() => {
		gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger)
		animateLogo()
	}, [])

	return (
		<div
			id='heroModal'
			className=' w-full h-full top-0 left-0 absolute flex justify-center items-center'
		>
			<div
				className='flex flex-col items-center'
				// onMouseEnter={animateLogo}
			>
				<Logo
					id='HeroLogo'
					className='text-white w-[35vw] md:w-40'
					pathClass='HeroLogoPath'
				></Logo>
				<h1 className='leading-tight whitespace-nowrap'>
					<em className='text-[clamp(1.5rem,10vw,3.75rem)]'>
						Lucie co ráda fotí
					</em>
				</h1>
				<h2 className='text-center'>
					<em className='text-[clamp(1.5rem,6vw,2.5rem)]'>Vaše </em>
					<em className='text-[clamp(1.5rem,6vw,2.5rem)] text-orange relative inline-block'>
						svatební a rodinná
						<div className='absolute w-[120%] opacity-85 blur-3xl h-[120%] rounded-full bg-orange -top-[10%] -left-[10%] select-none pointer-events-none'></div>
					</em>{' '}
					<em className='text-[clamp(1.5rem,6vw,2.5rem)]'>
						fotografka
					</em>
				</h2>
			</div>
		</div>
	)
}

export default Hero
