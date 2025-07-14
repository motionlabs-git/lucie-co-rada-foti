import './global.css'
import localFont from 'next/font/local'

const satoshiRegular = localFont({
	src: '../assets/fonts/Satoshi-Regular.woff2',
	variable: '--font-satoshi-regular',
})

const satoshiBold = localFont({
	src: '../assets/fonts/Satoshi-Bold.woff2',
	variable: '--font-satoshi-bold',
})


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='cs'>
			<body
				className={`antialiased
					${satoshiBold.variable}
                    ${satoshiRegular.className}
                `}
			>
				{children}
			</body>
		</html>
	)
}
