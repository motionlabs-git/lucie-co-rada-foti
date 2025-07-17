'use client'

import { useEffect } from 'react'
import { FiSun } from 'react-icons/fi'

const ThemeButton = () => {
	const handleToggleTheme = () => {
		const currentTheme = localStorage.theme || 'light'
		const newTheme = currentTheme === 'dark' ? 'light' : 'dark'

		localStorage.theme = newTheme
		document.documentElement.classList.toggle('dark', newTheme === 'dark')
	}

	useEffect(() => {
		if (!('theme' in localStorage)) {
			// const prefersDark = window.matchMedia(
			// 	'(prefers-color-scheme: dark)'
			// ).matches
			const prefersDark = true

			localStorage.theme = prefersDark ? 'dark' : 'light'
			document.documentElement.classList.toggle('dark', prefersDark)
		} else {
			document.documentElement.classList.toggle(
				'dark',
				localStorage.theme === 'dark'
			)
		}
	}, [])

	return (
		<button type='button' onClick={handleToggleTheme}>
			<FiSun className='text-md' />
		</button>
	)
}

export default ThemeButton
