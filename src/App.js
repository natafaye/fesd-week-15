import React, { useEffect, useState } from 'react'
import { deleteProduct } from './productService'

export default function App() {
	const [productList, setProductList] = useState([])
	const [isExpanded, setIsExpanded] = useState(false)

	useEffect(() => {
		const refreshProducts = async () => {
			const response = await fetch('http://localhost:3000/products')
			const data = await response.json()
			setProductList(data)
		}
		refreshProducts()
	}, [])

	const onDelete = async (id) => {
		await deleteProduct(id)
		setProductList(productList.filter(p => p.id !== id))
	}

	const createProduct = async (newProduct) => {
		const response = await fetch("http://localhost:3000/products", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newProduct)
		})
		const createdProduct = await response.json() // make sure you concat the product from the backend, because it has the id
		setProductList(productList.concat(createdProduct))
	}

	const updateProduct = async (updatedProduct) => {
		fetch("http://localhost:3000/products" + updatedProduct.id, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(updatedProduct)
		})
		setProductList(productList.map(p => p.id === updatedProduct.id ? updatedProduct : p))
	}

	return (
		<ul>
			{ }
			{productList.map(p => <li>{p.name} <button onClick={() => onDelete(p.id)}>Delete</button></li>)}
		</ul>
	)
}



// const bookList = [
// 	{
// 		id: 0,
// 		name: "something"
// 	},
// 	{
// 		id: 0,
// 		name: "I'm a book"
// 	},
// 	{
// 		id: 0,
// 		name: "I'm a book"
// 	},
// 	{
// 		id: 0,
// 		name: "I'm a book"
// 	},
// ]

// const [book1, book2, book3, book4] = bookList

// export default function App() {
// 	return (
// 		<div className="app">
// 			<Button text="Submit" size={2} />
// 		</div>
// 	)
// }

function Button({ size, text }) {
	return (
		<button className={"b-" + size}>{text}</button>
	)
}



// constant
// const COLORS = ["RED", "GREEN", "BLUE", "ORANGE"]


// function makeDinner(ingredients) {
// 	// const variable
// 	const mixedIngredients = ingredients + " mixed"

// 	if(mixedIngredients = "ricemixed") {

// 	}
// }

// makeDinner("rice")
// makeDinner("cauliflower")


function getFood() {
	return ["burrito", "cookies"]
}


const [apple, banana] = getFood()