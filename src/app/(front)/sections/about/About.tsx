import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <section className='container'>
            <Image
                src={'https://scontent.fsvg1-1.fna.fbcdn.net/v/t39.30808-6/380943477_6493124047410121_8106659734817583276_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=SlQRR_9Bhb0Q7kNvwH8xXQc&_nc_oc=AdnHEUQTEHBC6Dh9P5MWkJ3LcFzZ-YTh9kA-6g3monBEgOouSQb61AW2-cMF4ll0OkA&_nc_zt=23&_nc_ht=scontent.fsvg1-1.fna&_nc_gid=CMHeo3GepitEgHGnXQLUlg&oh=00_AfSX83mPeRlTnejAWFZPvkpdo3i2PCwVVev8RVkXEvoSYg&oe=6886E49B'}
                alt={'O lucce'}
                width={1000}
                height={500}
                className='w-full aspect-video object-cover rounded-2xl'
            >
            </Image>

            <div className='mt-12 flex gap-20'>

                <h1 className=' text-6xl '><em className='text-8xl text-orange'>Lucka,</em> <strong className='text-3xl indent-8 block text-brown text-nowrap'>(ta co ráda fotí)</strong></h1>

                <div className='flex gap-8'>

                    <p className='indent-4 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam officia, tempora quaerat cumque iste dignissimos adipisci assumenda debitis sint repellendus, consequatur voluptatem sequi vitae blanditiis. Autem ea esse nesciunt eaque.</p>

                    <p className='indent-4 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam officia, tempora quaerat cumque iste dignissimos adipisci assumenda debitis sint repellendus, consequatur voluptatem sequi vitae blanditiis. Autem ea esse nesciunt eaque.</p>

                </div>

                <div className='flex gap-8'>

                    <p className='indent-4 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam officia, tempora quaerat cumque iste dignissimos adipisci assumenda debitis sint repellendus, consequatur voluptatem sequi vitae blanditiis. Autem ea esse nesciunt eaque.</p>

                    <p className='indent-4 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam officia, tempora quaerat cumque iste dignissimos adipisci assumenda debitis sint repellendus, consequatur voluptatem sequi vitae blanditiis. Autem ea esse nesciunt eaque.</p>

                </div>


            </div>

        </section>
    )
}

export default About