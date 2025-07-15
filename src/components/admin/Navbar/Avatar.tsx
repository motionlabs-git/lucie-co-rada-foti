'use client'

import { signOut } from '@/actions/authActions'
import { useState } from 'react'
import { FiUser } from 'react-icons/fi'

const Avatar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const handleAvatarClick = () => setIsOpen((prev) => !prev)

	const handleBlur = () => setIsOpen(false)

	return (
		<div className='relative'>
			<button
				type='button'
				onClick={handleAvatarClick}
				onBlur={handleBlur}
				className='w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 border border-white/5 duration-300'
			>
				<FiUser className='text-lg opacity-80' />
			</button>
			{isOpen && (
				<ul className='absolute right-0 top-13 bg-stone-900 rounded-lg border border-white/5 p-2'>
					<li>
						<form action={signOut}>
							<button type='submit'>Logout</button>
						</form>
					</li>
				</ul>
			)}
		</div>
	)
}

export default Avatar
