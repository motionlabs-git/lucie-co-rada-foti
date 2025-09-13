import { NextPage } from 'next'
import Edit from './edit'
import { createServerClient } from '@/utils/supabase/server'
import { PostgrestSingleResponse } from '@supabase/supabase-js'
import { PriceListSchema } from '@/schemas/price-list.schema'
import { Model } from '@/schemas/model'
import CloseButton from '../../../../../components/admin/Pricelist/CloseButton'

const PriceListEditPage: NextPage<{
	params: Promise<{ id: string }>
}> = async ({ params }) => {
	const { id } = await params

	const supabase = await createServerClient()
	const {
		data: defaultValues,
		error,
	}: PostgrestSingleResponse<Model<PriceListSchema>> = await supabase
		.from('price_list')
		.select('*')
		.eq('id', id)
		.single()

	return (
		<>
			<section className='w-full rounded-2xl bg-widget p-4'>
				<div className='flex justify-between'>
					<h2 className='text-xl'>Edit price list</h2>

					<CloseButton></CloseButton>
				</div>

				{error && <p>Something went wrong</p>}

				{id && defaultValues && (
					<Edit id={id} defaultValues={defaultValues} />
				)}
			</section>
		</>
	)
}

export default PriceListEditPage
