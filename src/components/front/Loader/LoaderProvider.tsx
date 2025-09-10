'use client'
import React, { useEffect, useRef } from 'react'
import MobileNavigation from '../Navigation/MobileNavigation'
import Navigation from '../Navigation/Navigation'
import About from '@/app/(front)/sections/About'
import Pricelist from '@/app/(front)/sections/Pricelist'
import ContactForm from '@/app/(front)/sections/ContactForm'
import References from '@/app/(front)/sections/References'
import Footer from '../Footer/Footer'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'
import initAnimations from '@/utils/initAnimations'
import Loader from './Loader'
import Gallery from '@/app/(front)/sections/Gallery'

const LoaderProvider = () => {
	const path = usePathname()
	const lenis = useRef<null | Lenis>(null)

	useEffect(() => {
		//Lenis
		lenis.current = new Lenis()

		initAnimations()
	}, [path])

	return (
		<>
			<Loader lenis={lenis}></Loader>
			<MobileNavigation lenis={lenis} />
			<Navigation lenis={lenis} />

			<main className='flex flex-col items-center'>
				<Gallery />

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
