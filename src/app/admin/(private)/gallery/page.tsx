import GalleryGridForm from '@/components/admin/Forms/GalleryGridForm'
import PageLink from '@/components/admin/Pagination/PageLink'
import { ImageUploadSchema } from '@/schemas/image-upload.schema'
import { Model } from '@/schemas/model'
import { createServerClient } from '@/utils/supabase/server'
import { PostgrestResponse } from '@supabase/supabase-js'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import {
	FiChevronLeft,
	FiChevronRight,
	FiChevronsLeft,
	FiChevronsRight,
	FiUpload,
} from 'react-icons/fi'

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

	const { data: gridData, error: gridError } = await supabase
		.from('gallery_grid')
		.select('*')
		.order('id', { ascending: true })

	console.log(gridData)

	if (galleryError || paginationError || gridError) redirect('/admin/error')

	return (
		<>
			<section className='w-full rounded-2xl bg-widget p-4'>
				<h2 className='text-xl'>Gallery grid</h2>
				<GalleryGridForm
					gridData={gridData}
					uploadedImages={pageData}
				></GalleryGridForm>
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

				{/* TODO: */}
				{pageData && (
					<ul className='w-full grid grid-cols-[repeat(auto-fill,minmax(12rem,2fr))] gap-4 mt-8'>
						{pageData.map((image) => (
							<li
								key={image.id}
								className='w-full aspect-square border border-white/5 hover:border-white/20 duration-300 rounded-lg overflow-hidden'
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
				)}

				{/* TODO: */}
				{count && (
					<div className='flex justify-center mt-6'>
						<nav className='inline-flex gap-2'>
							{parsedPage > 1 && (
								<>
									<PageLink href='/admin/gallery?page=1'>
										<FiChevronsLeft />
									</PageLink>

									<PageLink
										href={`/admin/gallery?page=${
											parsedPage - 1
										}`}
									>
										<FiChevronLeft />
									</PageLink>
								</>
							)}

							{Array.from(
								{ length: Math.ceil(count / pageSize) },
								(_, i) => i + 1
							).map((pageNum) =>
								pageNum === parsedPage ||
								(pageNum >= parsedPage - 2 &&
									pageNum <= parsedPage + 2) ? (
									<PageLink
										key={pageNum}
										href={`/admin/gallery?page=${pageNum}`}
										current={pageNum === parsedPage}
									>
										{pageNum}
									</PageLink>
								) : null
							)}

							{parsedPage < Math.ceil(count / pageSize) && (
								<>
									<PageLink
										href={`/admin/gallery?page=${
											parsedPage + 1
										}`}
									>
										<FiChevronRight />
									</PageLink>

									<PageLink
										href={`/admin/gallery?page=${Math.ceil(
											count / pageSize
										)}`}
									>
										<FiChevronsRight />
									</PageLink>
								</>
							)}
						</nav>
					</div>
				)}
			</section>
		</>
	)
}

export default GalleryPage
