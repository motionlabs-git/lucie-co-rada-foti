import React from 'react'

interface Props {
	characters: number
	low: number
	enought: [number, number]
}

const colorScale = ['bg-red-400', 'bg-yellow-400', 'bg-green-400']

const ProgressBar = (props: Props) => {
	const fillPercentage = (props.characters * 100) / props.enought[1]

	return (
		<div className='rounded-full h-1.5 w-full dark:bg-white/5 bg-white/50 mt-2'>
			<div
				className={`rounded-full h-1.5 w-1/2 max-w-full duration-200 ${
					props.characters >= 0 &&
					props.characters <= props.low &&
					colorScale[0]
				} ${
					props.characters > props.low &&
					props.characters < props.enought[0] &&
					colorScale[1]
				} ${
					props.characters >= props.enought[0] &&
					props.characters <= props.enought[1] &&
					colorScale[2]
				} ${props.characters > props.enought[1] && colorScale[0]}
                `}
				style={{ width: `${fillPercentage}%` }}
			></div>
		</div>
	)
}

export default ProgressBar
