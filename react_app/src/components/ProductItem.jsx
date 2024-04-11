import { useState } from 'react';
import ProductViewButton from "./ProductViewButton";
import { PUBLIC_URL } from "../config";

import './ProductItem.scss';
import Navbar from './NavBar';

const ProductItem = (products) => {
  const [cartItems, setCartItems] = useState([]);
  const [showAddToCartMessage, setShowAddToCartMessage] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Function to handle showing the cart modal.
  // Passing this function both productviewbutton and navbar page. So, adding this Function in parent component.
  const showCartModal = (bol) => {
    setShowModal(bol);
  };

  const item = products.item;
  const itemImg = products.itemImages;
  const getimageUri = (fid) => {
    const img = itemImg.filter(image => image.attributes.drupal_internal__fid === fid);
    return img[0];
  }
  // Function to update cart
  const updateCart = (item) => {
    setCartItems(item);
  };
  // Function to add a product to the cart
  const addToCart = (product) => {
    const existingCartItemIndex = cartItems.findIndex(item => item.id === product.id);
    if (existingCartItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex].quantity++;
      updateCart(updatedCartItems);
    } else {
      updateCart([...cartItems, { ...product, quantity: 1 }]);
    }
    setShowAddToCartMessage(true);
    setAddedProduct(product);
    setTimeout(() => {
      setShowAddToCartMessage(false);
      setAddedProduct(null);
    }, 3000);
  };
  return (
    <>
      {cartItems &&
        <Navbar
          count={cartItems.length}
          showModal={showModal}
          showCartModal={showCartModal}
        />
      }
      {showAddToCartMessage && (
        <div className="add-to-cart-message">
          {addedProduct && (<p>{addedProduct.title} added to cart!</p>)}
        </div>
      )}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 animate-fade-in">
          {item.length > 0 && item.map((res, idx) => {
            const Img = getimageUri(res.relationships.field_product_image.data.meta.drupal_internal__target_id);
            const cartObj = {
              id: res.id,
              title: res.attributes.title,
              imgUrl: PUBLIC_URL + Img.attributes.uri.url,
              price: res.attributes.field_selling_price
            }
            return (
              <div key={res.id} className="bg-white rounded-lg shadow-md p-3 hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
                <img src={PUBLIC_URL + Img.attributes.uri.url} alt={res.attributes.title} className="w-full h-48 object-cover mb-4" />
                <h2 className="text-lg font-bold">{res.attributes.title}</h2>
                <div className="flex justify-between items-center">
                  <p className="text-gray-600 pt-2">${res.attributes.field_selling_price}</p>
                  <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-1 px-2 rounded cartButton" onClick={() => addToCart(cartObj)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            )

          })}
        </div>
      </div>
      <ProductViewButton
        cartItems={cartItems}
        setCartItems={updateCart}
        showModal={showModal}
        showCartModal={showCartModal}
      />
    </>
  )
}
export default ProductItem;
