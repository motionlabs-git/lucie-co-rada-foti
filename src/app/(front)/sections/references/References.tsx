import Marquee from '@/components/front/Marquee/Marquee'
import React from 'react'
import Image from 'next/image'

const References = () => {
    return (
        <section className=''>
            <Marquee
                sets={5}
                containerClassName='w-full gap-4'
            >
                <div
                    className='relative rounded-xl cursor-pointer group'
                >
                    <div
                        className="rounded-xl overflow-hidden w-full h-auto duration-300 group-hover:blur-xs"
                    >
                        <Image

                            width={800}
                            height={800}
                            className="w-full"
                            src={'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg'}
                            alt={'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg'}
                        />
                    </div>

                </div>
            </Marquee>
        </section>
    )
}

export default References