import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
export const GifExpertApp = () => {

    const [categories, setcategories] = useState(["One Punch"]);

    const setCategori = (newCategori) => {
        if (categories.includes(newCategori)) return;
        setcategories([newCategori, ...categories])
    }

    return (
        <>

            <h1>GifExpertApp</h1>

            <AddCategory
                OnNewCategori={setCategori} />
            {categories.map(categori =>
            (
                <GifGrid key={categori} categori={categori} />
            )
            )
            }
        </>
    )
}