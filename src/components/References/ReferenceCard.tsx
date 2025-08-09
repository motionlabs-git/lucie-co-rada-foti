import React from 'react'
import Image from 'next/image'

const ReferenceCard = ({ title, description, image, counter }: { title: string, description: string, image: string, counter: number }) => {

    console.log(counter);
    // { flex: `${counter === 0 && '0 0 20%'} ${counter === 1 && '0 0 30%'}  ${counter === 2 && '0 0 10%'}` }

    return (
        <div
            className='relative flex items-center justify-center aspect-square group select-none'
            style={counter === 0 ? { flex: '0 0 20%' } :
                (counter === 1 ? {
                    flex: '0 0 22%'
                } :
                    { flex: '0 0 24%' })}
        >
            <div className='absolute w-full h-full top-0 left-0  group-hover:blur-md duration-300'>
                <Image src={image} alt={title} width={500} height={800} className='rounded-lg' />

            </div>

            <div className='relative'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ReferenceCard