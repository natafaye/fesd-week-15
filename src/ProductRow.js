import React from 'react'

export default function ProductRow({ product }) {
  return (
    <li className="list-group-item">
        ${ product.price } - { product.name }
    </li>
  )
}
