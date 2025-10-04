'use client'

import InstagramIcon from '@/icons/Instagram'
import React, { useEffect } from 'react'
import SocialsIcon from './SocialsIcon'
import FacebookIcon from '@/icons/Facebook'
import gsap from 'gsap'
import Link from 'next/link'
import { ScrollTrigger } from 'gsap/all'
import { FiMail, FiPhone } from 'react-icons/fi'

const Footer = () => {
	const CurrentYear = new Date().getFullYear()

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		gsap.to('#navWrapper', {
			scrollTrigger: {
				trigger: '#footer',
				start: '50% bottom',
				end: 'bottom bottom',
				toggleActions: 'play play play reverse',
			},
			opacity: 0,
			filter: 'blur(8px)',
			pointerEvents: 'none',
		})

		ScrollTrigger.create({
			trigger: '#footer',
			start: '50% bottom',
			end: 'bottom bottom',
			toggleActions: 'play play play reverse',
			onEnter: () => {
				gsap.to(document.body, {
					backgroundColor: 'black',
				})
				gsap.to('.invertText', {
					filter: 'invert(1)',
					duration: 0.3,
				})
			},

			onLeaveBack: () => {
				gsap.to(document.body, {
					backgroundColor: 'var(--bone)',
				})
				gsap.to('.invertText', {
					filter: 'invert(0)',
					duration: 0.3,
				})
			},
		})
	}, [])

	return (
		<footer
			id='footer'
			className='relative w-full flex flex-col items-center overflow-hidden'
		>
			<div className='relative w-full flex justify-center pt-24 pb-12 overflow-hidden'>
				<div className='max-w-[1360] w-full px-4 md:px-10 flex flex-col sm:flex-row justify-between gap-10 md:gap-20'>
					<div className='invertText text-black order-2 sm:order-1'>
						<ul className='list-none'>
							<li>Lucie Pantálek Monsportová</li>

							<li className='mt-2 group w-fit'>
								<Link
									className='flex items-center gap-2'
									href='&#77;&#65;&#73;&#108;&#116;&#79;&#58;&#108;&#117;&#99;&#105;&#101;&#64;&#114;&#97;&#100;&#97;&#102;&#111;&#116;&#105;&#46;&#99;&#122;'
								>
									<span className='p-1 bg-invertedOrange group-hover:bg-invertedOrange/80 group-hover:scale-95 rounded-md text-black duration-200'>
										<FiMail size={16}></FiMail>
									</span>
									<span className='group-hover:text-invertedOrange! duration'>
										&#108;&#117;&#99;&#105;&#101;&#64;&#114;&#97;&#100;&#97;&#102;&#111;&#116;&#105;&#46;&#99;&#122;
									</span>
								</Link>
							</li>

							<li className='mt-2 group w-fit'>
								<Link
									className='hover:text-invertedOrange! flex items-center gap-2'
									href={'tel:720661661'}
								>
									<span className='p-1 bg-invertedOrange group-hover:bg-invertedOrange/80 group-hover:scale-95 rounded-md text-black duration-200'>
										<FiPhone size={16}></FiPhone>
									</span>

									<span className='group-hover:text-invertedOrange! duration'>
										720 661 661
									</span>
								</Link>
							</li>
						</ul>
					</div>

					<div className='flex justify-center sm:items-end order-3 sm:order-2 w-full sm:w-fit '>
						<div className='flex items-center gap-2 mt-2'>
							<SocialsIcon
								href={
									'https://www.instagram.com/lucie_co_rada_foti/'
								}
							>
								<InstagramIcon
									className='text-white'
									size={20}
								></InstagramIcon>
							</SocialsIcon>

							<SocialsIcon
								href={
									'https://www.facebook.com/profile.php?id=100001377691625'
								}
							>
								<FacebookIcon
									className='text-white'
									size={20}
								></FacebookIcon>
							</SocialsIcon>
						</div>
					</div>

					<div className='flex items-end order-2 sm:order-3'>
						<ul className='list-none sm:text-right text-black invertText'>
							<li>
								<Link
									className='hover:text-invertedOrange!'
									href={'/gdpr'}
									target='_blank'
								>
									GDPR
								</Link>
							</li>
							<li>
								&#169;{' '}
								{CurrentYear === 2025
									? '2025'
									: `2025 - ${CurrentYear}`}{' '}
								Lucie ráda fotí
							</li>
							<li>
								Created by{' '}
								<Link
									className='hover:text-invertedOrange!'
									target='_blank'
									href={'https://motionlabs.cz/'}
								>
									MotionLabs.cz
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div
				id='footerBlur'
				className='absolute bottom-0 w-2/3 aspect-square h-auto rounded-full bg-orange/50 translate-y-[95%] blur-3xl pointer-events-none select-none'
			></div>
		</footer>
	)
}

export default Footer
