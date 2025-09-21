import React from 'react'
import {
	Control,
	FieldErrors,
	FieldValue,
	FieldValues,
	useFieldArray,
	UseFormRegister,
} from 'react-hook-form'
import Input from './Input'
import { FiPlus, FiX } from 'react-icons/fi'

interface IProps {
	name: string
	control: Control<Record<string, unknown>, unknown>
	register: UseFormRegister<Record<string, unknown>>
	errors: FieldErrors<Record<string, unknown>>
}

const FieldArray: React.FC<IProps> = ({ control, register, errors, name }) => {
	const { fields, append, remove } = useFieldArray<FieldValues>({
		name,
		control,
	})

	const handleAppendItem = () => append({ id: Date.now(), value: '' })

	const handleRemoveItem = (index: number) => remove(index)

	return (
		<div className='flex flex-col items-center'>
			{fields.length > 0 && (
				<ul className='w-full flex flex-col gap-2 mt-1'>
					{fields.map((field, index) => (
						<li key={field.id} className='animate-fade-in'>
							<div className='flex items-center gap-2'>
								<Input
									{...register(
										`items.${index}.value` as const
									)}
									placeholder={`Item ${index + 1}`}
									type='text'
									error={
										errors.items &&
										Array.isArray(errors.items) &&
										errors.items[index]
											? (errors.items[index]
													?.value as FieldValue<FieldValues>)
											: undefined
									}
									showErrorMessage={false}
								/>
								<button
									onClick={() => handleRemoveItem(index)}
									className='h-8 w-8 flex items-center justify-center bg-white/50 dark:bg-white/5 dark:hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-lg duration-300'
								>
									<FiX />
								</button>
							</div>
							{errors.items &&
								Array.isArray(errors.items) &&
								errors.items[index] &&
								typeof errors.items[index].value?.message ===
									'string' && (
									<span className='w-full text-sm mt-1'>
										<span className='text-red-500/50'>
											*
										</span>{' '}
										{errors.items[index].value.message}
									</span>
								)}
						</li>
					))}
				</ul>
			)}
			<button
				type='button'
				onClick={handleAppendItem}
				className='inline-flex items-center justify-center gap-1 bg-white/50 dark:bg-white/5 dark:hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-lg duration-300 py-1 px-2 mt-2'
			>
				<FiPlus /> Add item
			</button>
		</div>
	)
}

export default FieldArray
