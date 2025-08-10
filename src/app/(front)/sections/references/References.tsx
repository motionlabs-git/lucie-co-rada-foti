import React from 'react'
import SlideSet from './SlideSet'

const References = () => {
	return (
		<section className='min-h-screen flex'>
			<div className='w-screen flex overflow-x-hidden'>
				<SlideSet />
				<SlideSet />
				<SlideSet />
				<SlideSet />
			</div>
		</section>
	)
}

export default References
