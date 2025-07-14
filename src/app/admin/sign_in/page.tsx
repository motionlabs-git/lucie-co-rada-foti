import { NextPage } from 'next'
import SignInForm from '@/components/admin/Forms/SignInForm'
import { signIn } from '@/actions/authActions'

const SignInPage: NextPage = () => {
	return (
		<>
			<main className='w-full min-h-screen flex items-center justify-center px-4'>
				<SignInForm action={signIn} />
			</main>
		</>
	)
}

export default SignInPage
