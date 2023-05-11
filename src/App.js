import React, { useEffect, useState } from 'react'

export default function App() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getAllProducts = async () => {
            setLoading(true)
            const response = await fetch("http://localhost:3004/products")
            const data = await response.json()
            setLoading(false)
            setProducts(data)
        }
        getAllProducts()
    }, []) // run this little function once when this component first loads in, and never again

    

    const deleteProduct = async (id) => {
        // Changing it on the backend
        setLoading(true)
        try {
            const response = await fetch("http://localhost:3004/products/" + id, {
                method: "DELETE"
            })
            setError(null)
            // Changing it on the frontend
            setProducts( products.filter(p => p.id !== id)  )
        } catch(error) {
            setError("There was an error!")
        }
        setLoading(false)

        
    }

    const details = { something: 3, hello: 5 }

    return (
        <div>
            App
            { loading ? <p>Loading...</p> : null }
            { error ? <p>{error}</p> : null }
            <ProductList productList={products} anotherProp={details} handleDelete={deleteProduct} loading={loading} />
        </div>
    )
}

function ProductList({ productList, anotherProp, handleDelete, loading }) { // productList = [ { id: 0, title: "Shoes" } ]; anotherProp = { something: 3, hello: 5 }
    return (
        <ul>
            { productList.map(p => <ProductItem key={p.id} product={p} onDelete={handleDelete} loading={loading}/>)}
        </ul>
    )
}

function ProductItem({ product, onDelete, loading }) {
    return (
        <li>
            {product.name}
            <button disabled={loading} onClick={() => onDelete(product.id)}>Delete</button>
        </li>
    )
}




// In the background, with React, we don't write this code
// const productListProps = {
//     productList: [ { id: 0, title: "Shoes" } ],
//     anotherProp: { something: 3, hello: 5 }
// }
// ProductList(productListProps)



// function getMeal() {
//     return ["spaghetti", "ice cream"]
// }


// const [healthyBit, goodBit] = getMeal()