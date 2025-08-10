import React from 'react'
import Image from 'next/image'

const ReferenceCard = ({
	title,
	description,
	image,
	counter,
}: {
	title: string
	description: string
	image: string
	counter: number
}) => {
	return (
		<div
			className='relative flex items-center justify-center aspect-square group select-none'
			style={
				counter === 0
					? { flex: '0 0 20%' }
					: counter === 1
					? {
							flex: '0 0 22%',
					  }
					: { flex: '0 0 24%' }
			}
		>
			<div className='absolute w-full h-full max-h-[60vh] top-0 left-0  group-hover:blur-md duration-300 bg-black rounded-lg'>
				<Image
					src={image}
					alt={title}
					width={500}
					height={800}
					className='w-full h-full rounded-lg group-hover:opacity-50 duration-300'
				/>
			</div>

			<div className='relative'>
				<h3 className='font-bellefair text-orange text-2xl text-center opacity-0 group-hover:opacity-100 duration-300 group-hover:delay-200'>
					{title}
				</h3>
				<p className='text-white font-bellefair opacity-0 group-hover:opacity-100 duration-300 group-hover:delay-400'>
					{description}
				</p>
			</div>
		</div>
	)
}

export default ReferenceCard
