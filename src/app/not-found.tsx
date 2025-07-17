import localFont from 'next/font/local'
import './globals.css'

const satoshiRegular = localFont({
	src: '../assets/fonts/Satoshi-Regular.woff2',
	variable: '--font-satoshi-regular',
})

export default function AdminNotFoundPage() {
	return (
		<html lang='cs'>
			<body className={`antialiased ${satoshiRegular.className}`}>
				Not Found
			</body>
		</html>
	)
}
