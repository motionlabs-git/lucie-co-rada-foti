import { Timestamp } from 'next/dist/server/lib/cache-handlers/types'

export type ImageType = {
	id: number
	created_at: Timestamp
	name: string
	url: string
	public_id: string
}
