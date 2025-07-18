import Lenis from 'lenis'
import React, { RefObject, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HamburgerIcon from './HamburgerIcon';
import Link from 'next/link';


interface Props {
    lenis: RefObject<Lenis | null>
}

function Navigation({ lenis }: Props) {

    const scrollTo = (id: string) => {
        lenis.current?.scrollTo(id)
    }



    const navTl = gsap.timeline({ paused: true, defaults: { duration: 0.2 } });

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)


        navTl.to('.ring-1', {
            translateX: -8,
            translateY: -8
        }).to('.ring-2', {
            translateX: -8,
            translateY: -8
        }, '<').to('#navIconSVGBlur', {
            opacity: 1
        }, '<')
            // .to('#navMenuText', {
            //     opacity: 0,
            //     display: 'none'
            // })
            // .to('#navCta', {
            //     display: 'block',
            //     opacity: 1
            // }, '<')
            .to('#navWrapper', {
                gap: 2 + 'rem'
            })
            .to('#navLinks', {
                width: 300
            }, '<')
            .to('.navLink', {
                opacity: 1,
                stagger: 0.1
            }, '<')
    }, [])







    const mouseOver = () => {
        navTl.play()


    }

    const mouseLeave = () => {

        navTl.reverse()
    }

    return (
        <header className='z-50 fixed bottom-4 w-full flex justify-center' onClick={() => scrollTo('#hero')}>
            <nav
                onMouseEnter={mouseOver}
                onMouseLeave={mouseLeave}
                id='navWrapper'
                className='flex items-center gap-2 border-[1px] shadow-xl border-black/30 rounded-lg p-2 backdrop-blur-xs  bg-gradient-to-b from-slate-900/40 from-0% to-stone-700/40 to-100%'>

                <HamburgerIcon></HamburgerIcon>


                <div id='navLinks' className='w-0 overflow-hidden flex gap-4 items-center justify-center'>
                    <Link href={''} className='navLink opacity-0 text-white font-satoshiBold'>Galerie</Link>
                    <Link href={''} className='navLink opacity-0 text-white font-satoshiBold'>O mně</Link>
                    <Link href={''} className='navLink opacity-0 text-white font-satoshiBold'>Ceník</Link>
                </div>

                <button id='navCta' className=' font-satoshiBold border-white border rounded-xl py-3 px-4  bg-white'>Kontakt</button>

                {/* <div id='navMenuText' className='px-4 py-3 border-2rounded-lg text-lg font-satoshiBold text-white'>
                    Menu
                </div> */}
            </nav>
        </header>
    )
}

export default Navigation