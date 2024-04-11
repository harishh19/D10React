import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartIcon = (count) => {
  const toggleModal = () => {
    count.showCartModal(!count.showModal);
  };
  return (
    <div className="relative cursor-pointer hover:text-gray-800" onClick={toggleModal}>
      <FontAwesomeIcon icon={faShoppingCart} size="2x" className="text-gray-600" />
      {count &&
        <span className="bg-orange-400 text-white rounded-full w-6 h-6 flex items-center justify-center absolute -top-1 -right-1">{count.count}</span>
      }
    </div>
  );
};

export default CartIcon;
