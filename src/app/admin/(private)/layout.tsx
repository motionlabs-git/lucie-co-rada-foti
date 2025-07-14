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
			<div className='flex flex-col gap-4 p-4'>
				<Navbar />

				<div className='container flex-1 flex flex-col lg:flex-row lg:items-start gap-4'>
					<Sidebar />

					<Main>{children}</Main>
				</div>

				<Footer />
			</div>
		</>
	)
}
