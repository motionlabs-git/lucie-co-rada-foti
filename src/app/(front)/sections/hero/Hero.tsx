import React from 'react'
import Image from 'next/image'
import HeroImage from '@/../public/images/Hero.jpg'
import Logo from '@/../public/images/LogoPreview.png'
import Marquee from '@/components/front/Marquee/Marquee'


function Hero() {
    return (
        <section className='relative h-screen w-full'>


            <div className='absolute top-0 w-full h-full'>
                <div
                    className='absolute w-full h-full bg-black/20'
                    style={{ background: 'radial-gradient(circle,transparent 0%, rgba(0, 0, 0, 0.8) 100%)' }}
                ></div>
                <Image src={HeroImage} alt={'Hero Image'} width={1024} height={860} className='select-none pointer-events-none h-full w-full object-cover'></Image>

            </div>

            <div className='relative h-full flex flex-col items-center justify-between pt-4 pb-24'>


                <Image src={Logo} alt={'Logo Lucie co ráda fotí'} className='w-60' />



                <Marquee
                    duration='20s'
                    sets={4}
                    direction='left'
                    className='gap-2 sm:gap-4 pr-2 sm:pr-4'
                >
                    <h2 className='text-[6rem] font-bellefair italic'>Lucie co ráda fotí. Vaše fotografka.</h2>
                </Marquee>
            </div>
        </section>
    )
}

export default Hero