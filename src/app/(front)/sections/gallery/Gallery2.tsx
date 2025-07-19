'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

const Gallery2 = () => {


    useEffect(() => {




        gsap.to('#gallery', {
            scrollTrigger: {
                markers: true,
                start: 'top top',
                end: 'bottom bottom',
                trigger: '#gallery',
                toggleActions: 'play reverse play reverse'

            },
            backgroundColor: 'black',
            duration: 0.3
        })


    }, [])


    return (


        <div id='gallery' className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
            <div className="grid gap-4">
                <div className='overflow-hidden rounded-2xl'>
                    <Image width={800} height={800} className="h-auto max-w-full rounded-2xl opacity-50 hover:opacity-100 hover:scale-105 duration-300" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
                </div>
                <div className='overflow-hidden rounded-2xl'>
                    <Image width={800} height={800} className="h-auto max-w-full rounded-2xl opacity-50 hover:opacity-100 hover:scale-105 duration-300" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
                </div>
                <div className='overflow-hidden rounded-2xl'>
                    <Image width={800} height={800} className="h-auto max-w-full rounded-2xl opacity-50 hover:opacity-100 hover:scale-105 duration-300" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
                </div>
            </div>
            <div className="grid gap-4">
                <div className='overflow-hidden rounded-2xl'>
                    <Image width={800} height={800} className="h-auto max-w-full rounded-2xl opacity-50 hover:opacity-100 hover:scale-105 duration-300" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                </div>
                <div className='overflow-hidden rounded-2xl'>
                    <Image width={800} height={800} className="h-auto max-w-full rounded-2xl opacity-50 hover:opacity-100 hover:scale-105 duration-300" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
                </div>
                <div className='overflow-hidden rounded-2xl'>
                    <Image width={800} height={800} className="h-auto max-w-full rounded-2xl opacity-50 hover:opacity-100 hover:scale-105 duration-300" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
                </div>
            </div>
            <div className="grid gap-4">
                <div className='overflow-hidden rounded-2xl'>
                    <Image width={800} height={800} className="h-auto max-w-full rounded-2xl opacity-50 hover:opacity-100 hover:scale-105 duration-300" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
                </div>
                <div className='overflow-hidden rounded-2xl'>
                    <Image width={800} height={800} className="h-auto max-w-full rounded-2xl opacity-50 hover:opacity-100 hover:scale-105 duration-300" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
                </div>
                <div className='overflow-hidden rounded-2xl'>
                    <Image width={800} height={800} className="h-auto max-w-full rounded-2xl opacity-50 hover:opacity-100 hover:scale-105 duration-300" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
                </div>
            </div>
            <div className="grid gap-4">
                <div className='overflow-hidden rounded-2xl'>
                    <Image width={800} height={800} className="h-auto max-w-full rounded-2xl opacity-50 hover:opacity-100 hover:scale-105 duration-300" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
                </div>
                <div className='overflow-hidden rounded-2xl'>
                    <Image width={800} height={800} className="h-auto max-w-full rounded-2xl opacity-50 hover:opacity-100 hover:scale-105 duration-300" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
                </div>
                <div className='overflow-hidden rounded-2xl'>
                    <Image width={800} height={800} className="h-auto max-w-full rounded-2xl opacity-50 hover:opacity-100 hover:scale-105 duration-300" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
                </div>
            </div>
        </div>

    )
}

export default Gallery2