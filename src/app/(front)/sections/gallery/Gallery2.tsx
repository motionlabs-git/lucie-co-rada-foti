'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'


const imgData = [
    {
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
        title: 'Forest Path'
    },
    {
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg',
        title: 'Golden Dunes'
    },
    {
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg',
        title: 'Urban Skyline'
    },
    {
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg',
        title: 'Mountain Lake'
    },
    {
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg',
        title: 'Autumn Forest'
    },
    {
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
        title: 'Sunny Beach'
    },
    {
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg',
        title: 'Foggy Hills'
    },
    {
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg',
        title: 'City Reflections'
    },
    {
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg',
        title: 'Misty Morning'
    },
    {
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg',
        title: 'Desert Horizon'
    },
    {
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg',
        title: 'Seaside Cliff'
    },
    {
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg',
        title: 'Evening Glow'
    }, {
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
        title: 'Forest Path'
    },
    {
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg',
        title: 'Golden Dunes'
    },
    {
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg',
        title: 'Urban Skyline'
    },
    {
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg',
        title: 'Mountain Lake'
    },
    {
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg',
        title: 'Autumn Forest'
    },
    {
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
        title: 'Sunny Beach'
    },
    {
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg',
        title: 'Foggy Hills'
    },
    {
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg',
        title: 'City Reflections'
    },
    {
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg',
        title: 'Misty Morning'
    },
    {
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg',
        title: 'Desert Horizon'
    },
    {
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg',
        title: 'Seaside Cliff'
    },
    {
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg',
        title: 'Evening Glow'
    }
];

const Gallery2 = () => {


    useEffect(() => {


        gsap.to('#gallery', {
            scrollTrigger: {
                start: 'top top',
                end: 'bottom bottom',
                trigger: '#gallery',
                toggleActions: 'play reverse play reverse'

            },
            backgroundColor: 'black',
            duration: 0.3
        })


        gsap.to('.galleryImage', {
            scrollTrigger: {
                markers: true,
                start: 'top top',
                end: 'bottom bottom',
                trigger: '#gallery',
                scrub: 4
            },
            stagger: 0.01,
            translateY: 0

        })

        // gsap.to('.galleryImageShade', {
        //     scrollTrigger: {
        //         start: 'top top',
        //         end: 'bottom bottom',
        //         trigger: '#gallery',
        //         toggleActions: 'play reverse play reverse'
        //     },
        //     opacity: 0.5

        // })



    }, [])


    return (


        <div id='gallery' className="p-4 columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
            {imgData.map((img, index) => (
                <div key={index} className="group relative galleryImage translate-y-28 overflow-hidden rounded-2xl break-inside-avoid">

                    <Image
                        width={800}
                        height={800}
                        className="w-full h-auto hover:scale-105 duration-300"
                        src={img.src}
                        alt={img.title}
                    />

                    <div className='galleryImageShade absolute top-0 left-0 w-full h-full bg-black opacity-50 group-hover:opacity-0 duration-300'>
                        <p>nejaky text</p>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default Gallery2