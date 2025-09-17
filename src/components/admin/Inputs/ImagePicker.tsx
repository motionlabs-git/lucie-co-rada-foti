import React from 'react'
import { FiPlus } from 'react-icons/fi'
import Image from 'next/image'
import { Model } from '@/schemas/model'
import { ImageUploadSchema } from '@/schemas/image-upload.schema'

const ImagePicker = ({
	handleClose,
	galleryData,
	handleSelect,
}: {
	handleClose: () => void
	galleryData: Model<ImageUploadSchema>[]
	handleSelect: (id: number) => void
}) => {
	return (
		<div className='bg-stone-800/20 animate-fade-in flex justify-center items-center backdrop-blur-xs fixed left-0 top-0 w-full h-screen z-10 p-10'>
			<div className='flex flex-col max-h-full bg-stone-800/50 border border-white/20 rounded-2xl p-8 w-7xl'>
				<div className='w-full flex justify-between items-center'>
					<h2 className='text-xl'>Select image</h2>
					<button
						type='button'
						onClick={handleClose}
						aria-label='Close modal'
						className='flex items-center w-fit justify-center border-white border rounded-full p-1 text-white bg-stone-800/50'
					>
						<FiPlus className='rotate-45' size={22}></FiPlus>
					</button>
				</div>
				<div className='mt-8 flex-1 overflow-y-scroll'>
					<ul className='w-full grid grid-cols-[repeat(auto-fill,minmax(12rem,2fr))] gap-4'>
						{galleryData.map((image) => (
							<li
								key={image.id}
								className='w-full aspect-square border border-white/5 hover:border-white/20 duration-300 rounded-lg overflow-hidden cursor-pointer select-none'
								onClick={() => handleSelect(image.id)}
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
			</div>
		</div>
	)
}

export default ImagePicker
