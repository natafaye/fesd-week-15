import React, { useEffect, useState } from 'react'
import ProductRow from './ProductRow'

export default function App() {
	const [productList, setProductList] = useState( [] )

	const refreshProducts = async () => {
		const response = await fetch("http://localhost:3001/products")
		const data = await response.json()
		setProductList(data); // take the data, put it in our state, which triggers a rerender, which will then show the data
	}

	useEffect(() => {
        refreshProducts();
    }, []) // empty dependency array = only run once, when the component FIRST loads in

	const onCreateClick = async () => {
		const newProduct = {
			name: "Birthday Cards",
			price: 10
		}

		// BACKEND CHANGE (have to await if you're using OPTION 1)
		await fetch("http://localhost:3001/products", {
			method: "POST", 
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newProduct)
		})

		// OPTION 2: FRONTEND CHANGE AS WELL
		//setProductList( productList.concat(newProduct) )

		// OPTION 1: REFRESH THE FRONTEND FROM BACKEND
		refreshProducts();
	}

	return (
		<div className="container mt-3">
			<div className="row mb-3">
				<div className="col">
					<h2>Products</h2>
				</div>
				<div className="col">
					<button className="btn btn-success float-end" onClick={onCreateClick}>Create Product</button>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<ul className="list-group">
						{ productList.map(product => <ProductRow product={product} key={product.id}/>)}
					</ul>
				</div>
			</div>
		</div>
	)
}
