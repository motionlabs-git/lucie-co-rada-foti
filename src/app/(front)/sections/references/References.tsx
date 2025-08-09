import React from 'react'
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import ReferenceCard from '@/components/References/ReferenceCard';

const fakeData = [{
    title: 'title1',
    description: 'alsdfjls asldjflasdjf asldjfl asdjlfjasd ',
    image: 'https://www.brides.com/thmb/LMyiMPxRFx82BLiHZC8lySJFnGo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/marriage-pose-photo-recirc-kyle-john-1-29-4f97523aa049471992292e8d6ddc41ee.jpg'
}, {
    title: 'title1',
    description: 'alsdfjls asldjflasdjf asldjfl asdjlfjasd ',
    image: 'https://www.brides.com/thmb/LMyiMPxRFx82BLiHZC8lySJFnGo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/marriage-pose-photo-recirc-kyle-john-1-29-4f97523aa049471992292e8d6ddc41ee.jpg'
}, {
    title: 'title1',
    description: 'alsdfjls asldjflasdjf asldjfl asdjlfjasd ',
    image: 'https://www.brides.com/thmb/LMyiMPxRFx82BLiHZC8lySJFnGo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/marriage-pose-photo-recirc-kyle-john-1-29-4f97523aa049471992292e8d6ddc41ee.jpg'
}, {
    title: 'title1',
    description: 'alsdfjls asldjflasdjf asldjfl asdjlfjasd ',
    image: 'https://www.brides.com/thmb/LMyiMPxRFx82BLiHZC8lySJFnGo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/marriage-pose-photo-recirc-kyle-john-1-29-4f97523aa049471992292e8d6ddc41ee.jpg'
}, {
    title: 'title1',
    description: 'alsdfjls asldjflasdjf asldjfl asdjlfjasd ',
    image: 'https://www.brides.com/thmb/LMyiMPxRFx82BLiHZC8lySJFnGo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/marriage-pose-photo-recirc-kyle-john-1-29-4f97523aa049471992292e8d6ddc41ee.jpg'
}, {
    title: 'title1',
    description: 'alsdfjls asldjflasdjf asldjfl asdjlfjasd ',
    image: 'https://www.brides.com/thmb/LMyiMPxRFx82BLiHZC8lySJFnGo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/marriage-pose-photo-recirc-kyle-john-1-29-4f97523aa049471992292e8d6ddc41ee.jpg'
}]


const References = () => {

    const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, [
        AutoScroll({
            speed: 1.2,
            startDelay: 0,
            direction: 'forward',
            stopOnInteraction: false,
            stopOnMouseEnter: false,
        }),
    ]);
    let counter = 0


    return (

        <section className='w-full relative pb-10'>
            <div
                className="embla w-full relative"
                ref={emblaRef}>

                <div className="embla__container_references items-center">

                    {fakeData.map((slide, i) => {


                        counter++

                        if (counter === 3) {
                            counter = 0
                        }

                        return (
                            <ReferenceCard
                                key={i}
                                title={slide.title}
                                description={slide.description}
                                image={slide.image}
                                counter={counter}
                            />
                        )
                    }


                    )}
                </div>

            </div>

        </section>
    )
}

export default References