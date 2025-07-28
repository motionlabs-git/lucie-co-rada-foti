'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import ImageModal from '@/components/front/Gallery/ImageModal';
import Logo from '../../../../../public/images/Logo';




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
    }
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<null | number>(null)


    useEffect(() => {
        gsap.to('.galleryColumn', {
            scrollTrigger: {
                trigger: '#gallery',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 0.1
            },
            translateY: 0
        })

        gsap.to('#heroModal', {
            scrollTrigger: {
                trigger: '#gallery',
                start: 'top top',
                end: '5% top',
                scrub: 1
            },
            opacity: 0,
            scale: 0.8
        })

    }, [])


    const closeImage = () => {
        gsap.to('#imageModal', {
            opacity: 0,
            pointerEvents: 'none',
            onComplete: () => {
                setSelectedImage(null)
            }
        })
    }




    return (

        <div id='gallery' className="relative w-full h-[300vh]">

            {
                selectedImage &&
                <ImageModal
                    img={imgData[selectedImage].src}
                    title={imgData[selectedImage].title}
                    nextImage={() => setSelectedImage((prev) => prev === imgData.length - 1 ? 0 : (prev !== null ? prev + 1 : null))}
                    prevImage={() => setSelectedImage((prev) => prev === 0 ? imgData.length - 1 : prev && prev - 1)}
                    handleCloseImage={closeImage}></ImageModal>
            }


            <div className='sticky top-0 h-screen overflow-y-hidden px-4'>

                <div id='heroModal' className='w-full h-full top-0 left-0 absolute flex justify-center items-center'>
                    <div className='flex items-center'>
                        <Logo id={'logo'} className='w-80'></Logo>
                        <h1 className='leading-tight whitespace-nowrap'><strong>Lucie</strong><em>"co ráda fotí"</em></h1>
                    </div>
                </div>



                <div className='w-full flex gap-4'>
                    <div className='h-screen w-full items-end flex flex-1'>
                        <div className='h-fit w-full flex flex-col gap-4 galleryColumn translate-y-[90%]'>
                            {imgData.map((img, index) => (
                                <div
                                    onClick={() => {
                                        setSelectedImage(index)
                                    }}
                                    key={index}
                                    className="group relative galleryImage overflow-hidden rounded-xl cursor-pointer w-full h-auto"
                                >

                                    <Image
                                        key={index}
                                        width={800}
                                        height={800}
                                        className="w-full group-hover:scale-105 duration-300"
                                        src={img.src}
                                        alt={img.title}
                                    />


                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='h-screen items-end flex flex-1'>
                        <div className='h-fit w-full flex flex-col gap-4 galleryColumn translate-y-[-30%]'>
                            {imgData.map((img, index) => (
                                <div
                                    onClick={() => {
                                        setSelectedImage(index)
                                    }}
                                    key={index}
                                    className="group relative galleryImage overflow-hidden rounded-xl cursor-pointer w-full h-auto"
                                >

                                    <Image
                                        key={index}
                                        width={800}
                                        height={800}
                                        className="w-full group-hover:scale-105 duration-300"
                                        src={img.src}
                                        alt={img.title}
                                    />


                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='h-screen items-end flex flex-1'>
                        <div className='h-fit w-full flex flex-col gap-4 galleryColumn translate-y-[90%]'>
                            {imgData.map((img, index) => (
                                <div
                                    onClick={() => {
                                        setSelectedImage(index)
                                    }}
                                    key={index}
                                    className="group relative galleryImage overflow-hidden rounded-xl cursor-pointer w-full h-auto"
                                >

                                    <Image
                                        key={index}
                                        width={800}
                                        height={800}
                                        className="w-full  group-hover:scale-105 duration-300"
                                        src={img.src}
                                        alt={img.title}
                                    />


                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Gallery