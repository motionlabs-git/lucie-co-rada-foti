import { Model } from '@/schemas/model'
import { GalleryGridImage } from './gallery-grid'
import { ImageUploadSchema } from '@/schemas/image-upload.schema'

export type GalleryGridUploadJoin = Model<
	Omit<GalleryGridImage, 'image_upload'> & {
		image_upload: ImageUploadSchema | null
	}
>
