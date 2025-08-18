'use client'
import React, { useEffect } from 'react'
import Logo from '../../../../../public/images/Logo'
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
			className='w-full md:h-full h-[80vh] top-0 left-0 md:absolute flex justify-center items-center'
		>
			<div
				className='flex flex-col items-center gap-4'
				onMouseEnter={animateLogo}
			>
				<Logo
					id='HeroLogo'
					className='text-white w-[30vw] md:w-40'
					pathClass='HeroLogoPath'
				></Logo>
				<h1 className='leading-tight whitespace-nowrap'>
					<em className='text-[10vw] md:text-6xl'>
						Lucie co ráda fotí
					</em>
				</h1>

				<div id='mouse-scroll'>
					<div className='mouse'>
						<div className='mouse-in'></div>
					</div>
					<div>
						<span className='down-arrow-1'></span>
						<span className='down-arrow-2'></span>
						<span className='down-arrow-3'></span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
