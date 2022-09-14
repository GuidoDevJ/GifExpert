import { getGifs } from "../helpers/getGifs"
import { useEffect, useState } from "react";

import { GifItem } from "./GifItem";
import { useFecthGifs } from "../hooks/useFecthGifs";

export const GifGrid = ({ categori }) => {
    const { image, isLoading } = useFecthGifs(categori)
    return (
        <>
            <h3>{categori}</h3>
            {
                isLoading && (<h2>Cargando ....</h2>)
            }
            <div className="card-grid">
                {
                    image.map((image) => (
                        <GifItem key={image.id}
                            {...image} />
                    ))
                }
            </div>
        </>
    )
}