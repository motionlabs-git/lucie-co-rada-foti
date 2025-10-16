'use client'
import React, { useEffect, useState } from 'react'
import Script from 'next/script'

const CookieBar = () => {
	const [isAgreed, setIsAgreed] = useState<null | boolean>()

	useEffect(() => {
		const cookies = localStorage.getItem('cookies')

		if (cookies === null) {
			setIsAgreed(cookies)
		}

		if (cookies === 'disagreed') {
			setIsAgreed(false)
		}

		if (cookies === 'agreed') {
			setIsAgreed(true)
		}
	}, [])

	const agreeCookies = () => {
		setIsAgreed(true)

		localStorage.setItem('cookies', 'agreed')
	}

	const disagreeCookies = () => {
		setIsAgreed(false)
		localStorage.setItem('cookies', 'disagreed')
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

			{typeof isAgreed !== 'boolean' && (
				<aside
					className={`${
						!isAgreed ? 'showCookieBar' : 'hideCookieBar hidden'
					} w-full sm:max-w-96 fixed right-0 bottom-0 pr-4 pl-4 sm:pl-0 pb-4 z-40`}
				>
					<div className='relative w-full bg-white/50 backdrop-blur-md border border-black/30 shadow-md p-4 rounded-2xl '>
						<div className='absolute w-full h-full top-0 left-0 bg-white/80 rounded-2xl blur-lg'></div>

						<div className='relative'>
							<h4 className='font-bellefair text-lg'>
								Nastavení cookies
							</h4>
							<p className='text-black text-sm mt-2'>
								Tyto webové stránky používají soubory cookies
								pro analýzu návštěvnosti webových stránek a
								zjištění zdroje návštěvnosti.
							</p>

							<div className='mt-4 flex gap-2'>
								<button
									type='button'
									aria-label='Disagree with cookies'
									onClick={disagreeCookies}
									className=' border hover:bg-black duration-200 hover:text-white border-black rounded-lg px-4 py-2'
								>
									Nesouhlasím
								</button>

								<button
									type='button'
									aria-label='Agree with cookies'
									onClick={agreeCookies}
									className='relative group text-white font-satoshiBold rounded-lg px-4 py-[calc(0.5rem + 1px)] '
								>
									<div className='absolute top-0 left-0 w-full h-full rounded-lg bg-black group-hover:bg-lightOrange group-hover:blur-xs duration-400 blur-none'></div>
									<p className='relative  text-white group-hover:text-black duration-400'>
										Souhlasím
									</p>
								</button>
							</div>
						</div>
					</div>
				</aside>
			)}
		</>
	)
}

export default CookieBar
