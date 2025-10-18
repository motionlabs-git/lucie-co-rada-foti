'use client'

import React, { useEffect, useState } from 'react'
import HamburgerIcon from './HamburgerIcon'
import { useLenis } from 'lenis/react'

const menuList = [
	{
		title: 'Galerie',
		id: 'gallery',
	},
	{
		title: 'O mně',
		id: 'about',
	},
	{
		title: 'Kontakt',
		id: 'contact',
	},
	{
		title: 'Reference',
		id: 'references',
	},
]

const MobileNavigation = () => {
	const lenis = useLenis()
	const [isOpened, setIsOpened] = useState(false)

	const openMenu = () => {
		setIsOpened(true)
		lenis?.stop()
	}

	const closeMenu = () => {
		setIsOpened(false)

		setTimeout(() => {
			document.getElementById('mobileMenuModal')?.classList.add('hide')
		}, 300)

		lenis?.start()
	}

	const scrollTo = (id: string) => {
		closeMenu()

		lenis?.start()
		lenis?.scrollTo(`#${id}`)
	}

	useEffect(() => {
		document.getElementById('mobileMenuModal')?.classList.add('hide')
	}, [])

	return (
		<div className='fixed md:hidden w-full top-0 left-0 z-40'>
			{
				<div
					id='mobileMenuModal'
					className={`h-[100lvh] w-full items-center backdrop-blur-md flex ${
						isOpened ? 'open' : 'close'
					}`}
				>
					<ul className='w-full flex justify-center flex-col gap-10 items-center'>
						{menuList.map((item, i) => {
							return (
								<li
									key={i}
									className={`invertText cursor-pointer w-full text-center font-bellefair text-2xl font-bold py-2`}
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
				<HamburgerIcon
					handleClick={isOpened ? closeMenu : openMenu}
					isOpened={isOpened}
				></HamburgerIcon>
			</div>
		</div>
	)
}

export default MobileNavigation
