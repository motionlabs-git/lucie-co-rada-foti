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
			className='relative w-full md:h-full h-[80vh] top-0 left-0 md:absolute flex justify-center items-center'
		>
			<div
				className='flex flex-col items-center'
				onMouseEnter={animateLogo}
			>
				<Logo
					id='HeroLogo'
					className='text-white w-[35vw] md:w-40'
					pathClass='HeroLogoPath'
				></Logo>
				<h1 className='leading-tight whitespace-nowrap'>
					<em className='text-[10vw] md:text-6xl'>
						Lucie co ráda fotí
					</em>
				</h1>
				<h2 className='text-center'>
					<em className='text-4xl'>Vaše </em>
					<strong className='text-3xl text-orange relative inline-block'>
						svatební
						<div className='absolute w-[120%] opacity-85 blur-3xl h-[120%] rounded-full bg-orange -top-[10%] -left-[10%] select-none pointer-events-none'></div>
					</strong>{' '}
					<em className='text-4xl'>fotografka.</em>
				</h2>

				<div className='absolute bottom-42 left-1/2'>
					<div id='mouse-scroll' className='z-50'>
						<div className='mouse'>
							<div className='mouse-in'></div>
						</div>
						<div>
							<span className='down-arrow-1'></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
