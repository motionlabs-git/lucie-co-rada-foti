import GalleryImage from '@/components/front/Gallery/GalleryImage'
import React from 'react'

const Gallery = () => {
    return (
        <section className='container'>

            <h1 className='text-center'>Galerie</h1>

            <div className='grid grid-cols-3 gap-12 '>

                <GalleryImage></GalleryImage>

                <GalleryImage></GalleryImage>

                <GalleryImage></GalleryImage>

                <GalleryImage></GalleryImage>

                <GalleryImage></GalleryImage>

                <GalleryImage></GalleryImage>

            </div>

        </section>
    )
}

export default Gallery