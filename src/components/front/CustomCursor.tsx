'use client'
import ChevronIcon from '@/icons/Chevron'
import React from 'react'

const CustomCursor = ({ direction, cursorRef }: { direction: boolean, cursorRef: React.RefObject<HTMLDivElement | null> }) => {





    return (
        <div
            ref={cursorRef}
            id='chevronCursor'
            className={`z-50 scale-0 hidden w-32 h-auto aspect-square bg-white/80 border border-gray-400/10 shadow-lg backdrop-blur-xs justify-center items-center pointer-events-none absolute -translate-x-[50%] -translate-y-[50%] rounded-full`}
        >
            <ChevronIcon w={50} className={`${direction ? 'rotate-0' : 'rotate-180'}`}></ChevronIcon>
        </div>
    )
}

export default CustomCursor
