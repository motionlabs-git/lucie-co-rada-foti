import React from 'react'
import Link from 'next/link'

const SocialsIcon = ({ children, href }: { children: React.JSX.Element, href: string }) => {
    return (
        <Link href={href} target='_blank' className='rounded-lg bg-orange p-1.5 scale-100 hover:scale-95 hover:bg-orange/80 duration-200 cursor-pointer'>
            {children}
        </Link>
    )
}

export default SocialsIcon