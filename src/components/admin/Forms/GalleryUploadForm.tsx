'use client'

import DropImageMulti from '../Inputs/DropImageMulti'
import { useForm } from 'react-hook-form'
import { FiUpload } from 'react-icons/fi'
import { axiosFileClient } from '@/utils/axios/client'
import { FileWithPath } from 'react-dropzone'
import { useState } from 'react'
import { ImSpinner2 } from 'react-icons/im'
import { useRouter } from 'next/navigation'

const GalleryUploadForm = () => {
	const router = useRouter()
	const [loading, setLoading] = useState(false)
	const [response, setResponse] = useState(false)
	const [error, setError] = useState(false)

	const { handleSubmit, setValue, watch } = useForm<{
		files: FileWithPath[]
	}>({
		defaultValues: {
			files: [],
		},
	})
	const files = watch('files')

	const handleFormSubmit = async (data: { files: FileWithPath[] }) => {
		setLoading(true)

		const formData = new FormData()
		data.files.forEach((file) => {
			formData.append('files', file)
		})

		axiosFileClient
			.post(`/api/v1/gallery`, formData)
			.then(() => {
				setResponse(true)
				setError(false)
			})
			.catch(() => {
				setResponse(false)
				setError(true)
			})
			.finally(() => {
				setLoading(false)
				setValue('files', [])
				setTimeout(() => {
					setResponse(false)
					setError(false)
					router.push('/admin/gallery')
				}, 2000)
			})
	}

	return (
		<form
			onSubmit={handleSubmit(handleFormSubmit)}
			className='flex flex-col gap-4 mt-4'
		>
			<DropImageMulti
				files={files}
				setValue={setValue}
				loading={loading}
			/>

			{error && (
				<span className='text-red-500 animate-res-fade-out'>
					An error occurred while uloading images
				</span>
			)}

			{response && (
				<span className='text-green-500 animate-res-fade-out'>
					Images uploaded successfully
				</span>
			)}

			<button
				type='submit'
				className='self-end flex justify-center items-center gap-2 bg-white/90 hover:bg-white text-gray-900 rounded-lg duration-300 py-3 px-6'
			>
				{loading ? (
					<ImSpinner2 className='animate-spin text-lg' />
				) : (
					'Upload'
				)}
				<FiUpload className='text-lg' />
			</button>
		</form>
	)
}

export default GalleryUploadForm
