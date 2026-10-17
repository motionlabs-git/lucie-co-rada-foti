import React from 'react'
import LoaderProvider from '@/components/front/Loader/LoaderProvider'
import { createServerClient } from '@/utils/supabase/server'
import {
	PostgrestResponse,
	PostgrestSingleResponse,
} from '@supabase/supabase-js'
import { SeoSchema } from '@/schemas/seo.schema'
import { PriceListSchema } from '@/schemas/price-list.schema'
import About from './sections/About'
import ContactForm from './sections/ContactForm'
import References from './sections/References'
import Gallery from './sections/Gallery'
import Pricelist from './sections/Pricelist'
import { PricelistCategoryType } from '@/types/pricelist-category'
import { Model } from '@/schemas/model'
import { GalleryGridImage } from '@/types/gallery-grid'
import { ReactLenis } from 'lenis/react'

const SITE_URL = 'https://www.luciefoti.cz/'

const getJsonLd = (pricelist: Model<PriceListSchema>[] | null) => {
	const prices = pricelist?.map((item) => item.price) ?? []

	return {
		'@context': 'https://schema.org',
		'@type': 'ProfessionalService',
		'@id': `${SITE_URL}#business`,
		name: 'Lucie co ráda fotí',
		description:
			'Svatební a rodinná fotografka z okolí Nového Jičína. Zachycuji přirozené emoce a skutečné okamžiky vašeho života.',
		url: SITE_URL,
		image: `${SITE_URL}images/LCRF_OG_image.jpg`,
		telephone: '+420720661661',
		founder: {
			'@type': 'Person',
			name: 'Lucie Pantálek Monsportová',
		},
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Suchdol nad Odrou',
			postalCode: '742 01',
			addressRegion: 'Moravskoslezský kraj',
			addressCountry: 'CZ',
		},
		areaServed: [
			{ '@type': 'City', name: 'Nový Jičín' },
			{ '@type': 'AdministrativeArea', name: 'Moravskoslezský kraj' },
		],
		...(prices.length > 0 && {
			priceRange: `${Math.min(...prices)} – ${Math.max(...prices)} Kč`,
		}),
		sameAs: [
			'https://www.instagram.com/lucie_co_rada_foti/',
			'https://www.facebook.com/profile.php?id=100001377691625',
		],
	}
}

export const generateMetadata = async () => {
	const supabase = await createServerClient()

	const { data }: PostgrestSingleResponse<SeoSchema> = await supabase
		.from('seo')
		.select('*')
		.eq('path', '/')
		.single()

	return {
		metadataBase: 'https://www.luciefoti.cz/',
		title: {
			template: '%s | Lucie co ráda fotí',
			default:
				data?.title ??
				'Svatební a rodinné focení Nový Jičín | Lucie co ráda fotí',
		},
		description:
			data?.description ??
			'Svatební a rodinná fotografka z okolí Nového Jičína. Zachycuji přirozené emoce a skutečné okamžiky vašeho života. Profesionální svatební a rodinné focení.',
		keywords: data?.keywords
			? data.keywords.split(',')
			: [
					'svatební focení Nový Jičín',
					'svatební fotografka Nový Jičín',
					'rodinné focení Nový Jičín',
					'rodinný fotograf Nový Jičín',
					'focení párů Nový Jičín',
					'lifestyle focení',
					'přirozené focení',
					'portrétní fotografka',
					'focení v přírodě',
					'focení s dětmi',
					'svatební fotografie',
					'rodinné fotografie',
					'fotograf Moravskoslezský kraj',
				],
		authors: [
			{
				name: 'MotionLabs',
				url: 'https://motionlabs.cz',
			},
		],
		alternates: {
			canonical: SITE_URL,
		},
		twitter: {
			card: 'summary_large_image',
		},
		openGraph: {
			url: SITE_URL,
			title: 'Svatební a rodinné focení Nový Jičín | Lucie co ráda fotí',
			description:
				'Svatební a rodinná fotografka z okolí Nového Jičína. Zachycuji přirozené emoce a skutečné okamžiky vašeho života. Profesionální svatební a rodinné focení.',
			images: '/images/LCRF_OG_image.jpg',
		},
		icons: {
			icon: '/favicon.ico',
			apple: '/apple-touch-icon.png',
		},
	}
}

async function HomePage() {
	const supabase = await createServerClient()

	const { data: galleryData } = (await supabase
		.from('gallery_grid')
		.select('id, title, image_id(url)')
		.order('id', {
			ascending: true,
		})) as PostgrestResponse<GalleryGridImage>

	const {
		data: pricelist,
	}: PostgrestSingleResponse<Model<PriceListSchema>[]> = await supabase
		.from('price_list')
		.select('*')

	const {
		data: pricelistCategories,
	}: PostgrestSingleResponse<Model<PricelistCategoryType>[]> = await supabase
		.from('price_list_category')
		.select('*')
		.order('id', { ascending: true })

	return (
		<ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(getJsonLd(pricelist)).replace(
						/</g,
						'\\u003c'
					),
				}}
			/>
			<LoaderProvider>
				<main className='flex flex-col items-center'>
					<Gallery galleryData={galleryData} />

					<About />

					<Pricelist
						pricelistData={{
							pricelist: pricelist,
							categories: pricelistCategories,
						}}
					/>

					<ContactForm />

					<References />
				</main>
			</LoaderProvider>
		</ReactLenis>
	)
}

export default HomePage
