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

export const generateMetadata = async () => {
	const supabase = await createServerClient()

	const { data }: PostgrestSingleResponse<SeoSchema> = await supabase
		.from('seo')
		.select('*')
		.eq('path', '/')
		.single()

	// TODO:Dodělat defaultní data
	return {
		title: {
			template: '%s | Lucie co ráda fotí',
			default:
				data?.title ??
				'Lucie co ráda fotí | Vaše svatební a rodinná fotografka',
		},
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
	)
}

export default HomePage
