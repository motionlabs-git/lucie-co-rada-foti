import { NextRequest, NextResponse } from 'next/server'
import { seoValidation } from '@/schemas/seo.schema'
import { createServerClient } from '@/utils/supabase/server'

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
		return NextResponse.json({ code: 'VALIDATION_ERROR' }, { status: 400 })
	}

	const supabase = await createServerClient()
	const { error } = await supabase.from('seo').update(data).eq('id', id)
	if (error) {
		return NextResponse.json({ code: error.code }, { status: 400 })
	}

	return NextResponse.json({ code: 'SUCCESS' }, { status: 200 })
}
