import { Playfair_Display } from 'next/font/google'
import localFont from 'next/font/local'
import './front.css'

const bellefair = Playfair_Display({
	weight: ['400'],
	subsets: ['latin'],
	variable: '--font-bellefair',
})

const satoshiRegular = localFont({
	src: '../../assets/fonts/Satoshi-Regular.woff2',
	variable: '--font-satoshi-regular',
})

const satoshiBold = localFont({
	src: '../../assets/fonts/Satoshi-Bold.woff2',
	variable: '--font-satoshi-bold',
})

const promenadeItalic = localFont({
	src: '../../assets/fonts/Promenade-Italic.otf',
	variable: '--font-promenade-italic',
})

export default function FrontLayout({}: // children,
Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<html lang='cs'>
				<body
					className={`antialiased
						${bellefair.variable}
						${satoshiRegular.variable}
						${satoshiBold.variable}
						${promenadeItalic.variable}
						bg-bone
                `}
				>
					<div className='flex flex-col gap-8 w-full h-screen justify-center items-center'>
						<h1 className='!text-[4vw]'>
							Stránky se připravují ke spuštění
						</h1>

						<a href='https://motionlabs.cz/' target='_blank'>
							<h1 className='!text-[2vw]'>www.motionlabs.cz</h1>
						</a>
					</div>
					{/* {children} */}
				</body>
			</html>
		</>
	)
}
