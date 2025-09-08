import { NextRequest } from 'next/server'
import { seoValidation } from '@/schemas/seo.schema'
import { createServerClient } from '@/utils/supabase/server'
import {
	HttpSupabaseError,
	HttpValidationError,
} from '@/utils/api/errorResponse'
import { HttpSuccess } from '@/utils/api/successResponse'

interface Params {
	id: string
}

export async function POST(
	request: NextRequest,
	{ params }: { params: Promise<Params> }
) {
	const { id } = await params
	const data = await request.json()

	const result = seoValidation.safeParse(data)

	if (!result.success) {
		return HttpValidationError()
	}

	const supabase = await createServerClient()
	const { error } = await supabase.from('seo').update(data).eq('id', id)
	if (error) return HttpSupabaseError(error)

	return HttpSuccess()
}
