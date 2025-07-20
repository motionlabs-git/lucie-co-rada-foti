import { signInValidation } from '@/schemas/sign-in.schema'
import { createServerClient } from '@/utils/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
	const data = await request.json()

	const result = signInValidation.safeParse(data)
	if (!result.success) {
		return NextResponse.json(
			{
				data: null,
				error: true,
				code: 'VALIDATION_ERROR',
			},
			{ status: 400 }
		)
	}

	const supabase = await createServerClient()
	const { error } = await supabase.auth.signInWithPassword({
		email: data.email.toLocaleLowerCase(),
		password: data.password,
	})
	if (error && error.code === 'invalid_credentials') {
		return NextResponse.json(
			{
				data: null,
				error: true,
				code: 'INVALID_CREDENTIALS',
			},
			{ status: 401 }
		)
	}

	if (error) {
		return NextResponse.json(
			{
				data: null,
				error: true,
				code: 'INTERNAL_ERROR',
			},
			{ status: 500 }
		)
	}

	return NextResponse.json(
		{
			data: null,
			error: false,
			code: 'AUTHENTICATED',
		},
		{ status: 200 }
	)
}
