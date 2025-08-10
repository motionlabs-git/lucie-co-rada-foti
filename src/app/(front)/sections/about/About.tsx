'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

const aboutLucka =
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eligendi et, possimus laborum esse iste accusamus! Suscipit magni similique, reprehenderit error dolore quasi quia quaerat neque quam ab recusandae incidunt.'

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
				start: 'top center',
				end: 'bottom center',
				scrub: 3,
			},
		})
	}, [])

	return (
		<div id='about' className='h-auto w-full'>
			<div
				id='aboutPart1'
				className='flex flex-col items-center justify-center sticky top-0 h-screen'
			>
				<h1 className='text-lightOrange text-nowrap text-center'>
					<em className='text-[12vw]'>Lucie co ráda fotí</em>
				</h1>
				<p className='mt-6 text-center max-w-6xl'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Eligendi a ipsam dolorum voluptate praesentium
					exercitationem velit voluptates, voluptatum ex sunt quam
					nobis dolorem! Quasi quisquam eveniet velit accusamus magni.
					Molestias?
				</p>
			</div>

			<div
				id='aboutPart2'
				className='container mx-auto blur-2xl sticky top-0 w-full items-center justify-center flex-col scale-90'
			>
				<div className='w-full aspect-video'>
					<Image
						src={
							'https://scontent.fsvg1-1.fna.fbcdn.net/v/t39.30808-6/380943477_6493124047410121_8106659734817583276_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=hZZ4A16TWyAQ7kNvwFqulXS&_nc_oc=AdkUem5__Rlr5dfn3QT7JzKvOL6DK3rinLrZnVdZUbbXghtuF7QAc9P52NDTMeCm27I&_nc_zt=23&_nc_ht=scontent.fsvg1-1.fna&_nc_gid=wR2Xe7I4yM28IhaJHOggRQ&oh=00_AfX-q5jXcCHMggfjpcq6KqQszpbYfh9FTtbonp9QTsoCaA&oe=689E9F9B'
						}
						alt={'O lucce'}
						width={1000}
						height={500}
						className='w-full h-full object-cover rounded-2xl'
					></Image>
				</div>

				<h1 id='aboutPart2Title' className='mt-4'>
					{' '}
					{aboutLucka.split(' ').map((w: string, i: number) => (
						<span
							key={i}
							className='aboutPart2TitleSpan opacity-40 blur-sm'
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
