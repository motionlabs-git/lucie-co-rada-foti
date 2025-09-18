'use client'
import React, { useEffect, useState } from 'react'
import Script from 'next/script'

const CookieBar = () => {
	const [isAgreed, setIsAgreed] = useState(false)

	useEffect(() => {
		const agreeCookies = localStorage.getItem('cookies')

		if (agreeCookies === 'agreed') {
			setIsAgreed(true)
		}

		if (agreeCookies === null) {
			setIsAgreed(false)
		}
	}, [])

	const agreeCookies = () => {
		localStorage.setItem('cookies', 'agreed')
		setIsAgreed(true)
	}

	const disagreeCookies = () => {
		localStorage.setItem('cookies', 'disagreed')
		setIsAgreed(true)
	}

	return (
		<>
			{isAgreed && (
				<>
					<Script
						src='https://www.googletagmanager.com/gtag/js?id=G-GQEMCBBP2T'
						strategy='afterInteractive'
					/>
					<Script id='google-analytics' strategy='afterInteractive'>
						{`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-GQEMCBBP2T');
                        `}
					</Script>
				</>
			)}

			<aside
				className={`${
					!isAgreed ? 'showCookieBar' : 'hideCookieBar hidden'
				} w-full sm:max-w-96 fixed right-0 bottom-0 pr-4 pl-4 sm:pl-0 pb-4 z-40`}
			>
				<div className='relative w-full bg-white border border-black/30 shadow-md p-4 rounded-2xl '>
					<div className='absolute w-full h-full top-0 left-0 bg-white rounded-2xl blur-lg'></div>

					<div className='relative'>
						<h4 className='font-bellefair text-lg'>
							Nastavení cookies
						</h4>
						<p className='text-black text-sm mt-2'>
							Tyto webové stránky používají soubory cookies pro
							analýzu návštěvnosti webových stránek a zjištění
							zdroje návštěvnosti.
						</p>

						<div className='mt-4 flex gap-2'>
							<button
								onClick={disagreeCookies}
								className=' border border-black rounded-lg px-4 py-2'
							>
								Nesouhlasím
							</button>
							<button
								onClick={agreeCookies}
								className='bg-orange text-white font-satoshiBold rounded-lg border border-black px-4 py-2 '
							>
								Souhlasím
							</button>
						</div>
					</div>
				</div>
			</aside>
		</>
	)
}

export default CookieBar
