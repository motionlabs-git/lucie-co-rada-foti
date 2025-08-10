import React, { useEffect, useRef } from 'react'
import ChevronIcon from '@/icons/Chevron'

interface IProps {
	mouse: {
		type: string
		hovering: boolean
	}
}

const lerp = (x: number, y: number, a: number) => {
	return x * (1 - a) + y * a
}

const Mouse: React.FC<IProps> = ({ mouse }) => {
	const cursor = useRef<null | HTMLDivElement>(null)
	const pos = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
	const delayerPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 })

	const manageMouseMove = (e: MouseEvent) => {
		pos.current = {
			x: e.clientX - cursor.current!.offsetWidth / 2,
			y: e.clientY - cursor.current!.offsetHeight / 2,
		}
	}

	const moveMouse = (x1: number, y1: number) => {
		cursor.current!.style.top = `${y1}px`
		cursor.current!.style.left = `${x1}px`
	}

	const animate = () => {
		const { x: x1, y: y1 } = delayerPos.current

		delayerPos.current = {
			x: lerp(x1, pos.current.x, 0.1),
			y: lerp(y1, pos.current.y, 0.1),
		}
		moveMouse(delayerPos.current.x, delayerPos.current.y)

		requestAnimationFrame(animate)
	}

	useEffect(() => {
		animate()

		window.addEventListener('mousemove', manageMouseMove)

		return () => {
			window.removeEventListener('mousemove', manageMouseMove)
		}
	}, [])

	return (
		<div className='fixed inset-0 z-50 pointer-events-none'>
			<div
				ref={cursor}
				className={`absolute scale-0 ${
					mouse.hovering ? 'scale-100' : ''
				} w-32 h-auto flex justify-center items-center aspect-square bg-white border border-gray-400/10 shadow-lg backdrop-blur-xs rounded-full transition-transform duration-300`}
			>
				<ChevronIcon
					w={50}
					className={`${mouse.hovering ? 'rotate-0' : 'rotate-180'}`}
				></ChevronIcon>
			</div>
		</div>
	)
}

export default Mouse
