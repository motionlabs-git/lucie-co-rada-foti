import React, { useState } from 'react'
import { FiTrash2 } from 'react-icons/fi'

const DeletePriceInput = ({ handleDelete }: { handleDelete: () => void }) => {
	const [isOpened, setIsOpened] = useState(false)

	return (
		<div className='relative h-fit group'>
			<button
				onClick={() => setIsOpened(true)}
				type='button'
				aria-label='delete button'
				className='self-end flex justify-center items-center gap-2 border border-white/60 text-white/60 rounded-lg py-2 px-3 hover:text-white hover:border-white duration-200'
			>
				<span>Delete</span>
				<FiTrash2 className='text-lg' />
			</button>

			{isOpened && (
				<div
					onMouseLeave={() => setIsOpened(false)}
					className='absolute pt-2 left-1/2 -translate-x-1/2 z-10'
				>
					<div className='p-4 border-2 border-black/20 bg-stone-700/50 backdrop-blur-sm rounded-2xl'>
						<p className='text-nowrap'>Are you sure?</p>

						<div className='mt-2 flex gap-2'>
							<button
								onClick={handleDelete}
								type='button'
								aria-label='Yes'
								className='border border-white text-white rounded-lg py-2 px-3 opacity-60 hover:opacity-100 duration-200'
							>
								<span>Yes</span>
							</button>
							<button
								onClick={() => setIsOpened(false)}
								type='button'
								aria-label='No'
								className='border border-white text-white bg-stone-900 rounded-lg py-2 px-3 opacity-60 hover:opacity-100 duration-200'
							>
								<span>No</span>
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default DeletePriceInput
