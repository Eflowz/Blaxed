import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext'; 

const Checkout = () => {
  const { cart, removeFromCart, getTotalItems, getSubtotal, getTotalAmount, currency, tax } = useContext(ShopContext);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4 text-center">Checkout</h1>

      <div className="flex flex-col md:flex-row justify-between items-start gap-6">

        {/* Cart Summary */}
        <div className="flex-1 w-full md:w-auto">
          {cart.length === 0 ? (
            <p className="text-lg">Your cart is currently empty.</p>
          ) : (
            <div>
              <h2 className="text-xl font-medium mb-2">Cart Summary</h2>

              {/* Cart Items */}
              <div className="grid grid-cols-1 gap-4">
                {cart.map((item) => (
                  <div key={item._id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow">
                    <div className="flex items-center">
                      <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg" />
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-sm">{currency}{item.price} x {item.amount}</p>
                        <p className="text-sm font-medium">
                          Total: {currency}{item.totalPrice.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              {/* Subtotal and Total */}
              <div className="mt-6 p-4 bg-white shadow rounded-lg">
                <p className="text-lg">
                  Subtotal ({getTotalItems()} items): <span className="font-semibold">{currency}{getSubtotal()}</span>
                </p>
                <p className="text-lg">
                  Tax: <span className="font-semibold">{currency}{tax.toFixed(2)}</span>
                </p>
                <p className="text-xl font-bold">
                  Total Amount: <span>{currency}{getTotalAmount()}</span>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Payment Section */}
        <div className="flex-1 w-full md:w-auto bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-medium mb-4">Payment Information</h2>

          <form>
            <div className="mb-4">
              <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">
                Cardholder's Name
              </label>
              <input
                type="text"
                id="cardName"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                placeholder="Enter cardholder's name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                placeholder="Enter card number"
              />
            </div>

            <div className="flex space-x-4 mb-4">
              <div className="w-1/2">
                <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                  placeholder="MM/YY"
                />
              </div>

              <div className="w-1/2">
                <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                  CVC
                </label>
                <input
                  type="text"
                  id="cvc"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                  placeholder="CVC"
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
            >
              Pay
              {/* Pay {currency}{getTotalAmount()} */}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;