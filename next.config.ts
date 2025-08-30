import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	images: {
		domains: [
			'brides.com',
			'lirp.cdn-website.com',
			'www.brides.com',
			'scontent.fsvg1-1.fna.fbcdn.net',
			'instagram.fbrq1-1.fna.fbcdn.net',
			'flowbite.s3.amazonaws.com',
			'res.cloudinary.com',
		],
	},
	env: {
		EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
		EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
		EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
	},
}

export default nextConfig
