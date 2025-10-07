import React from 'react'
import PageLink from './PageLink'
import {
	FiChevronLeft,
	FiChevronRight,
	FiChevronsLeft,
	FiChevronsRight,
} from 'react-icons/fi'

interface IProps {
	count: number | null
	page: number
	pageSize: number
	href: string
}

const SSRPagination: React.FC<IProps> = ({ count, page, pageSize, href }) => {
	if (!count) return null

	return (
		<div className='flex justify-center mt-6'>
			<nav className='inline-flex gap-2'>
				{page > 1 && (
					<>
						<PageLink href={`${href}?page=1`}>
							<FiChevronsLeft />
						</PageLink>

						<PageLink href={`${href}?page=${page - 1}`}>
							<FiChevronLeft />
						</PageLink>
					</>
				)}

				{Array.from(
					{ length: Math.ceil(count / pageSize) },
					(_, i) => i + 1
				).map((pageNum) =>
					pageNum === page ||
					(pageNum >= page - 2 && pageNum <= page + 2) ? (
						<PageLink
							key={pageNum}
							href={`${href}?page=${pageNum}`}
							current={pageNum === page}
						>
							{pageNum}
						</PageLink>
					) : null
				)}

				{page < Math.ceil(count / pageSize) && (
					<>
						<PageLink href={`${href}?page=${page + 1}`}>
							<FiChevronRight />
						</PageLink>

						<PageLink
							href={`${href}?page=${Math.ceil(count / pageSize)}`}
						>
							<FiChevronsRight />
						</PageLink>
					</>
				)}
			</nav>
		</div>
	)
}

export default SSRPagination
