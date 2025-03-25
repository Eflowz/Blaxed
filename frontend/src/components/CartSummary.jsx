import React, { useContext } from 'react';
import {ShopContext} from '../context/ShopContext'

const CartSummary = () => {
  const { cart, getTotalItems, getSubtotal, getTotalAmount, currency } = useContext(ShopContext);

  return (
    <div className="bg-white p-6">
      {cart.length === 0 ? (
        <p className="text-lg">Your cart is currently empty.</p>
      ) : (
        <div>
          <h2 className="text-xl font-medium mb-2 text-center">Cart Summary</h2>
          <div className="grid grid-cols-1 gap-4">
            {cart.map((item) => (
              <div key={item._id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm">{currency}{item.price} x {item.amount}</p>
                    <p className="text-sm font-medium">Total: {currency}{item.totalPrice.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-[#312c2c] text-white shadow rounded-lg">
            <p className="text-lg">Subtotal ({getTotalItems()} items): <span className="font-semibold">{currency}{getSubtotal()}</span></p>
            <p className="text-xl font-bold">Total Amount: <span>{currency}{getTotalAmount()}</span></p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartSummary;
