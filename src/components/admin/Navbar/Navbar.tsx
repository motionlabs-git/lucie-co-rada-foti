import Link from 'next/link'
import { signOut } from '@/actions/authActions'
import { createServerClient } from '@/utils/supabase/server'

const Navbar: React.FC = async () => {
	const supabase = await createServerClient()
	const {
		data: { user },
	} = await supabase.auth.getUser()

	return (
		<nav className='w-full h-16 flex justify-between items-center border-b border-white/10 px-4'>
			<section>
				<Link href='https://motionlabs.cz'>Logo</Link>
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
