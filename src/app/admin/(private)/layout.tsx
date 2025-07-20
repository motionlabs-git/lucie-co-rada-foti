import localFont from 'next/font/local'
import Main from '@/components/admin/Main/Main'
import Navbar from '@/components/admin/Navbar/Navbar'
import Sidebar from '@/components/admin/Sidebar/Sidebar'

const satoshiRegular = localFont({
	src: '../../../assets/fonts/Satoshi-Regular.woff2',
	variable: '--font-satoshi-regular',
})

export default function PrivateAdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='cs'>
			<body
				className={`antialiased w-screen h-screen overflow-hidden flex flex-col bg-stone-300 dark:bg-stone-950 text-stone-700 dark:text-stone-300
                    ${satoshiRegular.className}
                `}
			>
				<Navbar />

				<div className='flex-1 flex flex-row overflow-hidden'>
					<Sidebar />

					<Main>{children}</Main>
				</div>
			</body>
		</html>
	)
}
