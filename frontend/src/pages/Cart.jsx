import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { FaTrashAlt } from 'react-icons/fa';
import Bottom from '../components/FinalPrep/Bottom';
import CheckoutProgress from '../components/Checkbars/CheckoutProgress'; 
import MinimumOrderAlert from '../components/Checkbars/MinimumOrderAlert'; 

const Cart = () => {
  const { cart, removeFromCart, addToCart, getTotalItems, currency } = useContext(ShopContext);

  const handleIncrement = (item) => {
    addToCart(item._id, item.name, item.price, item.image);
  };

  const handleDecrement = (item) => {
    if (item.amount > 1) {
      addToCart(item._id, item.name, item.price, item.image, -1);
    } else {
      removeFromCart(item._id);
    }
  };

  const subtotal = cart.reduce((total, item) => total + item.price * item.amount, 0);
  const grandTotal = subtotal;
  const minimumOrderAmount = 50; 

  return (
    <div className="cart-container p-6">
      <CheckoutProgress currentStep={1} className="mb-8 max-w-4xl mx-auto" />

      {cart.length === 0 ? (
        <p className="text-gray-500 text-center">
          Your Cart is Empty.
          <br />
          Add a product to get started.
          <br />
          <br />
          <a href="/">
            <button className='bg-[#5b913b] p-4 rounded-xl text-white'>
              Return to shop
            </button>
          </a>
        </p>
      ) : (
<div className="flex flex-col lg:flex-row gap-12 py-8">
<div className="cart-items lg:w-[750px]">
  <MinimumOrderAlert 
    currentTotal={grandTotal} 
    minimumAmount={minimumOrderAmount} 
    className="mb-6"
  />
  <ul className="space-y-2">
    {cart.map((item) => (
      <div key={item._id} className="flex items-center justify-between py-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover rounded-md"
        />
        <div className="ml-4 flex-1">
          <h3 className="font-medium">{item.name}</h3>
          <p className="text-gray-500">
            {currency}
            {item.price}
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => handleDecrement(item)}
            className="px-3 py-1 bg-yellow-500 text-white rounded-md"
          >
            -
          </button>
          <span>{item.amount}</span>
          <button
            onClick={() => handleIncrement(item)}
            className="px-3 py-1 bg-blue-500 text-white rounded-md"
          >
            +
          </button>
          <button
            onClick={() => removeFromCart(item._id)}
            className="text-red-500 hover:text-red-700"
          >
            <FaTrashAlt size={20} />
          </button>
        </div>
      </div>
    ))}
  </ul>
</div>
      {/* Cart Summary (Right Side) */}
<div>
<div className="cart-summary lg:w-[500px] mt-6 lg:mt-0 p-4 bg-gray-100 rounded-lg shadow-md">
  <h3 className="text-xl font-semibold">Cart Summary</h3>
  <p className="text-lg">Total Items: {getTotalItems()}</p>
  <p className="text-lg">
    Subtotal: {currency}
    {subtotal.toFixed(2)}
  </p>
  <p className="text-lg font-semibold">
    Grand Total: {currency}
    {grandTotal.toFixed(2)}
  </p>  
  <Link
    to={{
      pathname: grandTotal >= minimumOrderAmount ? '/checkout' : '/',
      state: {
        cart,
        grandTotal, 
        currency,
      },
    }}
  >
    <button 
      className={`mt-4 px-4 py-2 text-white rounded-md shadow w-full ${
        grandTotal >= minimumOrderAmount 
          ? 'bg-green-500 hover:bg-green-600' 
          : 'bg-gray-400 cursor-not-allowed'
      }`}
      disabled={grandTotal < minimumOrderAmount}
    >
      {grandTotal >= minimumOrderAmount 
        ? 'Proceed to Checkout' 
        : `Minimum order $${minimumOrderAmount} required`}
    </button>
            </Link>
            <Bottom />
    </div>

</div>

        </div>
      )}
    </div>
  );
};

export default Cart;