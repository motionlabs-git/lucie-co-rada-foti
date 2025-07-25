'use client'
import InstagramIcon from '@/icons/Instagram'
import React, { useEffect } from 'react'
import SocialsIcon from './SocialsIcon'
import FacebookIcon from '@/icons/Facebook'
import gsap from 'gsap'
import Link from 'next/link'

const Footer = () => {
    const CurrentYear = new Date().getFullYear()

    useEffect(() => {

        gsap.to('#navWrapper', {
            scrollTrigger: {
                trigger: '#footer',
                start: '50% bottom',
                end: 'bottom bottom',
                toggleActions: 'play play play reverse'

            },
            opacity: 0,
            pointerEvents: 'none',
        })




    }, [])


    return (
        <footer id='footer' className='relative flex justify-center pt-24 pb-12 overflow-hidden'>
            <div id='footerBlur' className='absolute bottom-0 w-2/3 aspect-square h-auto rounded-full bg-orange/50 translate-y-[95%] blur-3xl pointer-events-none'>

            </div>

            <div className='max-w-[1360] w-full px-10 flex justify-between gap-20'>


                <div>
                    <ul className='list-none'>
                        <li>Lucie Pantálek Monsportová

                        </li>
                        <li>
                            <Link href={''}>
                                lucie@radafoti.cz
                            </Link>
                        </li>
                        <li>
                            <Link href={''}>
                                +420 111 111 111
                            </Link>
                        </li>
                    </ul>
                </div>



                <div className='flex items-end'>


                    <div className='flex items-center gap-2 mt-2'>

                        <SocialsIcon href={'https://www.instagram.com/lucie_co_rada_foti/'}>
                            <InstagramIcon className='text-white' size={20}></InstagramIcon>
                        </SocialsIcon>

                        <SocialsIcon href={'https://www.facebook.com/profile.php?id=100001377691625'}>
                            <FacebookIcon className='text-white' size={20}></FacebookIcon>
                        </SocialsIcon>



                    </div>

                </div>

                <div className='flex items-end'>
                    <ul className='list-none text-right'>
                        <li>
                            &#169; {CurrentYear === 2025 ? '2025' : `2025 - ${CurrentYear}`} Lucie ráda fotí
                        </li>
                        <li>
                            Created by {' '}
                            <Link target='_blank' href={'https://motionlabs.cz/'}>
                                MotionLabs.cz
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>


        </footer>
    )
}

export default Footer