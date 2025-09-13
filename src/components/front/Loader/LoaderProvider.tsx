'use client'
import React, { useEffect, useRef, useState } from 'react'
import MobileNavigation from '../Navigation/MobileNavigation'
import Navigation from '../Navigation/Navigation'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'
import Loader from './Loader'
import Footer from '../Footer/Footer'

const LoaderProvider = ({ children }: { children: React.JSX.Element }) => {
	const [isLoaded, setIsLoaded] = useState(false)

	const path = usePathname()
	const lenis = useRef<null | Lenis>(null)

	// const imgData = fetchImages()
	// const pricelistData = fetchPricelist()

	// console.log(pricelistData)

	useEffect(() => {
		//Lenis
		lenis.current = new Lenis()
	}, [path])

	return (
		<>
			<Loader isLoaded={isLoaded} lenis={lenis}></Loader>
			<MobileNavigation lenis={lenis} />
			<Navigation lenis={lenis} />
			{children}

			<Footer />
		</>
	)
}

export default LoaderProvider
