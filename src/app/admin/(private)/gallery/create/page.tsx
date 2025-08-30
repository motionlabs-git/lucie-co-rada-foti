import GalleryUploadForm from '@/components/admin/Forms/GalleryUploadForm'

const GalleryUploadPage = () => {
	return (
		<>
			<section className='w-full rounded-2xl bg-widget p-4'>
				<h2 className='text-xl'>Image upload</h2>

				<GalleryUploadForm />
			</section>
		</>
	)
}

export default GalleryUploadPage
