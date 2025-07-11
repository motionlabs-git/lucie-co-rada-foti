import { signOut } from '@/actions/authActions'

const AdminPage = () => {
	return (
		<>
			<form action={signOut}>
				<button type='submit'>logout</button>
			</form>
		</>
	)
}

export default AdminPage
