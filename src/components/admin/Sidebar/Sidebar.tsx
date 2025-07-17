'use client'

import { MouseEventHandler, useState } from 'react'
import { FiUsers, FiImage, FiEdit3, FiFlag, FiSidebar } from 'react-icons/fi'
import Link from './Link'

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const handleMouseOver: MouseEventHandler<HTMLDivElement> = () => {
		// setIsOpen(true)
	}

	const handleMouseOut: MouseEventHandler<HTMLDivElement> = () => {
		// setIsOpen(false)
	}

	const handleToggleSidebar = () => {
		setIsOpen((prev) => !prev)
	}

	return (
		<nav
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
			className={`relative h-full ${
				isOpen ? 'w-64' : 'w-14'
			} border-r border-black/10 dark:border-white/10 duration-300`}
		>
			<section className='h-full flex flex-col justify-between p-2'>
				<ul className='w-full relative flex flex-col gap-1'>
					<li>
						<Link
							isOpen={isOpen}
							href={'/admin'}
							title={'Users'}
							icon={<FiUsers />}
						/>
					</li>
					<li>
						<Link
							isOpen={isOpen}
							href={'/admin/blog'}
							title={'Blog'}
							icon={<FiEdit3 />}
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
							href={'/admin/banner'}
							title={'Banner'}
							icon={<FiFlag />}
						/>
					</li>
				</ul>

				<button
					type='button'
					onClick={handleToggleSidebar}
					className={`self-start h-10 aspect-square flex justify-center items-center hover:bg-widget
						opacity-80 hover:opacity-100 duration-300 rounded-lg`}
				>
					<FiSidebar className='text-md' />
				</button>
			</section>
		</nav>
	)
}

export default Sidebar
