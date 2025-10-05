import localFont from 'next/font/local'

const satoshiRegular = localFont({
	src: '../../../assets/fonts/Satoshi-Regular.woff2',
	variable: '--font-satoshi-regular',
})
const satosthiBold = localFont({
	src: '../../../assets/fonts/Satoshi-Bold.woff2',
	variable: '--font-satoshi-bold',
})

export default function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='cs'>
			<body
				className={`antialiased w-screen h-screen overflow-x-hidden bg-stone-950 text-stone-300
                    ${satoshiRegular.className}
					${satosthiBold.variable}
                `}
			>
				{children}
			</body>
		</html>
	)
}
