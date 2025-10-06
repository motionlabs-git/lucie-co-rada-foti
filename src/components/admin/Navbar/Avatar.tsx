'use client'

import { signOut } from '@/actions/authActions'
import { useState } from 'react'
import { FiLogOut, FiUser } from 'react-icons/fi'

const Avatar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const handleAvatarClick = () => setIsOpen((prev) => !prev)
	// TODO: BLUR
	const handleBlur = (e) => {
		console.log(e.target.id)
		e.stopPropagation()
		if (e.target.id !== 'signOutBtn') {
			signOut()
		} else {
			setIsOpen(false)
		}
	}

	return (
		<div className='relative'>
			<button
				type='button'
				id='signOutBtn'
				onClick={handleAvatarClick}
				className={`w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5
					hover:dark:bg-white/5 border border-black/5 dark:border-white/5 duration-300`}
			>
				<FiUser className='text-lg opacity-80' />
			</button>
			{isOpen && (
				<ul className='absolute right-0 top-13 bg-stone-300 dark:bg-stone-900 rounded-lg border border-black/10 dark:border-white/5 p-2'>
					<li>
						<form action={signOut}>
							<button
								onBlur={(e) => handleBlur(e)}
								type='submit'
								className='flex items-center gap-2'
							>
								<FiLogOut />
								Logout
							</button>
						</form>
					</li>
				</ul>
			)}
		</div>
	)
}

export default Avatar
