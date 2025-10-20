import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const initAnimations = () => {
	if (typeof window !== 'undefined') {
		const ua = navigator.userAgent.toLowerCase()
		const isInstagram = ua.includes('instagram')

		if (isInstagram) {
			ScrollTrigger.normalizeScroll(true)
		}
	}

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
				willChange: 'filter',
			}),
		})
	})

	//Gallery

	const middleColumn = document.getElementById('galleryMiddleColumn')
	const middleColumnFill = document.getElementById('galleryMiddleColumnFill')

	if (!middleColumn || !middleColumnFill) return

	gsap.to('#galleryMiddleColumn', {
		scrollTrigger: {
			trigger: '#gallery',
			start: 'top top',
			end: 'bottom bottom',
			scrub: 1,
		},
		translateY:
			middleColumn?.clientHeight - middleColumnFill?.clientHeight - 8,
		willChange: 'transform',
	})

	const galleryTl = gsap.timeline().to('.galleryColumn', {
		translateY: 0,
		willChange: 'transform',
	})

	ScrollTrigger.create({
		trigger: '#gallery',
		start: 'top top',
		end: 'bottom bottom',
		scrub: 1,
		toggleActions: 'play none none reverse',

		animation: galleryTl,
	})

	gsap.to('#heroModal', {
		scrollTrigger: {
			trigger: '#gallery',
			start: 'top top',
			end: '5% top',
			scrub: 1,
		},
		willChange: 'transform, filter',
		opacity: 0,
		scale: 0.8,
	})
}

export default initAnimations
