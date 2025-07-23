
import Lenis from 'lenis'
import React, { RefObject, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HamburgerIcon from './HamburgerIcon';


interface Props {
    lenis: RefObject<Lenis | null>
}

function Navigation({ lenis }: Props) {


    const scrollTo = (id: string) => {


        lenis.current?.scrollTo(`#` + id)
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
    }, [navTl])







    const mouseOver = () => {
        navTl.play()


    }

    const mouseLeave = () => {

        navTl.reverse()
    }

    return (
        <header className='z-50 fixed bottom-4 w-full flex justify-center pointer-events-none'>
            <nav
                onMouseEnter={mouseOver}
                onMouseLeave={mouseLeave}
                id='navWrapper'
                className='flex pointer-events-auto items-center gap-2 border-[1px] shadow-md border-gray-500/30 rounded-lg p-2 backdrop-blur-md  bg-gradient-to-r from-gray-600/50 from-0% to-gray-500/20 to-100%'>

                <HamburgerIcon></HamburgerIcon>


                <div id='navLinks' className='w-0 overflow-hidden flex gap-4 items-center justify-center'>
                    <button onClick={() => scrollTo('gallery')} className='navLink opacity-0 text-white font-satoshiBold border border-white/20 rounded-xl px-4 py-3 hover:border-white duration-300 whitespace-nowrap'>Galerie</button>
                    <button onClick={() => scrollTo('gallery')} className='navLink opacity-0 text-white font-satoshiBold border border-white/20 rounded-xl px-4 py-3 hover:border-white duration-300 whitespace-nowrap'>Ceník</button>
                    <button onClick={() => scrollTo('gallery')} className='navLink opacity-0 text-white font-satoshiBold border border-white/20 rounded-xl px-4 py-3 hover:border-white duration-300 whitespace-nowrap'>O mně</button>
                </div>

                <button
                    id='navCta'
                    className=' font-satoshiBold border-white border rounded-xl py-3 px-6 bg-white'
                    onClick={() => scrollTo('contact')}
                >Kontakt</button>
            </nav>
        </header>
    )
}

export default Navigation