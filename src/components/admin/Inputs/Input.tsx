import React, { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

const Input: React.FC<
	InputHTMLAttributes<HTMLInputElement> & {
		error?: FieldError
		showErrorMessage?: boolean
	}
> = ({ error, showErrorMessage = true, ...props }) => {
	return (
		<>
			<input
				{...props}
				className={`w-full dark:bg-white/5 bg-white/50 p-3 rounded-lg border border-white/5 ${
					error ? '!border-red-500/50 focus:!border-red-500' : ''
				} focus:border-white/20 duration-300 appearance-none ${
					props.className ?? ''
				}`}
			/>
			{showErrorMessage && error && error.message && (
				<span className='w-full text-sm mt-1'>
					<span className='text-red-500/50'>*</span> {error.message}
				</span>
			)}
		</>
	)
}

export default Input
