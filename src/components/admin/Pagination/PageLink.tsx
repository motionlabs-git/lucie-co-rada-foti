import Link, { LinkProps } from 'next/link'

interface IProps extends LinkProps {
	children: React.ReactNode
	className?: string
	current?: boolean
}

const PageLink: React.FC<IProps> = ({
	children,
	className,
	current,
	...props
}) => {
	return (
		<Link
			{...props}
			className={`w-8 h-8 flex items-center justify-center bg-white/50 dark:bg-white/5 dark:hover:bg-white/10 border border-white/5 hover:border-white/20 duration-300 rounded-lg ${
				current ? 'dark:!bg-white/10 dark:!border-white/20' : ''
			} ${className ?? ''}`}
		>
			{children}
		</Link>
	)
}

export default PageLink
