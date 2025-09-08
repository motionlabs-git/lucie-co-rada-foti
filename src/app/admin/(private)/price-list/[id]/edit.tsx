'use client'

import React, { useState } from 'react'
import PriceListForm from '@/components/admin/Forms/PriceListForm'
import { PriceListSchema } from '@/schemas/price-list.schema'
import { useRouter } from 'next/navigation'
import { axiosFileClient } from '@/utils/axios/client'

interface IProps {
	id: string
	defaultValues: PriceListSchema
}

const Edit: React.FC<IProps> = ({ id, defaultValues }) => {
	const router = useRouter()
	const [loading, setLoading] = useState(false)
	const [response, setResponse] = useState(false)
	const [error, setError] = useState(false)

	const handleFormSubmit = async (data: FormData) => {
		setLoading(true)

		axiosFileClient
			.post(`/api/v1/price-list/${id}`, data)
			.then(() => {
				setResponse(true)
				setError(false)
			})
			.catch(() => {
				setResponse(false)
				setError(true)
			})
			.finally(() => {
				setLoading(false)
				setTimeout(() => {
					setResponse(false)
					setError(false)
					router.push('/admin/price-list')
				}, 2000)
			})
	}

	return (
		<PriceListForm
			defaultValues={defaultValues}
			onSubmit={handleFormSubmit}
			loading={loading}
			response={response}
			error={error}
		/>
	)
}

export default Edit
