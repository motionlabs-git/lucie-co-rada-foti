import React, { useState } from 'react'

function HamburgerIcon({
	handleClick,
	isOpened,
}: {
	handleClick: () => void
	isOpened: boolean
}) {
	const [isClicked, setIsClicked] = useState(false)

	return (
		<button
			className={`shadow-md relative h-12 aspect-square bg-white border-black/30 border-[1px] rounded-lg gap-1 flex flex-col justify-center items-center ${
				isClicked ? 'scale-95' : 'scale-100'
			}`}
			onClick={handleClick}
			onMouseDownCapture={() => setIsClicked(true)}
			onMouseUpCapture={() => setIsClicked(false)}
		>
			<div
				className={`h-[2px] rounded-full bg-black duration-300 ${
					isOpened ? 'w-0' : 'w-2/5'
				}`}
			></div>
			<div
				className={`h-[2px] rounded-full w-2/5 bg-black absolute duration-300 ${
					isOpened ? 'rotate-45 delay-300' : 'rotate-0'
				}`}
			></div>
			<div
				className={`h-[2px] rounded-full w-2/5 bg-black duration-300 ${
					isOpened ? '-rotate-45 delay-300' : 'rotate-0'
				}`}
			></div>
			<div
				className={`h-[2px] rounded-full bg-black duration-300 ${
					isOpened ? 'w-0' : 'w-2/5'
				}`}
			></div>
		</button>
	)
}

export default HamburgerIcon
