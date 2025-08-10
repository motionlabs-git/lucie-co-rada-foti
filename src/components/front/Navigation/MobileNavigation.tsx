import Lenis from 'lenis'
import React, { RefObject, useEffect } from 'react'
import gsap from 'gsap'

interface Props {
	lenis: RefObject<Lenis | null>
}

const menuList = [
	{
		title: 'Galerie',
		id: 'gallery',
	},
	{
		title: 'O lucce',
		id: 'about',
	},
	{
		title: 'Kontaktní formulář',
		id: 'contact',
	},
	{
		title: 'Reference',
		id: 'references',
	},
]

const MobileNavigation = ({ lenis }: Props) => {
	let isOpened = false

	const navTl = gsap.timeline({ paused: true, defaults: { duration: 2 } })

	const handleMenu = () => {
		if (isOpened === false) {
			navTl.play()
			lenis.current?.stop()

			isOpened = true
		} else {
			navTl.reverse()

			isOpened = false
		}
	}

	const scrollTo = (id: string) => {
		console.log(id)

		lenis.current?.start()
		lenis.current?.scrollTo(`#${id}`, {
			onComplete: () => {
				navTl.reverse()
				isOpened = false
			},
		})
	}

	useEffect(() => {
		navTl.to('#mobileNav', {
			opacity: 100,
		})
	}, [navTl])

	return (
		<div className='fixed md:hidden w-full h-[100lvh] top-0 left-0 z-40 '>
			{
				<div
					id='mobileNav'
					className=' opacity-0 h-full w-full flex items-center bg-red-400/50 backdrop-blur-md'
				>
					<ul className='w-full flex justify-center flex-col gap-2 items-center'>
						{menuList.map((item, i) => {
							const styler = i % 2
							console.log(styler)

							return (
								<li
									key={i}
									className='cursor-pointer w-full text-center bg-green-300 font-bellefair text-2xl font-bold py-2 '
									onClick={() => scrollTo(item.id)}
								>
									{item.title}
								</li>
							)
						})}
					</ul>
				</div>
			}

			<div className='absolute top-4 right-4'>
				<button
					className='relative w-14 aspect-square h-auto bg-white border-black/30 border-[1px] rounded-lg gap-2 flex flex-col justify-center items-center'
					onClick={handleMenu}
				>
					<div className='h-[2px] rounded-full w-1/2 bg-black'></div>
					<div className='h-[2px] rounded-full w-1/2 bg-black'></div>
					<div className='h-[2px] rounded-full w-1/2 bg-black'></div>
				</button>
			</div>
		</div>
	)
}

export default MobileNavigation
