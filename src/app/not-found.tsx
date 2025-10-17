import localFont from 'next/font/local'
import './(front)/front.css'
import Link from 'next/link'

const satoshiRegular = localFont({
	src: '../assets/fonts/Satoshi-Regular.woff2',
	variable: '--font-satoshi-regular',
})

export default function AdminNotFoundPage() {
	return (
		<html lang='cs'>
			<body
				className={`antialiased bg-bone px-4 ${satoshiRegular.className}`}
			>
				<div className='h-[100dvh] w-full flex flex-col gap-8 items-center justify-center'>
					<h1 className='text-lightOrange'>
						<strong>Chyba 404</strong>
					</h1>
					<p className='font-bold text-center md:text-right'>
						„Tahle chvíle se bohužel nezachytila… Stránka, kterou
						hledáte, zůstala mimo záběr.“
					</p>
					<Link href={'/'}>
						<button
							type='button'
							aria-label='Přejít domů'
							className='relative h-12 font-satoshiBold border-black hover:bg-lightOrange duration-300 hover:border-lightOrange hover:text-black font-bold text-white border rounded-lg px-6 bg-black'
						>
							Přejít domů
						</button>
					</Link>
				</div>
			</body>
		</html>
	)
}
