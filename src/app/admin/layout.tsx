import './admin.css'

export const metadata = {
	title: 'Lucie co ráda fotí | Administrace',
	robots: {
		index: false,
		follow: false,
	},
}
export default function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <>{children}</>
}
