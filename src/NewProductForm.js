import React, { useState } from 'react'

export default function NewProductForm({ onSubmit }) {
    const [nameValue, setNameValue] = useState("");
    const [priceValue, setPriceValue] = useState("");

    const handleNameChange = (event) => setNameValue(event.target.value);
    const handlePriceChange = (event) => setPriceValue(event.target.value);

    const handleFormSubmit = (event) => {
        event.preventDefault()

        const productData = {
            name: nameValue,
            price: priceValue
        }

        onSubmit(productData)
    }

    return (
        <form>
            Name
            <input type="text" value={nameValue} onChange={handleNameChange} />
            Price
            <input type="text" value={priceValue} onChange={handlePriceChange} />
            <button onClick={handleFormSubmit}>Create Product</button>
        </form>
    )
}
