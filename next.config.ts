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
	},
}

export default nextConfig
