import { Timestamp } from 'next/dist/server/lib/cache-handlers/types'

export type galleryGridImage = {
	id: number
	created_at: Timestamp | null
	image_id: number | null
}
