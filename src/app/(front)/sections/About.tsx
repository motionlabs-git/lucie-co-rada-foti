'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

const aboutLucka =
	'Fotit se mnou se bát nemusíš. Sejdeme se, pokecáme a během toho Ti udělám krásnou vzpomínku na život, přesně takový jaký v té chvíli byl.'

const About = () => {
	useEffect(() => {
		gsap.timeline({
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
	}, [])

	return (
		<div id='about' className='h-auto w-full px-4 md:px-10'>
			<div id='aboutPart1' className=' h-[130vh]'>
				<div className='flex flex-col items-center justify-center sticky top-0 h-screen'>
					<h1 className='text-lightOrange text-nowrap text-center'>
						<em className='text-center block'>Ahoj, jsem</em>

						<em className='text-[10vw]'>Lucie co ráda fotí</em>
					</h1>
					<p className='mt-6 text-center max-w-6xl text-lg'>
						S foťákem v ruce se světem potuluju už dobrých 10 let.
						Proto si myslím, že bych ti mohla pomoct zachytit
						důležité okamžiky tvého života. Nejraději fotím svatby a
						rodiny, ale libuju si i v párech a portrétech. Kdyby tě
						cokoliv zajímalo, neváhej mě kontaktovat!
					</p>
				</div>
			</div>

			<div
				id='aboutPart2'
				className='container mx-auto blur-2xl sticky top-0 w-full items-center justify-center flex-col scale-90'
			>
				<div className='w-full aspect-video'>
					<Image
						src='/images/AboutLucie2.webp'
						alt='O mně'
						width={1500}
						height={844}
						className='w-full h-full object-cover rounded-2xl'
					></Image>
				</div>

				<h1 id='aboutPart2Title' className='mt-4 leading-10'>
					{aboutLucka.split(' ').map((w: string, i: number) => (
						<span
							key={i}
							className='aboutPart2TitleSpan opacity-40 blur-sm text-2xl sm:text-4xl '
						>
							{w + ' '}
						</span>
					))}
				</h1>
			</div>
		</div>
	)
}

export default About
