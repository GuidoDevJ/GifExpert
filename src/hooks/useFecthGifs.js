import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFecthGifs = (categori) => {
    const [image, setImages] = useState([]);
    const [isLoading, setIsloading] = useState(true)
    const getImages = async () => {
        const image = await getGifs(categori)
        setImages(image)
        setIsloading(false)
    }

    useEffect(() => {
        getImages()
    }, []);
    return {
        image,
        isLoading
    }
}
