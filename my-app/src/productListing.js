import React from 'react';
import './productListing.css'

const ProductListing = () => {
  const products = [
    { id: 1, name: 'Product A', price: 10 },
    { id: 2, name: 'Product B', price: 20 },
    { id: 3, name: 'Product C', price: 15 },
    // Add more products as needed
  ];

  return (
    <div className="product-listing">
      <h2>Product Listing</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <span>{product.name}</span>
            <span>${product.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListing;
