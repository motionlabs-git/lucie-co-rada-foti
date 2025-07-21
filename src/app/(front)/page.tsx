import React from 'react'
import Hero from './sections/hero/Hero'
import Gallery from './sections/gallery/Gallery'
import About from './sections/about/About'
import References from './sections/references/References'
import Pricelist from './sections/pricelist/Pricelist'
import ContactForm from './sections/contactForm/ContactForm'

function HomePage() {
	return (
		<main className='flex flex-col items-center overflow-hidden'>

			<Hero></Hero>

			<Gallery></Gallery>

			<References></References>

			<Pricelist></Pricelist>

			<About></About>

			<ContactForm></ContactForm>
		</main>
	)
}

export default HomePage
