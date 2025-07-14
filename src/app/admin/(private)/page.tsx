import { signOut } from '@/actions/authActions'

const AdminPage = () => {
	return (
		<>
			<section>
				<form action={signOut}>
					<button type='submit'>logout</button>
				</form>
			</section>
			<section>
				<p className='text-7xl'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Mollitia dolorum omnis veritatis repellat consectetur
					perferendis repudiandae vero error quod maxime. Aperiam,
					repudiandae laudantium rem tempore vero quisquam inventore
					delectus ipsam.
				</p>
			</section>
			<section>
				<p className='text-3xl'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Mollitia dolorum omnis veritatis repellat consectetur
					perferendis repudiandae vero error quod maxime. Aperiam,
					repudiandae laudantium rem tempore vero quisquam inventore
					delectus ipsam.
				</p>
				<p className='text-3xl'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Mollitia dolorum omnis veritatis repellat consectetur
					perferendis repudiandae vero error quod maxime. Aperiam,
					repudiandae laudantium rem tempore vero quisquam inventore
					delectus ipsam.
				</p>
			</section>
			<section>
				<p className='text-7xl'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Mollitia dolorum omnis veritatis repellat consectetur
					perferendis repudiandae vero error quod maxime. Aperiam,
					repudiandae laudantium rem tempore vero quisquam inventore
					delectus ipsam.
				</p>
			</section>
			<section>
				<p className='text-7xl'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Mollitia dolorum omnis veritatis repellat consectetur
					perferendis repudiandae vero error quod maxime. Aperiam,
					repudiandae laudantium rem tempore vero quisquam inventore
					delectus ipsam.
				</p>
			</section>
		</>
	)
}

export default AdminPage
