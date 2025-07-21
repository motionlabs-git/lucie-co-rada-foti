'use client'
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import PricelistSlide from '@/components/front/Pricelist/PricelistSlide'
import { DotButton, useDotButton } from '@/components/front/Pricelist/EmblaDotsButton'
import CustomCursor from '@/components/front/CustomCursor'
import gsap from 'gsap'


const fakeData = [{ title: 'Rychle a bezbolestně', price: 1000 }, { title: 'Mám rád kompromis', price: 2000 }, { title: 'Před foťákem jako doma', price: 3000 }

]

const Pricelist = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    const { selectedIndex, onDotButtonClick } = useDotButton(emblaApi);

    const cursorTl = gsap.timeline({
        defaults: {
            duration: 0.2
        }, paused: true
    })


    useEffect(() => {
        const cursor = document.getElementById('chevronCursor')

        cursorTl.set(cursor, {
            display: 'flex',
        }).to(cursor, {
            scale: 1,
            duration: 0.1
        })
    }, [cursorTl])




    const showCustomCursor = () => {
        cursorTl.play()
    }

    const hideCursor = () => {
        cursorTl.reverse()
    }

    const moveCustomCursor = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();

        if (e.clientX - rect.left < rect.width / 2) {


        } else {
            console.log('right');

        }

    }





    return (
        <section className='container relative'>

            <CustomCursor ></CustomCursor>


            <div className="embla w-full relative" onMouseEnter={showCustomCursor} onMouseLeave={hideCursor} onMouseMove={(e) => moveCustomCursor(e)} ref={emblaRef}>

                <div className="embla__container pointer-events-none">

                    {fakeData.map((slide, i) =>
                        <PricelistSlide title={slide.title} price={slide.price} key={i}></PricelistSlide>
                    )}
                </div>

                {/* <div className='absolute top-0 left-0 w-full h-full flex'>
                    <button className='flex-1 h-full bg-green-400/50'>

                    </button>
                    <button className='flex-1 h-full bg-blue-400/50'>

                    </button>
                </div> */}
            </div>

            <div className="mt-10 flex justify-center items-center gap-1">
                {fakeData.map((_, index) => (
                    <div key={index} className='w-5 aspect-square h-auto flex justify-center items-center'>

                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={`aspect-square rounded-full duration-200 ${index === selectedIndex ? ' bg-orange w-4' : 'bg-brown w-3'
                                }`}
                        />

                    </div>
                ))}
            </div>

        </section>


        // <section className='container flex gap-10'>

        //     <div className='flex-2 flex flex-col gap-2'>

        //         <h2>Ceník</h2>

        //         {fakeData.map((item, index) =>
        //             <button onClick={() => setSelected(index)} key={index} className={`${selected === index ? 'bg-gray-100' : 'bg-gray-50'} w-full flex justify-between items-center hover:bg-gray-100 bg-gray-50 border-black/20 border-2 rounded-2xl shadow-md p-4 duration-300`}>
        //                 <span className='font-satoshiBold text-xl'>

        //                     {item.title}
        //                 </span>
        //                 <span className='font-satoshiBold text-xl'>
        //                     {selected === index ? '-' : '+'}
        //                 </span>
        //             </button>
        //         )}

        //     </div>



        //     <PricelistCard title={fakeData[selected].title} ></PricelistCard>


        // </section>
    )
}

export default Pricelist