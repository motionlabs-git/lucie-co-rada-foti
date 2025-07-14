'use client'

import { usePathname } from 'next/navigation'
import localFont from 'next/font/local'
import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import Navigation from '@/components/front/Navigation'
import './front.css'

const satoshiRegular = localFont({
	src: '../../assets/fonts/Satoshi-Regular.woff2',
	variable: '--font-satoshi-regular',
})
// const emberly_regular = localFont({



export default function FrontLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const path = usePathname()
	const lenis = useRef<null | Lenis>(null)

	useEffect(() => {
		//Lenis
		lenis.current = new Lenis()
		if (!lenis.current) return

		function raf(time: number) {
			if (!lenis.current) return

			lenis.current.raf(time)
			requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf)


	}, [path])

	return (
		<>
			<html lang='cs'>
				<body
					className={`antialiased
                    ${satoshiRegular.variable}
                `}
				>
					<Navigation lenis={lenis}></Navigation>

					<main>{children}</main>
				</body>
			</html>
		</>
	)
}
