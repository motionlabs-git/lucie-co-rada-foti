import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
	return (
		<nav className='sticky top-[5.5rem] w-full lg:max-w-2xs flex flex-col rounded-2xl border-2 border-white/5 p-2'>
			<ul className='w-full relative flex flex-col gap-2'>
				<li>
					<Link
						href={'/admin'}
						className='block rounded-xl border-2 border-white/5 p-4'
					>
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
