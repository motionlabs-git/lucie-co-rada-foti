import GalleryGrid from '@/components/admin/Gallery/GalleryGrid'
import SSRPagination from '@/components/admin/Pagination/SSRPagination'
import { ImageUploadSchema } from '@/schemas/image-upload.schema'
import { Model } from '@/schemas/model'
import { createServerClient } from '@/utils/supabase/server'
import { PostgrestResponse } from '@supabase/supabase-js'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { FiPlus, FiUpload } from 'react-icons/fi'

const GalleryPage: NextPage<{
	searchParams: Promise<Record<string, string | string[] | undefined>>
}> = async ({ searchParams }) => {
	const { page } = await searchParams

	const pageSize = 20
	const parsedPage = page && !isNaN(+page) && +page ? +page : 1
	const startIndex = (parsedPage - 1) * pageSize
	const endIndex = parsedPage * pageSize - 1

	const supabase = await createServerClient()
	const {
		data: pageData,
		error: galleryError,
	}: PostgrestResponse<Model<ImageUploadSchema>> = await supabase
		.from('image_upload')
		.select('*')
		.range(startIndex, endIndex)

	const {
		count,
		error: paginationError,
	}: PostgrestResponse<Model<ImageUploadSchema>> = await supabase
		.from('image_upload')
		.select('*', { count: 'exact', head: true })

	if (galleryError || paginationError) redirect('/admin/error')

	return (
		<>
			<section className='w-full rounded-2xl bg-widget p-4'>
				<h2 className='text-xl'>Gallery grid</h2>

				<GalleryGrid />
			</section>

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

				{pageData && (
					<ul className='w-full grid grid-cols-[repeat(auto-fill,minmax(12rem,2fr))] gap-4 mt-8'>
						{pageData.map((image) => (
							<li
								key={image.id}
								className='relative w-full aspect-square border border-white/5 hover:border-white/20 duration-300 rounded-lg overflow-hidden'
							>
								<button
									type='button'
									aria-label='Delete image'
									className='absolute z-10 top-4 right-4 flex items-center justify-center border-white border rounded-full p-1 text-white bg-stone-800/50 backdrop-blur-sm'
									// onClick={() => {
									// 	// TODO:DELETE obrázku
									// 	return
									// }}
								>
									<FiPlus
										className='rotate-45'
										size={18}
									></FiPlus>
								</button>
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
				)}

				<SSRPagination
					count={count}
					page={parsedPage}
					pageSize={pageSize}
					href={'/admin/gallery'}
				/>
			</section>
		</>
	)
}

export default GalleryPage
