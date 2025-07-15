import Link from 'next/link'
import Image from 'next/image'
import { signOut } from '@/actions/authActions'
import { createServerClient } from '@/utils/supabase/server'
import Logo from '../../../../public/images/logo.svg'
import { FiSun, FiUser } from 'react-icons/fi'
import Avatar from './Avatar'

const Navbar: React.FC = async () => {
	const supabase = await createServerClient()
	const {
		data: { user },
	} = await supabase.auth.getUser()

	return (
		<nav className='w-full h-14 flex justify-between items-center border-b border-white/10 px-4'>
			<section>
				<Link href='https://motionlabs.cz'>
					<Image
						src={Logo}
						alt='Logo'
						width={40}
						height={40}
						className='h-5 w-auto invert'
					/>
				</Link>
			</section>

			<section className='flex items-center gap-4'>
				<button type='button'>
					<FiSun className='text-md' />
				</button>
				<Avatar />
			</section>
		</nav>
	)
}

export default Navbar
