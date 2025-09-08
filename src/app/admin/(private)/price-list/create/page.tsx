'use client'

import PriceListForm from '@/components/admin/Forms/PriceListForm'
import { axiosFileClient } from '@/utils/axios/client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const PriceListCreatePage = () => {
	const router = useRouter()
	const [loading, setLoading] = useState(false)
	const [response, setResponse] = useState(false)
	const [error, setError] = useState(false)

	const handleFormSubmit = async (data: FormData) => {
		setLoading(true)

		await axiosFileClient
			.post('/api/v1/price-list', data)
			.then(() => {
				setResponse(true)
			})
			.catch(() => {
				setError(true)
			})
			.finally(() => {
				setTimeout(() => {
					setError(false)
					setResponse(false)
					router.push('/admin/price-list')
				}, 2000)
			})
	}

	return (
		<>
			<section className='w-full rounded-2xl bg-widget p-4'>
				<h2 className='text-xl'>Create new price list</h2>

				<PriceListForm
					onSubmit={handleFormSubmit}
					loading={loading}
					response={response}
					error={error}
				/>
			</section>
		</>
	)
}

export default PriceListCreatePage
