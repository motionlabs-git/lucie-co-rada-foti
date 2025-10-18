'use client'
import React, { useState } from 'react'
import MobileNavigation from '../Navigation/MobileNavigation'
import Navigation from '../Navigation/Navigation'

import Loader from './Loader'
import Footer from '../Footer/Footer'
import CookieBar from '../CookieBar'

const LoaderProvider = ({ children }: { children: React.JSX.Element }) => {
	const [isLoaded] = useState(false)

	return (
		<>
			<Loader isLoaded={isLoaded}></Loader>

			<CookieBar></CookieBar>
			<MobileNavigation />
			<Navigation />
			{children}

			<Footer />
		</>
	)
}

export default LoaderProvider
