import React from 'react'
import Marquee from '../Marquee/Marquee'
import Image from 'next/image'

const GalleryMiddleColumn = ({
	galleryData,
	className,
	handleClick,
}: {
	galleryData: {
		src: string
		title: string
		id: number
	}[]
	className: string
	handleClick: (id: number) => void
}) => {
	return (
		<div className='hidden md:flex h-screen items-end flex-1'>
			<div
				id='galleryMiddleColumn'
				className={`h-fit w-full flex flex-col gap-4 ${className}`}
			>
				<div
					id='galleryMiddleColumnFill'
					className='w-full flex flex-col gap-4'
				>
					{galleryData.map((img, index) => (
						<div
							key={index}
							onClick={() => {
								handleClick(img.id)
							}}
							className='relative rounded-xl cursor-pointer group'
						>
							<div className='w-full h-auto duration-300 group-hover:blur-xs'>
								<Image
									width={800}
									height={800}
									className='w-full duration-300 rounded-xl'
									src={img.src}
									alt={img.title}
								/>
							</div>

							<div className='absolute top-0 left-0 w-full h-full flex justify-center items-end opacity-0 group-hover:opacity-100 duration-300 '>
								<Marquee sets={4} containerClassName='gap-4'>
									<h2 className='text-orange font-promenadeItalic text-7xl'>
										Titulek obrázku ~{' '}
									</h2>
								</Marquee>
							</div>
						</div>
					))}
				</div>

				{galleryData.map((img, index) => (
					<div
						key={index}
						onClick={() => {
							handleClick(img.id)
						}}
						className='relative rounded-xl cursor-pointer group'
					>
						<div className='w-full h-auto duration-300 group-hover:blur-xs'>
							<Image
								width={800}
								height={800}
								className='w-full duration-300 rounded-xl'
								src={img.src}
								alt={img.title}
							/>
						</div>

						<div className='absolute top-0 left-0 w-full h-full flex justify-center items-end opacity-0 group-hover:opacity-100 duration-300 '>
							<Marquee sets={4} containerClassName='gap-4'>
								<h2 className='text-orange font-promenadeItalic text-7xl'>
									Titulek obrázku ~{' '}
								</h2>
							</Marquee>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default GalleryMiddleColumn
