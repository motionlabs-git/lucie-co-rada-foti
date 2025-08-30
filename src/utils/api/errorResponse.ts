import { PostgrestError } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

export function HttpValidationError() {
	return NextResponse.json({ code: 'VALIDATION_ERROR' }, { status: 422 })
}

export function HttpInternalServerError() {
	return NextResponse.json({ code: 'INTERNAL_SERVER_ERROR' }, { status: 500 })
}

export function HttpSupabaseError(error: PostgrestError) {
	return NextResponse.json({ code: error.code }, { status: 400 })
}
