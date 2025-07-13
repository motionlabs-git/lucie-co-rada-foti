import React from 'react'

interface IProps {
	children: React.ReactNode
}

const Main: React.FC<IProps> = ({ children }) => {
	return <main className='flex-1 flex flex-col gap-4'>{children}</main>
}

export default Main
