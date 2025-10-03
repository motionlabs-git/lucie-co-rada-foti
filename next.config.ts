import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'res.cloudinary.com',
			},
		],
	},
	env: {
		EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
		EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
		EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
	},
}

export default nextConfig
