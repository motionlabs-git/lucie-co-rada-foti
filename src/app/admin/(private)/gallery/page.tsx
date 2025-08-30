import { createServerClient } from '@/utils/supabase/server'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { FiUpload } from 'react-icons/fi'

const GalleryPage = async () => {
	const supabase = await createServerClient()
	const { data: galleryData, error: galleryError } = await supabase
		.from('image_upload')
		.select('*')

	if (galleryError) redirect('/admin/error')

	return (
		<>
			<section className='w-full rounded-2xl bg-widget p-4'>
				<div className='flex items-center justify-between gap-2'>
					<h2 className='text-xl'>Gallery</h2>
					<Link
						href='/admin/gallery/create'
						className='self-end flex justify-center items-center gap-2 bg-green-600 hover:bg-green-500 text-gray-100 rounded-lg duration-300 py-2 px-4'
					>
						<FiUpload />
						Upload images
					</Link>
				</div>

				{/* TODO: */}
				{galleryData && (
					<ul className='w-full grid grid-cols-[repeat(auto-fill,minmax(10rem,2fr))] gap-4 mt-4'>
						{galleryData.map((image) => (
							<li key={image.id}>
								<Image
									src={image.url}
									alt={image.name}
									width={500}
									height={500}
								/>
							</li>
						))}
					</ul>
				)}
			</section>
		</>
	)
}

export default GalleryPage
