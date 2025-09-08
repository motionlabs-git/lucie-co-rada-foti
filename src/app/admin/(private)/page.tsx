import { signOut } from '@/actions/authActions'
import { redirect } from 'next/navigation'

const AdminPage = () => {
	redirect('/admin/seo')

	return (
		<>
			<section className='w-full rounded-2xl bg-widget p-4'>
				<form action={signOut}>
					<button type='submit'>logout</button>
				</form>
			</section>
		</>
	)
}

export default AdminPage
