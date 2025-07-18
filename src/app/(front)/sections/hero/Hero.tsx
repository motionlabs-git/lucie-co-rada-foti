'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import HeroImage from '@/../public/images/Hero.jpg'
import Marquee from '@/components/front/Marquee/Marquee'
import Logo from '../../../../../public/images/Logo'
import gsap from 'gsap'
import DrawSVGPlugin from 'gsap/DrawSVGPlugin'



function Hero() {

    useEffect(() => {

        gsap.registerPlugin(DrawSVGPlugin)

        gsap.from('.HeroLogoPath', {
            drawSVG: 0,
            stagger: 0.3,
            duration: 1.5,
            ease: 'power1.inOut'
        })

    }, [])



    return (
        <section className='relative h-screen w-full'>


            <div className='absolute top-0 w-full h-full'>
                <div
                    className='absolute w-full h-full bg-black/20'
                    style={{ background: 'radial-gradient(circle,transparent 0%, rgba(0, 0, 0, 0.8) 100%)' }}
                ></div>
                <Image src={HeroImage} alt={'Hero Image'} width={1024} height={860} className='select-none pointer-events-none h-full w-full object-cover'></Image>

            </div>

            <div className='relative h-full flex flex-col items-center justify-between pt-4 pb-24'>

                <Logo w={200} h={200} id='HeroLogo' pathClass='HeroLogoPath'></Logo>

                {/* <Image src={Logo} alt={'Logo Lucie co ráda fotí'} className='w-60' /> */}



                <Marquee
                    duration='20s'
                    sets={4}
                    direction='left'
                    className='gap-2 sm:gap-4 pr-2 sm:pr-4'
                >
                    <h2 className='text-[6rem] font-bellefair italic'>Lucie co ráda fotí. Vaše fotografka.</h2>
                </Marquee>
            </div>
        </section>
    )
}

export default Hero