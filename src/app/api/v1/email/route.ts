import { NextRequest, NextResponse } from 'next/server'
import emailjs from '@emailjs/nodejs'

export async function POST(request: NextRequest) {
	try {
		const body = await request.json()

		console.log(body)

		const res = await emailjs.send(
			process.env.EMAILJS_SERVICE_ID!,
			process.env.EMAILJS_TEMPLATE_ID!,
			body,
			{
				publicKey: process.env.EMAILJS_PUBLIC_KEY!,
				privateKey: process.env.EMAILJS_PRIVATE_KEY!,
			}
		)

		if (res.status !== 200) {
			throw new Error('Failed to send email')
		}

		return NextResponse.json(res)
	} catch (err) {
		if (err instanceof Error) {
			return NextResponse.json({
				status: 400,
				message: err.message,
			})
		}
		return NextResponse.json({
			status: 500,
			message: 'Internal server error',
		})
	}
}
