import React from 'react'
import { FiPlus } from 'react-icons/fi'
import Image from 'next/image'
import { Model } from '@/schemas/model'
import { ImageUploadSchema } from '@/schemas/image-upload.schema'

const ImagePicker = ({
	handleClose,
	galleryData,
}: {
	handleClose: () => void
	galleryData: Model<ImageUploadSchema>[]
}) => {
	return (
		<div className='bg-stone-800/20 animate-fade-in flex flex-col backdrop-blur-xs fixed left-0 top-0 w-full h-screen z-10 p-10'>
			<button
				type='button'
				onClick={handleClose}
				aria-label='Close modal'
				className='flex items-center w-fit self-end justify-center border-white border rounded-full p-1 text-white bg-stone-800/50'
			>
				<FiPlus className='rotate-45' size={22}></FiPlus>
			</button>

			<ul className='w-full grid grid-cols-[repeat(auto-fill,minmax(12rem,2fr))] gap-4 mt-8'>
				{galleryData.map((image) => (
					<li
						key={image.id}
						className='w-full aspect-square border border-white/5 hover:border-white/20 duration-300 rounded-lg overflow-hidden cursor-pointer'
					>
						<Image
							src={image.url}
							alt={image.name}
							width={500}
							height={500}
							className='w-full h-full object-cover object-center'
						/>
					</li>
				))}
			</ul>
		</div>
	)
}

export default ImagePicker
