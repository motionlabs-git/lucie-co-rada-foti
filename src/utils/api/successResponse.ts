import { NextResponse } from 'next/server'

export function HttpSuccess() {
	return NextResponse.json({ code: 'SUCCESS' }, { status: 200 })
}
