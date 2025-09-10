import { useEffect, useState } from "react"
import { createClient } from "./supabase/client"
import { GalleryImage } from "@/types/gallery-image"



const FetchImages = () => {
    const [data, setData] = useState<null | GalleryImage[]>(null)

    useEffect(() => {
        const supabase = createClient()
       supabase.from('image_upload').select('*').then(res =>{
        setData(res.data)
        })
    }, [])
    
    
    return data
  
}

export default FetchImages