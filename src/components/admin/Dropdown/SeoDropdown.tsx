'use client'

import React, { ReactNode, useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

interface IProps {
	name: string
	path: string
	defaultOpened?: boolean
	children?: ReactNode
}

const SeoDropdown: React.FC<IProps> = ({
	name,
	path,
	defaultOpened = true,
	children,
}) => {
	const [opened, setOpened] = useState(defaultOpened ?? true)

	const handleClick = () => setOpened((prev) => !prev)

	return (
		<div className='bg-white/5 dark:bg-black/50 rounded-xl p-4'>
			<button
				type='button'
				onClick={handleClick}
				className='w-full flex items-center justify-between gap-2 cursor-pointer'
			>
				<section className='flex items-center gap-2'>
					<span className='bg-white font-mono text-black rounded-md px-2'>
						{path}
					</span>
					{name}
				</section>
				<section>
					<FiChevronDown
						size={22}
						className={`${opened ? 'rotate-180' : ''} duration-300`}
					/>
				</section>
			</button>
			{opened && <div className='mt-4'>{children}</div>}
		</div>
	)
}

export default SeoDropdown
