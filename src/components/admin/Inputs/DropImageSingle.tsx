import React, { InputHTMLAttributes, useCallback } from 'react'
import { FileWithPath, useDropzone } from 'react-dropzone'
import { UseFormSetValue } from 'react-hook-form'
import Image from 'next/image'
import { FiX } from 'react-icons/fi'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string
	values: Record<string, string | null>
	setValue: UseFormSetValue<Record<string, string | null>>
	file: FileWithPath | null
	setFile: (file: FileWithPath | null) => void
}
const DropImageSingle: React.FC<IProps> = ({
	name,
	values,
	setValue,
	file,
	setFile,
	className,
}) => {
	const onDrop = useCallback(
		(acceptedFiles: FileWithPath[]) => {
			const [droppedFile] = acceptedFiles
			if (droppedFile) {
				setFile(droppedFile)
			}
		},
		[setFile]
	)

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: {
			'image/jpeg': ['.jpg', '.jpeg'],
		},
	})

	const handleDeleteFile = () => setFile(null)

	const handleDeleteImage = () => {
		setValue(`${name}_name`, null)
		setValue(`${name}_public_id`, null)
		setValue(`${name}_url`, null)
	}

	if (
		values[`${name}_name`] &&
		values[`${name}_public_id`] &&
		values[`${name}_url`]
	) {
		return (
			<div className='relative'>
				<div
					className={`w-full max-w-2xs aspect-square rounded-xl overflow-hidden ${
						className ?? ''
					}`}
				>
					<Image
						src={values[`${name}_url`]!}
						alt={values[`${name}_name`]!}
						width={500}
						height={500}
						className='w-full h-full object-cover'
					/>
				</div>

				{/* TODO: style btn */}
				<button
					type='button'
					aria-label='Remove image'
					onClick={handleDeleteImage}
					className='absolute top-2 right-2 dark:bg-white rounded-full'
				>
					<FiX />
				</button>
			</div>
		)
	}

	if (file) {
		// TODO: show uploading state
		return (
			<div className='relative'>
				<div
					className={`w-full max-w-2xs aspect-square rounded-xl overflow-hidden ${
						className ?? ''
					}`}
				>
					<Image
						src={URL.createObjectURL(file)}
						alt='Dropped file'
						width={500}
						height={500}
						className='w-full h-full object-cover'
					/>
				</div>

				{/* TODO: style btn */}
				<button
					type='button'
					aria-label='Remove image'
					onClick={handleDeleteFile}
					className='absolute top-2 right-2 dark:bg-white rounded-full'
				>
					<FiX />
				</button>
			</div>
		)
	}

	return (
		<div
			{...getRootProps()}
			className={`w-full max-w-2xs aspect-square flex items-center justify-center rounded-xl dark:bg-black/50 border-dashed border-3 ${
				isDragActive ? 'border-green-500' : 'border-stone-800'
			} cursor-pointer duration-300 p-4 ${className ?? ''}`}
		>
			<input {...getInputProps()} />
			{isDragActive ? (
				<p>Drop the files here ...</p>
			) : (
				<p>Drag n drop some files here, or click to select files</p>
			)}
		</div>
	)
}

export default DropImageSingle
