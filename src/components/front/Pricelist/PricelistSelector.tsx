import React, { useState } from 'react'

const PricelistSelector = () => {
	const [selectedPricelist, setSelectedPricelist] = useState(0)

	return (
		<div className='w-full mt-8 flex border-b border-lightOrange gap-4'>
			<button
				onClick={() => setSelectedPricelist(0)}
				className={`w-full py-2 box-content border-b-[2px] duration-200  ${
					selectedPricelist === 0
						? 'border-orange font-bold'
						: 'border-transparent'
				}`}
			>
				<span className=''>Svatební focení</span>
			</button>

			{/* <div className='h-full border-r border-black/30'></div> */}

			{/* <button
				onClick={() => setSelectedPricelist(1)}
				className={`w-full py-2 border-b-[2px] duration-200 ${
					selectedPricelist === 1
						? ' border-orange font-bold'
						: 'border-transparent'
				}`}
			>
				<span>Ostatní focení</span>
			</button> */}

			<button
				onClick={() => setSelectedPricelist(1)}
				className={`w-full  py-3 border-b-[2px] duration-200 border-2 rounded-lg font-bold ${
					selectedPricelist === 1
						? 'bg-orange border-orange shadow-orange shadow-lg text-white'
						: 'border-black'
				}`}
			>
				<span>Ostatní focení</span>
			</button>
		</div>
	)
}

export default PricelistSelector
