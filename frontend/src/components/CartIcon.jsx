import React, { useContext } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom'; 
import { ShopContext } from '../context/ShopContext';

const CartIcon = () => {
  const { getTotalItems } = useContext(ShopContext);

  return (
    // <div className="fixed md:top-[500px] top-[550px] right-3 z-50 bg-black p-6 rounded-full "> 
    <div className='fixed bottom-6 right-6 bg-black p-6 rounded-full z-50'>
      <Link to='/cart' className='relative'>
        <FiShoppingCart className='w-8 h-8 cursor-pointer text-white' />
        <p className="absolute right-[-10px] bottom-[-10px] w-5 text-center leading-4
          bg-red-500 text-white aspect-square rounded-full text-[12px]">
          {String(getTotalItems())}
        </p>
      </Link> 
    </div>
  );
};

export default CartIcon;
