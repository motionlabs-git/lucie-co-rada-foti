import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const initAnimations = () => {
	const blurryItem = document.getElementsByClassName('blurryItem')
	const blurryItemsArray = Array.from(blurryItem)

	blurryItemsArray.forEach((item) => {
		ScrollTrigger.create({
			trigger: item,
			start: 'top 75%',
			end: 'bottom 75%',
			scrub: 0.5,
			toggleActions: 'play none none reverse',

			animation: gsap.to(item, {
				filter: 'blur(0px)',
				duration: 0.2,
			}),
		})
	})

	//Gallery
	gsap.to('.galleryColumn', {
		scrollTrigger: {
			trigger: '#gallery',
			start: 'top top',
			end: 'bottom bottom',
			scrub: 1,
		},
		translateY: 0,
	})

	const middleColumn = document.getElementById('galleryMiddleColumn')
	const middleColumnFill = document.getElementById('galleryMiddleColumnFill')

	if (!middleColumn || !middleColumnFill) return

	const mm = gsap.matchMedia()

	mm.add('(max-width: 767px)', () => {
		gsap.to('#galleryMiddleColumn', {
			scrollTrigger: {
				trigger: '#gallery',
				start: 'top top',
				end: 'bottom bottom',
				scrub: 1,
			},
			translateY:
				middleColumn?.clientHeight - middleColumnFill?.clientHeight - 8,
		})
	})
	mm.add('(min-width: 768px)', () => {
		gsap.to('#galleryMiddleColumn', {
			scrollTrigger: {
				trigger: '#gallery',
				start: 'top top',
				end: 'bottom bottom',
				scrub: 1,
			},
			translateY:
				middleColumn?.clientHeight - middleColumnFill?.clientHeight - 8,
		})
	})

	gsap.to('#heroModal', {
		scrollTrigger: {
			trigger: '#gallery',
			start: 'top top',
			end: '5% top',
			scrub: 1,
		},
		opacity: 0,
		scale: 0.8,
	})
}

export default initAnimations
