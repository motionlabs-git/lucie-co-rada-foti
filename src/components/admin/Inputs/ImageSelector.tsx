import { ImageType } from '@/types/image'
import Image from 'next/image'
import React from 'react'
import { FiPlus } from 'react-icons/fi'

const ImageSelector = ({
	aspect,
	image,
	handleDelete,
}: {
	aspect: string
	image: ImageType
	handleDelete: () => void
}) => {
	return (
		<div
			className={` ${aspect} w-full relative flex items-center justify-center rounded-xl bg-black/50 border-dashed border-3 border-stone-800 text-stone-800 hover:border-stone-700 hover:bg-black/40 hover:text-stone-700 cursor-pointer duration-300 overflow-hidden`}
		>
			{image && (
				<button
					type='button'
					aria-label='Delete image'
					className='absolute top-4 right-4 flex items-center justify-center border-white border rounded-full p-1 text-white bg-stone-800/50 backdrop-blur-sm'
					onClick={handleDelete}
				>
					<FiPlus className='rotate-45' size={18}></FiPlus>
				</button>
			)}

			{image ? (
				<Image
					className='w-full h-full object-cover'
					src={image.url}
					width={400}
					height={400}
					alt={''}
				></Image>
			) : (
				<FiPlus size={34} />
			)}
		</div>
	)
}

export default ImageSelector
