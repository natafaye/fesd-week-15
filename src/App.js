import React, { useEffect, useState } from 'react'
import NewProductForm from './NewProductForm'
import TaskList from './TaskList'



export default function App() {
	const [products, setProducts] = useState( [] )

	const fetchAllProducts = async () => {
		const response = await fetch("http://localhost:3004/products")
		const data = await response.json();
		setProducts(data);
	}

	useEffect(() => {
		fetchAllProducts();
	}, []) // only run once after the first render


	// const createProduct = async () => {
	// 	const newProduct = {
	// 		name: "Something",
	// 		price: 5000
	// 	}
		
	// 	// UPDATING THE DATA ON THE BACKEND
	// 	const response = await fetch("http://localhost:3004/products", {
	// 		method: "POST",
	// 		headers: { "Content-Type": "application/json" },
	// 		body: JSON.stringify(newProduct)
	// 	})
	// 	const newlyCreatedProduct = await response.json();

	// 	// OPTION 1 - REFRESH IT ALL
	// 	//fetchAllProducts();

		
	// 	// OPTION 2 - UPDATING THE DATA ON THE FRONT END
	// 	setProducts([...products, newlyCreatedProduct])
	// }

	const createProductFromForm = (newProductData) => {

			
		// OPTION 2 - UPDATING THE DATA ON THE FRONT END
		setProducts([...products, newProductData])
	}

	return (
		<div className="container mt-3">
			<div className="row mb-3">
				<div className="col">
					<h2>You Should Do Stuff</h2>
				</div>
				<div className="col">
					{/* <button className="btn btn-success float-end" onClick={createProduct} >Create Product</button> */}
				</div>
			</div>
			<div className="row">
				<NewProductForm onSubmit={createProductFromForm} />
				<ul>
					{ products.map(product => <li>{ product.name }</li>)}
				</ul>
			</div>
		</div>
	)
}

