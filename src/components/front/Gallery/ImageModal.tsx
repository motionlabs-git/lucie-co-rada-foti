import React from 'react'
import Chevron from '@/icons/Chevron'
import Image from 'next/image'
import CrossIcon from '@/icons/Cross'

const ImageModal = ({
	img,
	title,
	nextImage,
	prevImage,
	handleCloseImage,
}: {
	img: string
	title: string
	nextImage: () => void
	prevImage: () => void
	handleCloseImage: () => void
}) => {
	return (
		<div
			id='imageModal'
			className='select-none fixed z-50 w-screen h-screen top-0 left-0 px-10 py-10 flex justify-center items-center bg-black/50 backdrop-blur-md'
		>
			<button
				type='button'
				aria-label='Close image'
				onClick={handleCloseImage}
				className='absolute top-10 right-10 text-white font-6xl'
			>
				<CrossIcon
					size={34}
					className='duration-300 text-white hover:text-orange hover:scale-95'
				></CrossIcon>
			</button>

			<div className='flex items-center'>
				<button
					type='button'
					aria-label='Next image'
					className='w-14'
					onClick={prevImage}
				>
					<div className='pl-2 hover:pl-0 hover:pr-2 duration-200'>
						<Chevron
							className='text-white rotate-180'
							w={40}
						></Chevron>
					</div>
				</button>

				<div
					id='imageModalImg'
					className='bg-red-400 rounded-2xl max-h-[80vh] absolute z-50'
				>
					{' '}
				</div>

				<Image
					width={1200}
					height={1200}
					className='h-full w-3xl max-h-[80vh] object-cover rounded-2xl'
					src={img}
					alt={title}
				/>

				<button
					type='button'
					aria-label='Previous image'
					className='w-14'
					onClick={nextImage}
				>
					<div className='pr-2 hover:pr-0 hover:pl-2 duration-200'>
						<Chevron className='text-white' w={40}></Chevron>
					</div>
				</button>
			</div>
		</div>
	)
}

export default ImageModal
