'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import Marquee from '@/components/front/Marquee/Marquee';
import Chevron from '@/icons/Chevron';




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

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<null | number>(null)


    useEffect(() => {

        gsap.to(document.body, {
            scrollTrigger: {
                start: 'top top',
                end: 'bottom bottom',
                trigger: '#gallery',
                toggleActions: 'play reverse play reverse'

            },
            backgroundColor: '#443627',
            duration: 0.5
        })


        gsap.to('.galleryImage', {
            scrollTrigger: {
                markers: true,
                start: 'top top',
                end: 'bottom bottom',
                trigger: '#gallery',
                scrub: 2

            },
            duration: 0.3,
            stagger: 0.01,
            translateY: 0

        })

        gsap.to('.galleryImageShade', {
            scrollTrigger: {
                start: 'top top',
                end: 'bottom bottom',
                trigger: '#gallery',
                toggleActions: 'play reverse play reverse'
            },
            opacity: 1,
            duration: 0.3
        })



    }, [])

    const closeImage = () => {
        gsap.to('#imageModal', {
            opacity: 0,
            onComplete: () => {
                setSelectedImage(null)
            }
        })

    }


    return (

        <div id='gallery' className="p-4 columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
            {selectedImage !== null &&
                <div id='imageModal' className='fixed z-50 w-screen h-screen top-0 left-0 px-10 py-10 flex justify-center items-center bg-black/50 backdrop-blur-md'>
                    <button onClick={closeImage} className='absolute top-10 right-10 text-white font-6xl'>x</button>
                    <div className='flex items-center'>
                        <button className='w-14' onClick={() => setSelectedImage((prev) => prev && prev - 1)}>
                            <div className='pl-2 hover:pl-0 hover:pr-2 duration-200'>
                                <Chevron className='text-white rotate-180' w={40}></Chevron>
                            </div>
                        </button>
                        <Image
                            width={1200}
                            height={1200}
                            className="h-full w-auto object-cover rounded-2xl"
                            src={imgData[selectedImage].src}
                            alt={imgData[selectedImage].title}
                        />

                        <button className='w-14' onClick={() => setSelectedImage((prev) => prev && prev + 1)}>
                            <div className='pr-2 hover:pr-0 hover:pl-2 duration-200'>
                                <Chevron className='text-white' w={40}></Chevron>

                            </div>
                        </button>
                    </div>
                </div>}

            {imgData.map((img, index) => (
                <div onClick={() => setSelectedImage(index)} key={index} className="group relative galleryImage translate-y-28 overflow-hidden rounded-2xl break-inside-avoid cursor-pointer">

                    <Image
                        width={800}
                        height={800}
                        className="w-full h-auto hover:scale-105 duration-300"
                        src={img.src}
                        alt={img.title}
                    />

                    <div className='galleryImageShade absolute top-0 left-0 w-full h-full opacity-0'>
                        <div className='w-full h-full duration-300 bg-brown/30 group-hover:bg-brown/0 flex flex-col justify-end'>

                            <Marquee sets={4} className='gap-2 sm:gap-4 pr-2 sm:pr-4 opacity-0 group-hover:opacity-100 duration-300'>
                                <h3 className='font-promenadeItalic text-orange font-bold text-5xl leading-[1.5em] opacity-60' >Gallery image ~</h3>
                            </Marquee>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default Gallery