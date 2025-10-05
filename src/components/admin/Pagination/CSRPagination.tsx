import React from 'react'
import {
	FiChevronLeft,
	FiChevronRight,
	FiChevronsLeft,
	FiChevronsRight,
} from 'react-icons/fi'

interface IProps {
	page: number
	onPageChange: (page: number) => void
	count: number
	pageSize: number
}

const CSRPagination: React.FC<IProps> = ({
	page,
	onPageChange,
	count,
	pageSize,
}) => {
	const className =
		'w-8 h-8 flex items-center justify-center bg-white/50 dark:bg-white/5 dark:hover:bg-white/10 border border-white/5 hover:border-white/20 duration-300 rounded-lg'

	return (
		<div className='flex justify-center mt-6'>
			<nav className='inline-flex gap-2'>
				{page > 1 && (
					<>
						<button
							onClick={(e) => {
								e.preventDefault()
								onPageChange(1)
							}}
							className={className}
						>
							<FiChevronsLeft />
						</button>

						<button
							onClick={(e) => {
								e.preventDefault()
								if (page > 1) onPageChange(page - 1)
							}}
							className={className}
						>
							<FiChevronLeft />
						</button>
					</>
				)}

				{Array.from(
					{ length: Math.ceil(count / pageSize) },
					(_, i) => i + 1
				).map((pageNum) =>
					pageNum === page ||
					(pageNum >= page - 2 && pageNum <= page + 2) ? (
						<button
							key={pageNum}
							onClick={(e) => {
								e.preventDefault()
								onPageChange(pageNum)
							}}
							className={`${className} ${
								page === pageNum
									? 'dark:!bg-white/10 dark:!border-white/20'
									: ''
							}`}
						>
							{pageNum}
						</button>
					) : null
				)}

				{page < Math.ceil(count / pageSize) && (
					<>
						<button
							onClick={(e) => {
								e.preventDefault()
								if (page < Math.ceil(count / pageSize))
									onPageChange(page + 1)
							}}
							className={className}
						>
							<FiChevronRight />
						</button>

						<button
							onClick={(e) => {
								e.preventDefault()
								onPageChange(Math.ceil(count / pageSize))
							}}
							className={className}
						>
							<FiChevronsRight />
						</button>
					</>
				)}
			</nav>
		</div>
	)
}

export default CSRPagination
