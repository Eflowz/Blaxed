// DeliveryForm.js
import React, { useState } from 'react';

const DeliveryForm = ({ onSubmit }) => {
  const [deliveryInfo, setDeliveryInfo] = useState({ fullName: '', address: '', phoneNumber: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setDeliveryInfo((prevInfo) => ({
      ...prevInfo,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, address, phoneNumber } = deliveryInfo;
    if (fullName && address && phoneNumber) {
      setFormSubmitted(true);
      onSubmit(deliveryInfo);
    } else {
      alert('Please fill in all delivery details.');
    }
  };

  return (
    <div>
      {!formSubmitted ? (
        <div className="p-6 md:w-[800px]">
          <h2 className="text-2xl font-medium mb-4 border-b border-black p-1">Delivery Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="fullName"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                placeholder="Enter your full name"
                value={deliveryInfo.fullName}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">House Address</label>
              <input
                type="text"
                id="address"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                placeholder="Enter your address"
                value={deliveryInfo.address}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                placeholder="Enter your phone number"
                value={deliveryInfo.phoneNumber}
                onChange={handleInputChange}
              />
            </div>

            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600"
            >
              Submit & Continue
            </button>
          </form>
        </div>
      ) : (
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-xl font-medium mb-4">Review Your Delivery Information</h2>
          <div className="space-y-2">
            <p><strong>Full Name:</strong> {deliveryInfo.fullName}</p>
            <p><strong>Address:</strong> {deliveryInfo.address}</p>
            <p><strong>Phone Number:</strong> {deliveryInfo.phoneNumber}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeliveryForm;
