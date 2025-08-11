import * as React from 'react'

const Logo = ({
	w,
	h,
	className,
	id,
	pathClass,
}: {
	w?: number
	h?: number
	className?: string
	id: string
	pathClass?: string
}) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		data-name='Layer 2'
		viewBox='0 0 484.12 370.89'
		id={id && id}
		width={w}
		height={h}
		className={className}
	>
		<defs>
			<style>
				{
					'.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:5px}'
				}
			</style>
		</defs>
		<g id='Layer_2-2' data-name='Layer 2'>
			<path
				d='m183.17 344.56-143-4s-28-2-37-30c-3-42 5-190 5-190s-1-32 33-48c6-2 70-1 70-1s17-2 23-13-3-17-23-17-43 0-47 5-9 17 14 24c29 2 78-1 78-1s12 1 45-33 55-34 55-34h57.06s18.94-3 47.94 32c36 28 63 33 63 33s15 5 16 21c.88 14.11-7 20-18 19s-22-7-23-19 8-21 28-22 41 21 41 21 12 16 13 46 0 161.2 0 173.1c0 9.25-5.44 21.58-12.62 30.84-3.87 4.98-8.78 9.03-14.44 11.82-28 13.83-93.68 24.32-135.94 16.23'
				className={`cls-1 ${pathClass}`}
			/>
			<circle
				cx={284.17}
				cy={213.56}
				r={127.28}
				className={`cls-1 ${pathClass}`}
			/>
		</g>
	</svg>
)
export default Logo
