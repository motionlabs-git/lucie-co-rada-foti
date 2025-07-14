import Lenis from 'lenis'
import React, { RefObject, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";


interface Props {
    lenis: RefObject<Lenis | null>
}

function Navigation({ lenis }: Props) {


    const scrollTo = (id: string) => {
        lenis.current?.scrollTo(id)
    }

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)


        Array.from(document.getElementsByClassName('section')).forEach((section, i) => {

            ScrollTrigger.create({
                trigger: `section${i}`,
                start: "top top",
                end: "bottom bottom",
                markers: true


            })

        })

    }, [])


    return (
        <header className='fixed top-4 w-full flex justify-center' onClick={() => scrollTo('#hero')}>
            <nav className='flex items-center gap-4 border-[1px] shadow-sm border-black/30 rounded-lg p-2 backdrop-blur-sm bg-white/10'>

                <div id='navLink1' className='navLink px-4 py-3 border-2 border-emerald-600 rounded-lg font-satoshiBold backdrop-blur-sm'>

                    Navigation

                </div>

                <div id='navLink2' className='px-4 py-3 border-2 border-emerald-600 rounded-lg font-satoshiBold'>

                    Navigation

                </div>
            </nav>
        </header>
    )
}

export default Navigation