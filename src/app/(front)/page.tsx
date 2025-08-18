'use client'
import React, { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'
import Gallery from './sections/gallery/Gallery'
import About from './sections/about/About'
import Pricelist from './sections/pricelist/Pricelist'
import ContactForm from './sections/contactForm/ContactForm'
import Navigation from '@/components/front/Navigation/Navigation'
import Footer from '@/components/front/Footer/Footer'
import initAnimations from '@/utils/initAnimations'
import Loader from '@/components/Loader'
import References from './sections/references/References'
import MobileNavigation from '@/components/front/Navigation/MobileNavigation'

function HomePage() {
	const path = usePathname()
	const lenis = useRef<null | Lenis>(null)

	useEffect(() => {
		//Lenis
		lenis.current = new Lenis()

		initAnimations()
	}, [path])

	return (
		<>
			<Loader lenis={lenis} />

			<MobileNavigation lenis={lenis} />
			<Navigation lenis={lenis} />

			<main className='flex flex-col items-center'>
				{/* <Hero></Hero> */}

				<Gallery />

				<About />

				<Pricelist />

				<ContactForm />

				<References></References>
			</main>

			<Footer />
		</>
	)
}

export default HomePage
