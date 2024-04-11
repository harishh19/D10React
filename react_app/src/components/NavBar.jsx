import React from 'react';
import CartIcon from './CartIcon';
import './NavBar.scss';

const Navbar = (cartItemCount) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-gray-200 py-4 px-8 flex justify-center items-center">
      <h1 className="text-2xl font-bold text-orange-400">Product Listing</h1>
      <div className="absolute right-8">
        {cartItemCount &&
         <CartIcon
         count={cartItemCount.count}
         showModal={cartItemCount.showModal}
         showCartModal={cartItemCount.showCartModal} /> }
    </div>
  </nav>
  );
};

export default Navbar;
