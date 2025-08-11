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
			className={`shadow-md relative w-14 aspect-square h-auto bg-white border-black/30 border-[1px] rounded-lg gap-2 flex flex-col justify-center items-center ${
				isClicked ? 'scale-95' : 'scale-100'
			}`}
			onClick={handleClick}
			onMouseDownCapture={() => setIsClicked(true)}
			onMouseUpCapture={() => setIsClicked(false)}
		>
			<div
				className={`h-[2px] rounded-full bg-black duration-300 ${
					isOpened ? 'w-0' : 'w-1/2'
				}`}
			></div>
			<div
				className={`h-[2px] rounded-full w-1/2 bg-black absolute duration-300 ${
					isOpened ? 'rotate-45 delay-300' : 'rotate-0'
				}`}
			></div>
			<div
				className={`h-[2px] rounded-full w-1/2 bg-black duration-300 ${
					isOpened ? '-rotate-45 delay-300' : 'rotate-0'
				}`}
			></div>
			<div
				className={`h-[2px] rounded-full bg-black duration-300 ${
					isOpened ? 'w-0' : 'w-1/2'
				}`}
			></div>
		</button>
	)
}

export default HamburgerIcon
