'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FiPlus } from 'react-icons/fi'

const CloseButton = () => {
	const router = useRouter()

	const closeForm = () => {
		router.back()
	}

	return (
		<button
			onClick={closeForm}
			className='flex gap-1 items-center text-white/60 hover:text-white duration-300 border border-white/60 hover:border-white rounded-lg py-2 px-3'
		>
			Close
			<FiPlus size={24} className='rotate-45' />
		</button>
	)
}

export default CloseButton
