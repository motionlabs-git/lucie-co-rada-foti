import React, { JSX } from 'react'

const Marquee: React.FC<{
    children: JSX.Element | JSX.Element[] | string
    direction?: 'left' | 'right'
    duration?: string
    sets?: number
    containerClassName?: string
    className?: string
    id?: string
}> = ({
    children,
    direction = 'left',
    duration = '10s',
    sets = 2,
    containerClassName,
    className,
    id,
}) => (
        <span
            id={id && id}
            className={`w-full flex items-center ${direction === 'right' ? 'justify-end' : ''
                } text-nowrap overflow-hidden select-none ${containerClassName ?? ''}`}
        >
            {Array.from({ length: sets }, (_, i) => i).map((_, i) => (
                <span
                    key={i.toString()}
                    style={{
                        animation: `${direction === 'right' ? 'marqueeRight' : 'marqueeLeft'
                            } ${duration} linear infinite`,
                    }}
                    className={`flex flex-row items-center ${direction === 'right'
                            ? 'animate-marqueeRight'
                            : 'animate-marqueeLeft'
                        } ${className ?? ''}`}
                >
                    {children}
                </span>
            ))}
        </span>
    )

export default Marquee
