import { useState } from "react";
export const AddCategory = ({ OnNewCategori }) => {

    const [inputValue, setInputValue] = useState("");

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim().length <= 1) return;
        // addCat(cat => [...cat, inputValue])
        OnNewCategori(inputValue.trim().toLowerCase())
        setInputValue("")

    }
    return (
        <form action="" onSubmit={onSubmit}>
            <input type="text"
                placeholder="Buscar Gif"
                value={inputValue}
                onChange={onInputChange} />
        </form>

    )
}