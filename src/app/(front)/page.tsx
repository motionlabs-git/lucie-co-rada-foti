'use client'

import React, { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'
import Gallery from './sections/gallery/Gallery'
import About from './sections/about/About'
import Pricelist from './sections/pricelist/Pricelist'
import ContactForm from './sections/contactForm/ContactForm'
import Navigation from '@/components/front/Navigation/Navigation'
import Footer from '@/components/front/Footer/Footer'
import Mouse from '@/components/front/Mouse/Mouse'
import References from './sections/references/References'

function HomePage() {
	const path = usePathname()
	const lenis = useRef<null | Lenis>(null)

	const [mouse, setMouse] = useState<{ type: string; hovering: boolean }>({
		type: 'DEFAULT',
		hovering: false,
	})

	const handleSetMouse = (type: string, hovering: boolean) =>
		setMouse({ type, hovering })

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
			<Navigation lenis={lenis} />

			<main className='flex flex-col items-center'>
				{/* <Hero></Hero> */}

				<Gallery />

				<About />

				<Pricelist
					onMouseEnter={() => handleSetMouse('DEFAULT', true)}
					onMouseLeave={() => handleSetMouse('DEFAULT', false)}
				/>

				<References />

				<ContactForm />
			</main>

			<Footer />

			<Mouse mouse={mouse} />
		</>
	)
}

export default HomePage
