import { NextPage } from 'next'
import Edit from './edit'
import { createServerClient } from '@/utils/supabase/server'
import { PostgrestSingleResponse } from '@supabase/supabase-js'
import { PriceListSchema } from '@/schemas/price-list.schema'
import { Model } from '@/schemas/model'

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
				<h2 className='text-xl'>Edit price list</h2>

				{error && <p>Something went wrong</p>}

				{id && defaultValues && (
					<Edit id={id} defaultValues={defaultValues} />
				)}
			</section>
		</>
	)
}

export default PriceListEditPage
