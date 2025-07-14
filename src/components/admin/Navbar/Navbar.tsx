import Link from 'next/link'
import Image from 'next/image'
import { signOut } from '@/actions/authActions'
import { createServerClient } from '@/utils/supabase/server'
import Logo from '../../../../public/images/logo.svg'

const Navbar: React.FC = async () => {
	const supabase = await createServerClient()
	const {
		data: { user },
	} = await supabase.auth.getUser()

	return (
		<nav className='w-full h-16 flex justify-between items-center border-b border-white/10 px-4'>
			<section>
				<Link href='https://motionlabs.cz'>
					<Image
						src={Logo}
						alt='Logo'
						width={40}
						height={40}
						className='h-6 w-auto invert'
					/>
				</Link>
			</section>

			<section>
				<form action={signOut}>
					<button type='submit'>logout</button>
				</form>
			</section>
		</nav>
	)
}

export default Navbar
