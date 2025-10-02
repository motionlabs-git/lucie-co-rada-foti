import React, { HTMLAttributes, ReactElement } from 'react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

interface IProps {
	isOpen: boolean
	href: string
	title: string
	icon: React.ReactNode
}

const Link: React.FC<IProps> = ({ href, title, icon, isOpen }) => {
	const path = usePathname()

	return (
		<NextLink
			href={href}
			className={`h-10 w-full flex items-center ${
				path === href ? 'bg-widget' : ''
			} hover:bg-widget opacity-80 hover:opacity-100 duration-300 rounded-lg`}
		>
			<span className='w-10 aspect-square flex items-center justify-center'>
				{React.cloneElement(
					icon as ReactElement,
					{
						className: 'text-md',
					} as HTMLAttributes<HTMLElement>
				)}
			</span>
			<span className={`${isOpen ? 'md:block' : 'md:hidden'}`}>
				{title}
			</span>
		</NextLink>
	)
}

export default Link
