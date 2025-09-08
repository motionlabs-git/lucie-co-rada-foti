import SeoDropdown from '@/components/admin/Dropdown/SeoDropdown'
import SeoForm from '@/components/admin/Forms/SeoForm'
import { Model } from '@/schemas/model'
import { SeoSchema } from '@/schemas/seo.schema'
import { createServerClient } from '@/utils/supabase/server'
import { PostgrestResponse } from '@supabase/supabase-js'
import { redirect } from 'next/navigation'

const SeoPage = async () => {
	const supabase = await createServerClient()
	const {
		data,
		error,
	}: PostgrestResponse<Model<SeoSchema> & { path: string; name: string }> =
		await supabase.from('seo').select('*').range(0, 5)

	if (error) {
		redirect('/admin/error')
	}

	return (
		<>
			<section className='w-full rounded-2xl bg-widget p-4'>
				<h2 className='text-xl'>SEO Settings</h2>
				<ul className='flex flex-col gap-2 mt-4'>
					{data &&
						data.map((item) => (
							<li key={item.id}>
								<SeoDropdown name={item.name} path={item.path}>
									<SeoForm
										id={item.id}
										defaultValues={item}
									/>
								</SeoDropdown>
							</li>
						))}
				</ul>
			</section>
		</>
	)
}

export default SeoPage
