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
			className='select-none w-full fixed z-50 h-[100dvh] top-0 left-0 p-4 md:p-10 flex justify-center items-center bg-black/50 backdrop-blur-md'
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

			<div className='flex flex-col md:flex-row items-center justify-center w-full'>
				<button
					type='button'
					aria-label='Next image'
					className='w-14 md:block hidden'
					onClick={prevImage}
				>
					<div className='pl-2 hover:pl-0 hover:pr-2 duration-200'>
						<Chevron
							className='text-white rotate-180'
							w={40}
						></Chevron>
					</div>
				</button>

				<div className='h-full w-full flex items-center justify-center md:w-3xl max-h-[80vh]'>
					<div className=''>
						<Image
							width={1500}
							height={1500}
							className=' w-full h-full max-h-[80vh] object-contain rounded-2xl'
							src={img}
							alt={title}
						/>
					</div>
				</div>

				<button
					type='button'
					aria-label='Previous image'
					className='w-14 md:block hidden'
					onClick={nextImage}
				>
					<div className='pr-2 hover:pr-0 hover:pl-2 duration-200'>
						<Chevron className='text-white' w={40}></Chevron>
					</div>
				</button>

				<div className='flex md:hidden mt-4'>
					<button
						type='button'
						aria-label='Next image'
						className='w-14'
						onClick={prevImage}
					>
						<Chevron
							className='text-white rotate-180'
							w={40}
						></Chevron>
					</button>
					<button
						type='button'
						aria-label='Previous image'
						className='w-14'
						onClick={nextImage}
					>
						<Chevron className='text-white' w={40}></Chevron>
					</button>
				</div>
			</div>
		</div>
	)
}

export default ImageModal
