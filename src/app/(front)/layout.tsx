'use client'

import { usePathname } from 'next/navigation'
import { Bellefair, Merriweather, Playfair_Display, Jost } from 'next/font/google'
import localFont from 'next/font/local'
import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import Navigation from '@/components/front/Navigation/Navigation'
import './front.css'
import Footer from '@/components/front/Footer/Footer'

const bellefair = Playfair_Display({
	weight: ['400'],
	subsets: ['latin'],
	variable: '--font-bellefair'
})

const satoshiRegular = localFont({
	src: '../../assets/fonts/Satoshi-Regular.woff2',
	variable: '--font-satoshi-regular',
})

const satoshiBold = localFont({
	src: '../../assets/fonts/Satoshi-Bold.woff2',
	variable: '--font-satoshi-bold',
})




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
						${bellefair.variable}
						${satoshiRegular.variable}
						${satoshiBold.variable}
                `}
				>
					<Navigation lenis={lenis}></Navigation>

					{children}

					<Footer></Footer>
				</body>
			</html>
		</>
	)
}
