import './global.css'
import localFont from 'next/font/local'

const satoshiRegular = localFont({
	src: '../assets/fonts/Satoshi-Regular.woff2',
	variable: '--font-satoshi-regular',
})
// const emberly_regular = localFont({

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='cs'>
			<body
				className={`antialiased
                    ${satoshiRegular.variable}
                `}
			>
				{children}
			</body>
		</html>
	)
}
