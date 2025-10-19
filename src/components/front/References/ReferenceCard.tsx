import React from 'react'
import Image from 'next/image'

const ReferenceCard = ({
	title,
	description,
	image,
	avatar,
	counter,
}: {
	title: string
	description: string
	image: string
	avatar: string
	counter: number
}) => {
	return (
		<div
			className={`relative flex items-center justify-center aspect-[4/5] h-full w-auto group select-none p-4 ${
				counter === 0
					? 'flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_31%] xl:flex-[0_0_20%]'
					: counter === 1
					? 'flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33%] xl:flex-[0_0_22%]'
					: 'flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_35%] xl:flex-[0_0_24%]'
			}`}
		>
			<div className='absolute w-full h-full max-h-fit top-0 left-0  lg:group-hover:blur-md duration-300 bg-black rounded-lg'>
				<Image
					src={image}
					alt={title}
					width={800}
					height={800}
					className='w-full h-full object-cover object-center rounded-lg opacity-50 lg:opacity-100 lg:group-hover:opacity-50 duration-300'
				/>
			</div>

			<div className='relative w-[80%] max-h-full overflow-y-hidden flex flex-col'>
				<div className='flex items-center gap-2 lg:opacity-0 lg:group-hover:opacity-100 group-hover:delay-200 duration-300'>
					<div className='w-10 h-10 min-w-10  border-white/40 border-2 rounded-full'>
						<Image
							src={avatar}
							alt={`Profile image ${title}`}
							width={100}
							height={100}
							className='w-full h-full object-cover'
						/>
					</div>

					<h3 className='font-bellefair text-orange text-xl sm:text-lg md:text-2xl'>
						{title}
					</h3>
				</div>

				<p className='line-clamp-15 sm:line-clamp-13 md:line-clamp-15 lg:line-clamp-12 xl:line-clamp-18 text-white font-bellefair mt-2 lg:opacity-0 lg:group-hover:opacity-100 group-hover:delay-400 duration-300'>
					{description}
				</p>
			</div>
		</div>
	)
}

export default ReferenceCard
