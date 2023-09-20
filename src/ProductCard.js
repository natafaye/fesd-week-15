export default function ProductCard({ product, deleteProduct }) {
    return (
        <li>
            {product.name} ${product.price}
            <button className="btn btn-danger ms-3" onClick={() => deleteProduct(product.id)}>Delete</button>
        </li>
    )
}