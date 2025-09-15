import React, { useState } from 'react'
import { FiCheck, FiPlus, FiTrash2 } from 'react-icons/fi'

const DeletePriceInput = ({ handleDelete }: { handleDelete: () => void }) => {
	const [isOpened, setIsOpened] = useState(false)

	return (
		<div className='group'>
			{isOpened ? (
				<div className='flex gap-2'>
					<button
						onClick={handleDelete}
						type='button'
						aria-label='Yes'
						className='h-8 w-8 flex items-center justify-center border border-white text-white rounded-lg  opacity-60 hover:opacity-100 duration-200'
					>
						<FiCheck size={16}></FiCheck>
					</button>
					<button
						onClick={() => setIsOpened(false)}
						type='button'
						aria-label='No'
						className='h-8 w-8 flex items-center justify-center border border-white text-white bg-stone-900 rounded-lg p-2 opacity-60 hover:opacity-100 duration-200'
					>
						<FiPlus className='rotate-45' size={16}></FiPlus>
					</button>
				</div>
			) : (
				<button
					onClick={() => setIsOpened(true)}
					type='button'
					aria-label='delete button'
					className='text-sm h-8 flex justify-center items-center gap-2 border border-white/60 text-white/60 rounded-lg px-3 hover:text-white hover:border-white duration-200'
				>
					<span>Delete</span>
					<FiTrash2 size={16} />
				</button>
			)}
		</div>
	)
}

export default DeletePriceInput
