'use client'

import { MouseEventHandler, useEffect, useState } from 'react'
import { FiImage, FiSidebar, FiServer, FiDollarSign } from 'react-icons/fi'
import Link from './Link'

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(true)

	useEffect(() => {
		if (!('sidebarOpen' in localStorage)) {
			localStorage.sidebarOpen = 'true'
			return setIsOpen(true)
		}

		const sidebarOpen = localStorage.sidebarOpen === 'true'
		setIsOpen(sidebarOpen)
	}, [])

	const handleMouseOver: MouseEventHandler<HTMLDivElement> = () => {
		// setIsOpen(true)
	}

	const handleMouseOut: MouseEventHandler<HTMLDivElement> = () => {
		// setIsOpen(false)
	}

	const handleToggleSidebar = () => {
		if (isOpen) {
			localStorage.sidebarOpen = 'false'
			setIsOpen(false)
		} else {
			localStorage.sidebarOpen = 'true'
			setIsOpen(true)
		}
	}

	return (
		<nav
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
			className={`h-[100dvh] md:h-full z-50 bg-stone-950 w-64 ${
				isOpen ? 'md:w-64 -left-64 md:left-0' : 'md:w-14 left-0'
			} border-r border-black/10 dark:border-white/10 duration-300 fixed top-0 md:relative`}
		>
			<section className='h-full flex flex-col justify-between p-2'>
				<ul className='w-full relative flex flex-col gap-1'>
					<li>
						<Link
							isOpen={isOpen}
							href={'/admin/seo'}
							title={'SEO'}
							icon={<FiServer />}
						/>
					</li>
					<li>
						<Link
							isOpen={isOpen}
							href={'/admin/gallery'}
							title={'Gallery'}
							icon={<FiImage />}
						/>
					</li>
					<li>
						<Link
							isOpen={isOpen}
							href={'/admin/price-list'}
							title={'Price list'}
							icon={<FiDollarSign />}
						/>
					</li>
				</ul>

				<button
					type='button'
					onClick={handleToggleSidebar}
					className={`self-start h-10 aspect-square flex z-50 justify-center items-center bg-stone-900 md:bg-stone-950 border-white/20 border-1 md:border-none opacity-100 md:hover:bg-widget
						md:opacity-80 md:hover:opacity-100 duration-300 rounded-lg md:flex fixed bottom-2 left-2`}
				>
					<FiSidebar className='text-md' />
				</button>
			</section>
		</nav>
	)
}

export default Sidebar
