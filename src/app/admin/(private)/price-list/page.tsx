'use client'

import { Model } from '@/schemas/model'
import { PriceListCategorySchema } from '@/schemas/price-list-category.schema'
import { PriceListSchema } from '@/schemas/price-list.schema'
import { createClient } from '@/utils/supabase/client'
import { PostgrestResponse } from '@supabase/supabase-js'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FiPlusCircle } from 'react-icons/fi'

const DroppableContainer = dynamic(
	() => import('@/components/admin/Draggable/PriceList/DroppableContainer')
)

const PriceListPage = () => {
	const router = useRouter()

	const [priceListData, setPriceListData] = useState<
		Model<PriceListSchema>[] | null
	>(null)
	const [priceListLoading, setPriceListLoading] = useState(true)

	const [categoryData, setCategoryData] = useState<
		Model<PriceListCategorySchema>[] | null
	>(null)
	const [categoryLoading, setCategoryLoading] = useState(true)

	useEffect(() => {
		;(async () => {
			const supabase = await createClient()

			const {
				data: priceListData,
				error: priceListErr,
			}: PostgrestResponse<Model<PriceListSchema>> = await supabase
				.from('price_list')
				.select('*')

			const {
				data: categoryData,
				error: categoryErr,
			}: PostgrestResponse<Model<PriceListCategorySchema>> =
				await supabase
					.from('price_list_category')
					.select('*')
					.order('created_at', { ascending: true })

			if (priceListErr || categoryErr) {
				router.push('/admin/error')
			}

			setPriceListData(priceListData || [])
			setCategoryData(categoryData || [])

			setTimeout(() => {
				setPriceListLoading(false)
				setCategoryLoading(false)
			}, 300)
		})()
	}, [router])

	return (
		<>
			<section className='w-full rounded-2xl bg-widget p-4'>
				<div className='flex items-center justify-between gap-2'>
					<h2 className='text-xl'>Price list</h2>
					<Link
						href='/admin/price-list/create'
						className='self-end flex justify-center items-center gap-2 bg-green-600 hover:bg-green-500 text-gray-100 rounded-lg duration-300 py-2 px-4'
					>
						<FiPlusCircle />
						Create new
					</Link>
				</div>

				{categoryLoading && priceListLoading ? (
					<p className='mt-4'>Loading...</p>
				) : (
					<div className='flex flex-col gap-2 mt-4'>
						{categoryData &&
							priceListData &&
							categoryData.map((category) => (
								<DroppableContainer
									key={category.id}
									category={category}
									priceList={priceListData}
								/>
							))}
					</div>
				)}
			</section>
		</>
	)
}

export default PriceListPage
