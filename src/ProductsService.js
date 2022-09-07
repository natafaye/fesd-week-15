export const getProducts = async () => {
	const response = await fetch("http://localhost:3004/products")
	const fetchedProducts = await response.json()
	return fetchedProducts
}