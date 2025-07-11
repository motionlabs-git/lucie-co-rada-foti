'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { usePathname } from 'next/navigation'
import Navigation from '@/components/front/Navigation'

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
			<Navigation lenis={lenis}></Navigation>

			<main>{children}</main>
		</>
	)
}
