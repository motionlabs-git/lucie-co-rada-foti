'use client'
import ChevronIcon from '@/icons/Chevron'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

const CustomCursor = () => {
    const cursor1 = useRef<null | HTMLDivElement>(null)
    const cursor1Position = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
    const delayedCursor1 = useRef<{ x: number; y: number }>({ x: 0, y: 0 })



    const lerp = (x: number, y: number, a: number) => {
        return x * (1 - a) + y * a
    }

    const manageMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const { pageX, pageY } = e


        cursor1Position.current = {
            x: pageX,
            y: pageY,
        }

    }

    const moveMouse = (x1: number, y1: number) => {
        gsap.set(cursor1.current, { x: x1, y: 100 })

    }

    const animate = () => {
        const { x: x1, y: y1 } = delayedCursor1.current


        delayedCursor1.current = {
            x: lerp(x1, cursor1Position.current.x, 0.095),
            y: lerp(y1, cursor1Position.current.y, 0.095),
        }



        moveMouse(
            delayedCursor1.current.x,
            delayedCursor1.current.y,
        )

        window.requestAnimationFrame(animate)
    }





    useEffect(() => {
        // animate()
        // window.addEventListener('mousemove', manageMouseMove)





        // return () => {
        //     window.removeEventListener('mousemove', manageMouseMove)


        // }
    }, [])

    return (
        <div
            ref={cursor1}
            id='chevronCursor'
            className={`z-50 flex w-32 h-auto aspect-square bg-white/80 border border-gray-400/10 shadow-lg backdrop-blur-xs justify-center items-center pointer-events-none absolute -translate-x-[50%] -translate-y-[50%] rounded-full`}
        >
            <ChevronIcon w={50} className=''></ChevronIcon>
        </div>
    )
}

export default CustomCursor
