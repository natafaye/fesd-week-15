import { useEffect, useState } from "react"
import ProductList from "./ProductList"
import CreateProductForm from "./CreateProductForm"
// import myImage from "./assets/pretend-image.png"


export default function App() {
    const [productList, setProductList] = useState([])

    // Changing the tab text
    useEffect(() => {
        document.title = productList.length + " products"
    }, [productList])

    // Loading in the data after the first render
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("http://localhost:3004/products")
            const data = await response.json()
            setProductList(data)
        }
        // Just a thing we do - put in the whole function and then immediately call it
        fetchProducts() // do not wait for it, useEffect doesn't want your async junk
    }, []) // empty dependency = run once on the first render, and never again (twice in development mode, and don't worry about it)

    const deleteProduct = async (idToDelete) => {
        // update the data on the backend
        const response = await fetch("http://localhost:3004/products/" + idToDelete, {
            method: "DELETE"
        })

        // update the data on the frontend
        setProductList(productList.filter(product => product.id !== idToDelete))
    }

    const createProduct = () => {

    }

    return (
        <div className="container mt-3">
            <ProductList productList={productList} deleteProduct={deleteProduct}/>
            <CreateProductForm createProduct={createProduct}/>
        </div>
    )
}


// function mapCallback(product) {
//     return <li key={product.id}>{product.name} ${product.price}</li>
// }







// const evening = () => {
//     watchMovie() // start watching the movie but don't wait for it to finish
//     doDishes() // while the movie is going
//     // at some point the movie finishes
// }


// const watchMovie = async () => {
//     // takes 2 hours to watch the movie
// }

// const doDishes = () => {
//     // takes 30 minutes to do the dishes
// }




// async function clickButton() {
//     showLoading()
//     await goGetData()
//     stopShowingLoading()
//     renderWithNewData()
// }


// async function goGetData() {
//     // takes a long time to get the data
// }





// function calculateCoolnessScore({ howManyFriends, address, areYouDatingSomeone, age, hairColor }) {
//     if(howManyFriends > 2) {

//     }
// }

// calculateCoolnessScore({ howManyFriends: 5,  areYouDatingSomeone: true, age: 14, address: { state: "NV", city: "Reno "}, hairColor: "brown" })


//   function getFood() {
//     return ["spaghetti", "cake"]
//   }

//   const myFood = getFood()

//   myFood[0] // "spaghetti"
//   myFood[1] // "cake"


//   const [meal, dessert] = getFood()

//   meal // "spaghetti"
//   dessert // "cake"