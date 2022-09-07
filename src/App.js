import React, { useEffect, useState } from 'react'
import { getProducts } from './ProductsService'

export default function App() {
	const [products, setProducts] = useState( [] )

	const fetchAllProducts = async () => {
		const freshProducts = await getProducts();
		setProducts(freshProducts);
	}

	useEffect(() => {
		fetchAllProducts()
	}, []) // run only one time, after the first render

	const deleteProduct = async (idToDelete) => {
		// OPTION 1 - Delete from frontend as well
		setProducts( products.filter(product => product.id !== idToDelete) )

		// Delete from the backend
		const response = await fetch("http://localhost:3004/products/" + idToDelete, { method: "DELETE" })
		// Just for fun, making sure it worked
		console.log("Was response okay?", response.ok)

		// OPTION 2 - Refresh from the backend
		//fetchAllProducts()
	}

	return (
		<div className="container mt-3">
			<div className="row mb-3">
				<div className="col">
					<h2>Products</h2>
				</div>
				<div className="col">
					<button className="btn btn-success float-end">Fetch Products</button>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<ul>
						{ products.map(product => 
							<li key={product.id}>
								<button className="btn btn-sm btn-danger me-2" onClick={() => deleteProduct(product.id)}>Delete</button>
								{ product.name }
							</li>
						)}
					</ul>
				</div>
			</div>
		</div>
	)
}



