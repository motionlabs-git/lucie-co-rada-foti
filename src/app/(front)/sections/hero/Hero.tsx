'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import HeroImage from '@/../public/images/Hero.jpg'
import Marquee from '@/components/front/Marquee/Marquee'
import Logo from '../../../../../public/images/Logo'
import gsap from 'gsap'
import DrawSVGPlugin from 'gsap/DrawSVGPlugin'
import Link from 'next/link'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'



function Hero() {

    const animateLogo = () => {


        gsap.fromTo(
            '.HeroLogoPath',
            { drawSVG: '0%' },
            {
                drawSVG: '100%',
                stagger: 0.3,
                duration: 1.5,
                ease: 'power1.inOut',
                overwrite: 'auto',
            }
        )


    }

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger)
        animateLogo()

        gsap.to('#heroImage', {
            scrollTrigger: {
                trigger: "#uvod",
                start: "top top",
                end: "bottom top",
                scrub: 1,
            },
            scale: 1.3,
        })

    }, [])



    return (
        <section id='uvod' className='relative h-screen w-full'>

            <div className='absolute top-0 w-full h-full overflow-hidden'>

                <Image id='heroImage' src={HeroImage} alt={'Hero Image'} width={1024} height={860} className=' absolute select-none pointer-events-none h-full w-full object-cover'></Image>

                <div
                    className='absolute w-full h-full'
                    style={{ background: 'radial-gradient(circle,transparent 0%,rgba(68, 54, 39, 100%)' }}
                ></div>
            </div>


            <div className='relative h-full flex flex-col items-center justify-between pt-4 pb-24'>
                <Link className='self-center' href={'/'} onMouseEnter={() => animateLogo()}>
                    <Logo w={300} id='HeroLogo' className='text-white' pathClass='HeroLogoPath'></Logo>
                </Link>

                {/* <Image src={Logo} alt={'Logo Lucie co ráda fotí'} className='w-60' /> */}



                <Marquee
                    duration='20s'
                    sets={4}
                    direction='left'
                    className='gap-2 sm:gap-4 pr-2 sm:pr-4'
                >
                    <h2 className='text-[6rem] font-promenadeItalic text-orange'>Lucie co ráda fotí ~ Vaše fotografka ~ Focení svateb ~</h2>
                </Marquee>
            </div>
        </section>
    )
}

export default Hero