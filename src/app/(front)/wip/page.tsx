import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	robots: {
		index: false,
		follow: false,
	},
}

const WipPage = () => {
	return (
		<div className='flex flex-col gap-8 w-full h-screen justify-center items-center'>
			<h1 className='!text-[4vw]'>Stránky se připravují ke spuštění</h1>

			<a href='https://motionlabs.cz/' target='_blank'>
				<h1 className='!text-[2vw]'>www.motionlabs.cz</h1>
			</a>
		</div>
	)
}

export default WipPage
