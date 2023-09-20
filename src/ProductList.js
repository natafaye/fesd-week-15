import ProductCard from "./ProductCard";

export default function ProductList({ productList, deleteProduct }) {
    return (
        <ul className="list-group">
            {productList.map(product => <ProductCard key={product.id} product={product} deleteProduct={deleteProduct}/>)}
        </ul>
    )
}