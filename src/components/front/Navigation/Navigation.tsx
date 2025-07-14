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
        <header className='z-50 fixed bottom-4 w-full flex justify-center' onClick={() => scrollTo('#hero')}>
            <nav className='flex items-center gap-4 border-[1px] shadow-xl border-black/30 rounded-lg p-2 backdrop-blur-xs bg-bone/20'>

                <HamburgerIcon></HamburgerIcon>


                {/* <div className='flex items-center'>

                    <div>
                        adsfljasf
                    </div>

                </div> */}

                <div className='px-4 py-3 border-2rounded-lg text-lg'>
                    Menu
                </div>
            </nav>
        </header>
    )
}

export default Navigation