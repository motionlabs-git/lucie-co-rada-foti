import React from 'react'

interface IProps {
	children: React.ReactNode
}

const Main: React.FC<IProps> = ({ children }) => {
	return (
		<div className='flex-1 h-full flex flex-col items-center overflow-x-hidden overflow-y-auto'>
			<main className='w-full max-w-7xl flex flex-col gap-4 p-4'>
				{children}
			</main>
		</div>
	)
}

export default Main
