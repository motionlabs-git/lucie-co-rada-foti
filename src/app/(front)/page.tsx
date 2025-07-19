import React from 'react'
import Hero from './sections/hero/Hero'
import Gallery from './sections/gallery/Gallery'
import About from './sections/about/About'
import References from './sections/references/References'
import Pricelist from './sections/pricelist/Pricelist'
import ContactForm from './sections/contactForm/ContactForm'
import Gallery2 from './sections/gallery/Gallery2'

function HomePage() {
	return (
		<main className='flex flex-col items-center'>

			<Hero></Hero>

			<Gallery></Gallery>

			<Gallery2></Gallery2>

			<References></References>

			<Pricelist></Pricelist>

			<About></About>

			<ContactForm></ContactForm>
		</main>
	)
}

export default HomePage
