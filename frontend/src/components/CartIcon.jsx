import React, { useContext } from 'react';
import {  FiShoppingCart} from 'react-icons/fi';
import { Link } from 'react-router-dom'; 


import { ShopContext } from '../context/ShopContext';

const CartIcon = () => {
  const { getTotalItems } = useContext(ShopContext);

  return (
    <div className="relative">
         <Link to='/cart' className='relative'>
<FiShoppingCart className='w-8 h-8 cursor-pointer' />
<p className="absolute right-[-42px] bottom-[-22px] w-5 text-center leading-4
 bg-red-500 text-white aspect-square rounded-full text-[12px]">   
{String(getTotalItems())}
    </p>
</Link> 
    </div>
  );
};

export default CartIcon;

