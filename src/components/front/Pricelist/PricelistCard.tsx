import React, { useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'



const PricelistCard = ({ title }: { title: string }) => {



    useEffect(() => {
        const initTl = gsap.timeline({ defaults: { duration: 0.3 } })

        initTl.set('#pricelistShade', { opacity: 0 })
            .set('.pricelistStagger', {
                opacity: 0
            })
            .to('#pricelistShade', {
                opacity: 1
            }).to('.pricelistStagger', {
                opacity: 1,
                stagger: 0.2
            })


    }, [title])

    return (
        <div className='w-full rounded-2xl overflow-hidden flex-5 group relative aspect-video'>
            <Image
                src={'https://scontent-arn2-1.cdninstagram.com/v/t51.29350-15/463418459_1051380232963647_6980794030542207146_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE0NDB4OTU3LnNkci5mMjkzNTAuZGVmYXVsdF9pbWFnZSJ9&_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=103&_nc_oc=Q6cZ2QFIVd0F2EkdhUYt5xAx_weUp8YvP67XFL3zsiLvy1CX3VUz6vszXD5xXphMgBPW2Zk&_nc_ohc=hkV8RnXBAVUQ7kNvwFPn9_Q&_nc_gid=zbvjd15uFyqp5WfixytT5A&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQ4MTAwMTI1MzU5MTg3Mjg3Ng%3D%3D.3-ccb7-5&oh=00_AfReqi-TP-HQHR-kBjhUrts0bGhXcohHFc9OGDIopqThHQ&oe=688050C8&_nc_sid=7a9f4b'}
                alt={'Price Image'}
                width={1000}
                height={1000}
                className='absolute w-full h-full object-cover group-hover:scale-105 duration-300'
            ></Image>
            <div
                id='pricelistShade'
                className='absolute flex flex-col justify-between w-full h-full bg-black/20 p-4 opacity-0'>

                <div>

                    <div className='pricelistStagger opacity-0 rounded-full bg-white w-fit px-4 py-2'>
                        <p className='font-satoshiBold text-lg'>🎀 {title}</p>
                    </div>


                    <ul className='pricelistStagger opacity-0 ml-4 mt-8 text-white font-satoshiBold list-inside list-disc'>

                        <li>15-30 min focení</li>
                        <li>6 výsledných upravených fotek</li>
                        <li>Nekonečno radosti z hezkých fotek</li>

                    </ul>

                </div>



                <button className='pricelistStagger opacity-0 bg-white w-fit self-end font-satoshiBold text-base rounded-xl py-2 px-4'>1000 Kč</button>
            </div>
        </div>
    )
}

export default PricelistCard