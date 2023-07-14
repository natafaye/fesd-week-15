import { useEffect, useState } from "react"


export default function App() {
    const [products, setProducts] = useState([])

    const refreshProducts = async () => {
        const response = await fetch("http://localhost:3004/products")
        const freshData = await response.json()
        setProducts(freshData)
    }

    const featuredProduct = products[0]
    console.log(featuredProduct)

    // by the way, could you do this later when you have time?
    useEffect(() => {
        refreshProducts()
    }, []) // there's no reason to ever run again

    const createProduct = async (newProduct) => {

        // make that same change on the backend
        const response = await fetch("http://localhost:3004/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newProduct)
        })
        const newProductWithId = await response.json()

        // OPTION 1
        // make the change on the frontend
        setProducts([...products, newProductWithId])

        // OPTION 2
        // refreshProducts()

    }

    const deleteProduct = async (idToDelete) => {

        // make that same change on the backend
        await fetch("http://localhost:3004/products/" + idToDelete, {
            method: "DELETE"
        })

        // OPTION 1
        // make the change on the frontend
        setProducts(products.filter(p => p.id !== idToDelete))

        // OPTION 2
        // refreshProducts()

    }

    return (
        <div>
            <button onClick={() => createProduct({ name: "Wheat", price: 30 })}>Create Wheat</button>
            <h1>Featured: { featuredProduct ? featuredProduct.name : null }</h1>
            {products.map(p => (
                <div key={p.id}>
                    {p.name}
                    <button className="btn btn-danger" onClick={() => deleteProduct(p.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}


// props = {
//     color: "black",
//     size: "lg",
//     user: { name: "Natalie", isAdmin: true }
// }



//

// const { name, isAdmin } = user


// function getTastyFood() {
//     return [CURRENT VALUE OF PIECE OF STATE, FUNCTION FOR UPDATING THE PIECE OF STATE]
// }

// const [counter, setCounter] = useState()