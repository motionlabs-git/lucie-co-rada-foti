import Lenis from 'lenis'
import React, { RefObject, useState } from 'react'
import HamburgerIcon from './HamburgerIcon'

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
	const [isOpened, setIsOpened] = useState(false)

	const openMenu = () => {
		setIsOpened(true)
		lenis.current?.stop()
	}

	const closeMenu = () => {
		setIsOpened(false)

		setTimeout(() => {
			document.getElementById('mobileMenuModal')?.classList.add('hide')
		}, 300)

		lenis.current?.start()
	}

	const scrollTo = (id: string) => {
		closeMenu()

		lenis.current?.start()
		lenis.current?.scrollTo(`#${id}`)
	}

	return (
		<div className='fixed md:hidden w-full top-0 left-0 z-40 '>
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
									className={`cursor-pointer w-full text-center font-bellefair text-2xl font-bold py-2`}
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
