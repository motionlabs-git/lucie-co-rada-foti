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
			className={`relative flex items-center justify-center aspect-square h-full w-auto group select-none ${
				counter === 0
					? 'flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_31%] xl:flex-[0_0_20%]'
					: counter === 1
					? 'flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33%] xl:flex-[0_0_22%]'
					: 'flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_35%] xl:flex-[0_0_24%]'
			}`}
		>
			<div className='absolute w-full h-full max-h-[60vh] top-0 left-0  lg:group-hover:blur-md duration-300 bg-black rounded-lg'>
				<Image
					src={image}
					alt={title}
					width={500}
					height={800}
					className='w-full h-full object-cover object-center rounded-lg opacity-50 lg:opacity-100 lg:group-hover:opacity-50 duration-300'
				/>
			</div>

			<div className='relative w-2/3'>
				<div className='flex items-center gap-2 lg:opacity-0 lg:group-hover:opacity-100 group-hover:delay-200 duration-300'>
					<div className='w-10 h-10 min-w-10 bg-red-400 border-white/40 border-2 rounded-xl'></div>
					<h3 className='font-bellefair text-orange text-2xl'>
						{title}
					</h3>
				</div>

				<p className='text-white font-bellefair mt-2 lg:opacity-0 lg:group-hover:opacity-100 group-hover:delay-400 duration-300'>
					{description}
				</p>
			</div>
		</div>
	)
}

export default ReferenceCard
