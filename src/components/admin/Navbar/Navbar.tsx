import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../../public/images/logo.svg'
import Avatar from './Avatar'
// import ThemeButton from './ThemeButton'

const Navbar: React.FC = async () => {
	// const supabase = await createServerClient()
	// const {
	// 	data: { user },
	// } = await supabase.auth.getUser()

	return (
		<nav className='w-full h-14 flex justify-between items-center border-b border-black/10 dark:border-white/10 px-4'>
			<section>
				<Link href='https://motionlabs.cz'>
					<Image
						src={Logo}
						alt='Logo'
						width={40}
						height={40}
						className='h-5 w-auto invert-0 dark:invert'
					/>
				</Link>
			</section>

			<section className='flex items-center gap-4'>
				{/* <ThemeButton /> */}

				<Avatar />
			</section>
		</nav>
	)
}

export default Navbar
