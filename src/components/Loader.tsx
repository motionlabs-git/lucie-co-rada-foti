'use client'
import Lenis from 'lenis'
import React, { RefObject, useEffect, useState } from 'react'
import gsap from 'gsap'

const Loader = ({ lenis }: { lenis: RefObject<Lenis | null> }) => {

    const [isActive, setIsActive] = useState(true)


    useEffect(() => {

        setTimeout(() => {

            function raf(time: number) {
                if (!lenis.current) return

                lenis.current.raf(time)
                requestAnimationFrame(raf)
            }
            requestAnimationFrame(raf)

            lenis.current?.scrollTo(0, {
                immediate: true, onComplete: () => {
                    gsap.to('#loader', {
                        opacity: 0,
                        duration: 0.5,

                        onComplete: () => {
                            setIsActive(false)
                        }
                    })
                }
            })
        }, 3000);

    }, [lenis])



    if (isActive)
        return (
            <section id="loader" className='fixed top-0 left-0 w-full h-screen bg-bone z-50 flex items-center justify-center'>
                <h1><strong>Loader</strong><em>Loader</em></h1>
            </section>
        )
}

export default Loader