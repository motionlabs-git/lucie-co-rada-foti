'use client'
import Lenis from 'lenis'
import React, { RefObject, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HamburgerIcon from './HamburgerIcon'

interface Props {
	lenis: RefObject<Lenis | null>
}

function Navigation({ lenis }: Props) {
	const [isOpened] = useState(false)

	const scrollTo = (id: string) => {
		lenis.current?.scrollTo(`#` + id)
	}

	const navTl = gsap.timeline({ paused: true, defaults: { duration: 0.2 } })

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		navTl
			.to('#navWrapper', {
				gap: 2 + 'rem',
			})
			.to(
				'#navLinks',
				{
					width: 300,
				},
				'<'
			)
			.to(
				'.navLink',
				{
					opacity: 1,
					stagger: 0.1,
				},
				'<'
			)
	}, [navTl])

	const mouseOver = () => {
		navTl.play()
	}

	const mouseLeave = () => {
		navTl.reverse()
	}

	return (
		<header className='z-40 fixed bottom-4 w-full md:flex hidden justify-center pointer-events-none'>
			<nav
				onMouseEnter={mouseOver}
				onMouseLeave={mouseLeave}
				id='navWrapper'
				className='relative pointer-events-auto rounded-lg bg-bone'
			>
				<div className=' relative w-full h-full p-2 flex gap-1 items-center bg-white border-black/10 border-[1px] rounded-xl'>
					<HamburgerIcon
						handleClick={() => null}
						isOpened={isOpened}
					></HamburgerIcon>

					<div
						id='navLinks'
						className='relative w-0 overflow-hidden flex gap-2 items-center justify-center'
					>
						<button
							onClick={() => scrollTo('gallery')}
							className='navLink h-12 opacity-0 text-black font-satoshiBold border border-black/20 rounded-xl px-4 py-3 hover:border-black duration-300 whitespace-nowrap'
						>
							Galerie
						</button>
						<button
							onClick={() => scrollTo('gallery')}
							className='navLink h-12 opacity-0 text-black font-satoshiBold border border-black/20 rounded-xl px-4 py-3 hover:border-black duration-300 whitespace-nowrap'
						>
							Ceník
						</button>
						<button
							onClick={() => scrollTo('gallery')}
							className='navLink h-12 opacity-0 text-black font-satoshiBold border border-black/20 rounded-xl px-4 py-3 hover:border-black duration-300 whitespace-nowrap'
						>
							O mně
						</button>
					</div>

					<button
						id='navCta'
						className='relative h-12 font-satoshiBold border-black hover:bg-lightOrange duration-300 hover:border-lightOrange hover:text-black text-white border rounded-lg px-6 bg-black'
						onClick={() => scrollTo('contact')}
					>
						Kontakt
					</button>
				</div>
			</nav>
		</header>
	)
}

export default Navigation
