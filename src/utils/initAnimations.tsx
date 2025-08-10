import gsap from 'gsap'

const initAnimations = () => {
	const blurryItem = document.getElementsByClassName('blurryItem')
	const blurryItemsArray = Array.from(blurryItem)

	blurryItemsArray.forEach((item) => {
		gsap.to(item, {
			filter: 'blur(0px)',
			duration: 0.2,
			paused: true,
			scrollTrigger: {
				trigger: item,
				start: 'top center',
				end: 'bottom center',
				scrub: 0.5,
			},
		})
	})
}

export default initAnimations
