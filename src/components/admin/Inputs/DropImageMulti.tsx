import Image from 'next/image'
import React, { useCallback } from 'react'
import { useDropzone, FileWithPath } from 'react-dropzone'
import { UseFormSetValue } from 'react-hook-form'
import { FiX } from 'react-icons/fi'

interface IProps {
	files: FileWithPath[]
	setValue: UseFormSetValue<{
		files: FileWithPath[]
	}>
	loading: boolean
}

const DropImageMulti: React.FC<IProps> = ({ files, setValue, loading }) => {
	const onDrop = useCallback(
		(acceptedFiles: FileWithPath[]) => {
			setValue('files', [...files, ...acceptedFiles])
		},
		[files, setValue]
	)

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: {
			'image/jpeg': ['.jpg', '.jpeg'],
			// 'image/png': ['.png'],
		},
	})

	const handleFilterFiles = (index: number) => {
		setValue(
			'files',
			files.filter((_, i) => i !== index)
		)
	}

	return (
		<div>
			<div
				{...getRootProps()}
				className={`min-h-32 flex items-center justify-center rounded-xl dark:bg-black/50 border-dashed border-3 ${
					isDragActive ? 'border-green-500' : 'border-stone-800'
				} cursor-pointer duration-300 p-4`}
			>
				<input {...getInputProps()} />
				{isDragActive ? (
					<p>Drop the files here ...</p>
				) : (
					<p>Drag n drop some files here, or click to select files</p>
				)}
			</div>

			{files.length > 0 && (
				<ul className='grid grid-cols-[repeat(auto-fill,minmax(6rem,2fr))] gap-4 mt-4'>
					{files.map((file, index) => (
						<li key={index} className='relative group'>
							<div
								className={`relative w-full aspect-square bg-stone-950 rounded-xl overflow-hidden ${
									loading ? 'animate-pulse' : ''
								}`}
							>
								<Image
									src={URL.createObjectURL(file)}
									alt={file.path ?? ''}
									width={100}
									height={100}
									className={`w-full h-full object-cover ${
										loading ? 'opacity-60' : ''
									}`}
								/>
							</div>
							{!loading && (
								<button
									type='button'
									onClick={() => handleFilterFiles(index)}
									className='absolute -top-3 -right-3 w-6 h-6 flex items-center justify-center rounded-full bg-white opacity-0 group-hover:opacity-100 duration-300'
								>
									<FiX
										size={18}
										className='dark:text-stone-950'
									/>
								</button>
							)}
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default DropImageMulti
