import { signOut } from '@/actions/authActions'

const AdminPage = () => {
	return (
		<>
			<section className='w-full rounded-lg border border-white/10 p-4'>
				<form action={signOut}>
					<button type='submit'>logout</button>
				</form>
			</section>
			<section className='w-full rounded-lg border border-white/10 p-4'>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
					repellat accusantium excepturi atque. Placeat maxime
					excepturi repudiandae ab rem rerum nostrum perferendis, iste
					doloremque voluptatibus vero eius quae! Quia, quisquam!
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
					vitae fugit accusamus adipisci nesciunt eligendi aperiam
					rerum facere dolor, voluptas animi doloremque? At voluptate
					quaerat blanditiis. Fugit deleniti explicabo sunt.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
					repellat accusantium excepturi atque. Placeat maxime
					excepturi repudiandae ab rem rerum nostrum perferendis, iste
					doloremque voluptatibus vero eius quae! Quia, quisquam!
				</p>
			</section>
		</>
	)
}

export default AdminPage
