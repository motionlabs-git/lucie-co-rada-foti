import React from 'react'
import LoaderProvider from '@/components/front/Loader/LoaderProvider'
import { createServerClient } from '@/utils/supabase/server'
import { PostgrestSingleResponse } from '@supabase/supabase-js'
import { SeoSchema } from '@/schemas/seo.schema'

export const generateMetadata = async () => {
	const supabase = await createServerClient()

	const { data }: PostgrestSingleResponse<SeoSchema> = await supabase
		.from('seo')
		.select('*')
		.eq('path', '/')
		.single()

	// TODO:Dodělat deraultní data
	return {
		title: data?.title ?? 'Lucie co ráda fotí | ',
		description: data?.description ?? '',
		keywords: data?.keywords ?? '',
		authors: [
			{
				name: 'MotionLabs',
				url: 'https://motionlabs.cz',
			},
		],
		twitter: {
			card: 'summary_large_image',
		},
		openGraph: {
			title: 'Lucie co ráda fotí',
			description: '',
			images: [
				`https://raw.githubusercontent.com/motionlabs-git/habartovi/refs/heads/master/public/images/OpenGraphImage.webp`,
			],
		},
		icons: [
			{
				rel: 'icon',
				type: 'image/x-icon',
				url: 'favicon.ico',
				media: '(prefers-color-scheme: light)',
			},
			{
				rel: 'icon',
				type: 'image/x-icon',
				url: 'favicon-dark.ico',
				media: '(prefers-color-scheme: dark)',
			},
		],
	}
}

async function HomePage() {
	return <LoaderProvider />
}

export default HomePage
