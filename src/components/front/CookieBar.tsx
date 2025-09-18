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
				} w-full sm:max-w-96 fixed left-0 bottom-0 pl-4 pb-4 z-10`}
			>
				<div className='w-full dark:bg-black/30 bg-black/10  dark:border-gray-800/50 border-gray-500/10 shadow-sm border-2 p-4 backdrop-blur-sm rounded-2xl '>
					<h4>Nastavení cookies</h4>
					<p className='text-black'>
						Tyto webové stránky používají soubory cookies pro
						analýzu návštěvnosti webových stránek a zjištění zdroje
						návštěvnosti.
					</p>

					<div className='mt-4 flex gap-2'>
						<button
							onClick={disagreeCookies}
							className=' border-2 dark:border-white border-black hover:bg-white/20 rounded-lg dark:text-white font-semibold px-4 py-2'
						>
							Nesouhlasím
						</button>
						<button
							onClick={agreeCookies}
							className='bg-white  rounded-lg dark:text-black font-semibold px-4 py-2 '
						>
							Souhlasím
						</button>
					</div>
				</div>
			</aside>
		</>
	)
}

export default CookieBar
