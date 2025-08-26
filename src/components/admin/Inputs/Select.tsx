import React, { ReactNode, SelectHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

const Input: React.FC<
	SelectHTMLAttributes<HTMLSelectElement> & {
		children: ReactNode
		error?: FieldError
	}
> = ({ children, error, ...props }) => {
	return (
		<>
			<select
				{...props}
				className={`w-full bg-white/5 p-3 rounded-lg border border-white/5 ${
					error ? '!border-red-500/50 focus:!border-red-500' : ''
				} focus:border-white/20 duration-300 appearance-none ${
					props.className ?? ''
				}`}
			>
				{children}
			</select>
			{error && error.message && (
				<span className='w-full text-sm mt-1'>
					<span className='text-red-500/50'>*</span> {error.message}
				</span>
			)}
		</>
	)
}

export default Input
