import Footer from '@/components/admin/Footer/Footer'
import Main from '@/components/admin/Main/Main'
import Navbar from '@/components/admin/Navbar/Navbar'
import Sidebar from '@/components/admin/Sidebar/Sidebar'

export default function PrivateAdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<div className='w-full h-full flex flex-col overflow-hidden'>
				<Navbar />

				<div className='flex-1 flex flex-row overflow-hidden'>
					<Sidebar />

					<Main>{children}</Main>
				</div>

				{/* <Footer /> */}
			</div>
		</>
	)
}
