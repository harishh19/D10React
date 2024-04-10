import React, { useState } from 'react';
import './ProductListPage.scss'; // Import CSS file for styling

const ProductListPage = () => {
  // Sample product data
  const initialProducts = [
    { id: 1, name: 'Product 1', price: 10, imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 20, imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 30, imageUrl: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 4', price: 40, imageUrl: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Product 5', price: 50, imageUrl: 'https://via.placeholder.com/150' }
  ];

  // State to store the list of products
  const [products, setProducts] = useState(initialProducts);

  const handleAddToCart = (productId) => {
    // Implement your add to cart logic here
    console.log(`Product with ID ${productId} added to cart.`);
  };

  return (
    <div className="product-list-container">
      <h1 className="title">Product List</h1>
      <div className="card-container">
        {products.map(product => (
          <div key={product.id} className="card">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <div className="card-content">
              <div className="product-name">{product.name}</div>
              <div className="product-info">
                <div className="product-price">${product.price}</div>
                <button onClick={() => handleAddToCart(product.id)} className="add-to-cart-button">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
