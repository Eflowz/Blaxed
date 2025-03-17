import React from 'react';
import cardolo from '../assets/presets/card.png'

import PaymentFinal from './PaymentFinal';

const PaymentForm = () => {
  return (
    <>
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-medium mb-4 border-b border-black p-1">Payment Information</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">Cardholder's Name</label>
          <input
            type="text"
            id="cardName"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            placeholder="Enter cardholder's name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            placeholder="Enter card number"
          />
        </div>

        <div className="flex space-x-4 mb-4">
          <div className="w-1/2">
            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Expiry Date</label>
            <input
              type="text"
              id="expiryDate"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
              placeholder="MM/YY"
            />
          </div>

          <div className="w-1/2">
            <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">CVC</label>
            <input
              type="text"
              id="cvc"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
              placeholder="CVC"
            />
          </div>
        </div>
    <button className="flex items-center bg-blue-500 text-white  py-2 px-4 rounded-lg">
            <img src={cardolo} alt="" className='mr-2 w-10 h-8' />
    <span>Pay with Card</span>
</button>
      </form>
    </div>
    <PaymentFinal/>
    </>
  );
};

export default PaymentForm;
