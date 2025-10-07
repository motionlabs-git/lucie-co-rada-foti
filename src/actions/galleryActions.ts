'use server'

import { createServerClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export async function deleteImage(formData: FormData) {
	const id = formData.get('id')
	if (!id) return

	const supabase = await createServerClient()

	await supabase.from('image_upload').delete().eq('id', id)

	redirect('/admin/gallery')
}
