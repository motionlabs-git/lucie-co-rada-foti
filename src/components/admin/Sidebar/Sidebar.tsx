'use client'

import React, { MouseEventHandler } from 'react'
import Link from 'next/link'

const Sidebar = () => {
	const handleMouseOver: MouseEventHandler<HTMLDivElement> = (e) => {
		e.currentTarget.classList.add('!w-56')
	}

	const handleMouseOut: MouseEventHandler<HTMLDivElement> = (e) => {
		e.currentTarget.classList.remove('!w-56')
	}

	return (
		<nav
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
			className='relative h-full w-16 border-r border-white/10 duration-300'
		>
			<ul className='w-full relative flex flex-col gap-2'>
				<li>
					<Link href={'/admin'} className='block'>
						<span>Users</span>
					</Link>
				</li>
				<li>
					<Link href={'/admin'}>
						<span>Gallery</span>
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Sidebar
