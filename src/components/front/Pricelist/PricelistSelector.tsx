import { PricelistCategoryType } from '@/types/pricelist-category'
import React from 'react'

const PricelistSelector = ({
	categories,
	selectCategory,
	selectedCategoryId,
}: {
	categories: PricelistCategoryType[] | null
	selectCategory: (category: PricelistCategoryType) => void
	selectedCategoryId: number | null
}) => {
	return (
		<div className='w-full mt-10 flex border-b border-lightOrange'>
			{categories?.map((item) => {
				return (
					<button
						key={item.id}
						onClick={() => selectCategory(item)}
						className={`w-full py-2 box-content duration-200 font-bellefair italic text-xl sm:text-3xl relative hover:text-orange/80 border-b  ${
							selectedCategoryId === item.id
								? 'text-orange border-orange'
								: 'text-black border-transparent hover:border-lightOrange'
						}`}
					>
						<span>{item.name}</span>
					</button>
				)
			})}
		</div>
	)
}

export default PricelistSelector
