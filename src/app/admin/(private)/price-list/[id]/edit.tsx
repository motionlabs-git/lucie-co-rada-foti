'use client'

import React, { useState } from 'react'
import PriceListForm from '@/components/admin/Forms/PriceListForm'
import { PriceListSchema } from '@/schemas/price-list.schema'
import { useRouter } from 'next/navigation'
import { axiosFileClient } from '@/utils/axios/client'
import { createClient } from '@/utils/supabase/client'

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

	const deleteForm = async (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault()

		//TODO:Delete
		const supabase = createClient()

		setLoading(true)

		try {
			await supabase
				.from('price_list')
				.delete()
				.eq('id', id)
				.then((res) => {
					console.log(res)
				})

			// TODO:mazani z tabulky kategorii

			// const { data, error } = await supabase
			// 	.from('price_list_category')
			// 	.update({ item_order: '1' })
			// 	.eq('some_column', 'someValue')
			// 	.select()
		} catch (error) {
			console.log(error)
			setError(true)
		} finally {
		}
	}

	return (
		<PriceListForm
			defaultValues={defaultValues}
			onSubmit={handleFormSubmit}
			handleDelete={deleteForm}
			loading={loading}
			response={response}
			error={error}
		/>
	)
}

export default Edit
