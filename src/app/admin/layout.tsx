import localFont from 'next/font/local'
import './admin.css'

const satoshiRegular = localFont({
	src: '../../assets/fonts/Satoshi-Regular.woff2',
	variable: '--font-satoshi-regular',
})

export default function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<html lang='cs'>
				<body
					className={`antialiased w-screen h-screen overflow-x-hidden bg-stone-300 text-stone-700 dark:bg-stone-950 dark:text-stone-300
                    ${satoshiRegular.className}
                `}
				>
					{children}
				</body>
			</html>
		</>
	)
}
