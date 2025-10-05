import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

const AdminErrorPage = () => {
	return (
		<main className='container w-full h-full flex flex-col md:flex-row items-center justify-center overflow-x-hidden mx-auto'>
			<section className='w-full md:w-1/2 md:flex justify-center items-center max-w-xs md:max-w-1/2 px-8'>
				<span className='font-satoshiBold text-[clamp(8em,20vw,17em)] text-stone-800 font-bold'>
					404
				</span>
			</section>

			<section className='w-full md:w-1/2 max-w-xs md:max-w-1/2 px-8'>
				<h1 className='font-satoshiBold font-bold text-5xl'>Oops!</h1>
				<p className='text-2xl text-stone-400 mt-4'>
					Something went wrong.
				</p>
				<Link
					href='/admin'
					className='group inline-flex items-center gap-1 bg-stone-50 hover:bg-stone-200 font-satoshiBold text-base text-stone-950 rounded-full duration-300 px-4 py-2 mt-2'
				>
					<FiArrowLeft className='group-hover:-translate-x-1 transition-transform duration-300' />
					Go home
				</Link>
			</section>
		</main>
	)
}

export default AdminErrorPage
