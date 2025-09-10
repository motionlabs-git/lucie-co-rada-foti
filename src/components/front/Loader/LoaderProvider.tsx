'use client'
import React, { useEffect, useRef, useState } from 'react'
import MobileNavigation from '../Navigation/MobileNavigation'
import Navigation from '../Navigation/Navigation'
import About from '@/app/(front)/sections/About'
import Pricelist from '@/app/(front)/sections/Pricelist'
import ContactForm from '@/app/(front)/sections/ContactForm'
import References from '@/app/(front)/sections/References'
import Footer from '../Footer/Footer'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'
import Loader from './Loader'
import Gallery from '@/app/(front)/sections/Gallery'
import fetchImages from '@/utils/fetchImages'

const LoaderProvider = () => {
	const [isLoaded, setIsLoaded] = useState(false)
	const path = usePathname()
	const lenis = useRef<null | Lenis>(null)

	const imgData = fetchImages()

	useEffect(() => {
		//Lenis
		lenis.current = new Lenis()
	}, [path])

	return (
		<>
			<Loader isLoaded={isLoaded} lenis={lenis}></Loader>
			<MobileNavigation lenis={lenis} />
			<Navigation lenis={lenis} />

			<main className='flex flex-col items-center'>
				{imgData && <Gallery imgData={imgData} />}

				<About />

				<Pricelist />

				<ContactForm />

				<References />
			</main>

			<Footer />
		</>
	)
}

export default LoaderProvider
