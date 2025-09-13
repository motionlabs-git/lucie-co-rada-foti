import { Timestamp } from "next/dist/server/lib/cache-handlers/types"

export type PricelistCategoryType = {
    created_at:Timestamp
    id:number
    item_order:number[]
    name:string
}