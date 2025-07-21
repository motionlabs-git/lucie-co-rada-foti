import React from 'react'
import Image from 'next/image'

interface Props {
    title: string,
    price: number
}

const PricelistSlide = ({ title, price }: Props) => {
    return (
        <div className="embla__slide flex items-center gap-10">
            <div className='flex-3 h-full'>
                <h2 className='text-4xl text-orange font-promenadeItalic font-bold'>{title}</h2>
                <p className='font-promenadeItalic'>{price}</p>
            </div>
            <Image
                src={'https://instagram.fbrq1-1.fna.fbcdn.net/v/t51.29350-15/462306540_861536132788406_235184119758014915_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE0NDB4OTU3LnNkci5mMjkzNTAuZGVmYXVsdF9pbWFnZSJ9&_nc_ht=instagram.fbrq1-1.fna.fbcdn.net&_nc_cat=102&_nc_oc=Q6cZ2QGQwuYP5spzLgj1bc7__saMokNdXZA8m6KYJeeJGMS9hplXKs7BDShZW8BAw0YTr5k&_nc_ohc=H6EqOCB1mZgQ7kNvwFSeF-8&_nc_gid=1mYrSEoPuQvRpJo02NotFw&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQ3NDUwMDIwMjE1NjIxNDQxNg%3D%3D.3-ccb7-5&oh=00_AfQKNzqkAevWnh5NzWhiGupytVtmGaCvQ7npeaFVURMzew&oe=687D9678&_nc_sid=7a9f4b'}
                width={800}
                height={800}
                alt={'Slide'}
                className='w-full flex-5 rounded-2xl select-none'
            ></Image>
        </div>
    )
}

export default PricelistSlide