import { NextPage } from 'next'
import SignInForm from './_components/SignInForm'
import { signIn } from '@/actions/authActions'

const SignInPage: NextPage = () => {
	return (
		<>
			<section>
				<SignInForm action={signIn} />
			</section>
		</>
	)
}

export default SignInPage
