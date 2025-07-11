'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createServerClient } from '@/utils/supabase/server'
import { SignInSchema, signInValidation } from '@/schemas/sign-in.schema'

export async function signIn(formData: SignInSchema) {
	// VALIDATION
	const result = signInValidation.safeParse(formData)
	if (!result.success) {
		return redirect('/admin/error')
	}

	// SIGN IN
	const supabase = await createServerClient()
	const { error } = await supabase.auth.signInWithPassword({
		email: formData.email.toLocaleLowerCase(),
		password: formData.password,
	})

	if (error) {
		return redirect('/admin/error')
	}

	revalidatePath('/', 'layout')
	return redirect('/admin')
}

export async function signOut() {
	const supabase = await createServerClient()
	const { error } = await supabase.auth.signOut()

	if (error) {
		return redirect('/admin/error')
	}

	revalidatePath('/', 'layout')
	return redirect('/admin/sign_in')
}
