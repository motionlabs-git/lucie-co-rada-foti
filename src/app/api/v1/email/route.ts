import { NextRequest, NextResponse } from 'next/server'
import emailjs, { EmailJSResponseStatus } from '@emailjs/nodejs'
import { contactFormValidation } from '@/schemas/contact-form.schema'

emailjs.init({
	publicKey: process.env.EMAILJS_PUBLIC_KEY,
	privateKey: process.env.EMAILJS_PRIVATE_KEY,
})

export async function POST(request: NextRequest) {
	let body: unknown
	try {
		body = await request.json()
	} catch {
		return NextResponse.json(
			{ message: 'Invalid JSON body' },
			{ status: 400 }
		)
	}

	const parsed = contactFormValidation.safeParse(body)
	if (!parsed.success) {
		return NextResponse.json(
			{ message: 'Invalid form data', errors: parsed.error.issues },
			{ status: 400 }
		)
	}

	try {
		await emailjs.send(
			process.env.EMAILJS_SERVICE_ID!,
			process.env.EMAILJS_TEMPLATE_ID!,
			parsed.data
		)

		return NextResponse.json({ message: 'Email sent' })
	} catch (err) {
		// EmailJS rejects with EmailJSResponseStatus (API error) or a plain string (missing config)
		if (err instanceof EmailJSResponseStatus) {
			console.error('EmailJS error:', err.status, err.text)
		} else {
			console.error('EmailJS error:', err)
		}

		return NextResponse.json(
			{ message: 'Failed to send email' },
			{ status: 500 }
		)
	}
}
