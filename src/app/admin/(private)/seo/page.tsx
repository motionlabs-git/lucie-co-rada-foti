import Input from '@/components/admin/Inputs/Input'
import React from 'react'

const SeoPage = () => {
	return (
		<>
			<section className='w-full rounded-lg bg-widget p-4'>
				<form className='flex flex-col gap-4'>
					<Input name='title' placeholder='Title' type='text' />
					<Input
						name='description'
						placeholder='Description'
						type='text'
					/>
				</form>
			</section>
		</>
	)
}

export default SeoPage
