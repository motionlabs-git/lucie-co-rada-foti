'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import ReferenceCard from '@/components/front/References/ReferenceCard'
import { ReferencesData } from '@/data/ReferencesData'

const References = () => {
	const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, [
		AutoScroll({
			speed: 1.2,
			startDelay: 0,
			direction: 'forward',
			stopOnInteraction: false,
			stopOnMouseEnter: true,
		}),
	])
	let counter = 0

	return (
		<section id='references' className='w-full relative'>
			<div>
				<h1 className='text-black invertText text-center'>
					<em>Reference</em>
				</h1>
			</div>

			<div className='embla w-full relative py-10' ref={emblaRef}>
				<div className='embla__container_references items-center px-8'>
					{ReferencesData.map((slide, i) => {
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
								avatar={slide.avatarImage}
								counter={counter}
							/>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default References
