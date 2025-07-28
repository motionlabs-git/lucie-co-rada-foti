import React from 'react'
import Gallery from './sections/gallery/Gallery'
import About from './sections/about/About'
import Pricelist from './sections/pricelist/Pricelist'
import ContactForm from './sections/contactForm/ContactForm'

function HomePage() {
	return (
		<main className='flex flex-col items-center'>

			{/* <Hero></Hero> */}

			<Gallery></Gallery>

			<About></About>

			<Pricelist></Pricelist>

			<ContactForm></ContactForm>
		</main>
	)
}

export default HomePage
