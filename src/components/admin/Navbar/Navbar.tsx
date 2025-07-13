import Link from 'next/link'
import { signOut } from '@/actions/authActions'
import { createServerClient } from '@/utils/supabase/server'

const Navbar: React.FC = async () => {
	const supabase = await createServerClient()
	const {
		data: { user },
	} = await supabase.auth.getUser()

	return (
		<nav className='sticky top-4 z-40 w-full container flex justify-between items-center rounded-2xl border-2 border-white/5 p-4'>
			<section>
				<Link href='/'>Logo</Link>
			</section>

			<section>
				<ul className='flex gap-4'>
					<li>
						<Link href='/'>Store</Link>
					</li>
					<li>
						<Link href='/'>Pro</Link>
					</li>
					<li>
						<Link href='/'>AI</Link>
					</li>
					<li>
						<Link href='/'>Plan</Link>
					</li>
				</ul>
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
