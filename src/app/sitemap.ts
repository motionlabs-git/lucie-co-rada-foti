import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://luciefoti.cz/',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: 'https://luciefoti.cz/gdpr',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.1,
		},
	]
}
