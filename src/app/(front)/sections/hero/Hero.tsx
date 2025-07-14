import React from 'react'
import Image from 'next/image'
import HeroImage from '@/../public/images/Hero.jpg'

function Hero() {
    return (
        <section id='section1' className='section h-screen'>
            <Image src={HeroImage} alt={'Hero Image'} width={1024} height={860} className='h-full w-full object-cover'></Image>

        </section>
    )
}

export default Hero