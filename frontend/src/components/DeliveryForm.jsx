// DeliveryForm.js
import React, { useState } from 'react';

const DeliveryForm = ({ onSubmit }) => {
  const [deliveryInfo, setDeliveryInfo] = useState({
    firstName: '',
    lastName: '',
    country: 'United States',
    streetAddress: '',
    apartment: '',
    city: '',
    state: 'California',
    zipCode: '',
    phone: '',
    email: '',
    orderNotes: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const countries = ['United States', 'Canada', 'United Kingdom', 'Australia'];
  const states = ['California', 'New York', 'Texas', 'Florida'];

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setDeliveryInfo((prevInfo) => ({
      ...prevInfo,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all required fields are filled
    const requiredFields = ['firstName', 'lastName', 'streetAddress', 'city', 'state', 'zipCode', 'phone', 'email'];
    const isFormValid = requiredFields.every(field => deliveryInfo[field].trim() !== '');
    
    if (isFormValid) {
      setFormSubmitted(true);
      onSubmit(deliveryInfo);
    } else {
      alert('Please fill in all required delivery details.');
    }
  };

  return (
    <div>
      {!formSubmitted ? (
        <div className="p-6 ">
          <h2 className="text-2xl font-medium mb-4 border-b border-black p-1">Billing Details</h2>
          <form onSubmit={handleSubmit}>
            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                  placeholder="Enter your first name"
                  value={deliveryInfo.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                  placeholder="Enter your last name"
                  value={deliveryInfo.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {/* Country Dropdown */}
            <div className="mb-4">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country/Region *</label>
              <select
                id="country"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                value={deliveryInfo.country}
                onChange={handleInputChange}
              >
                {countries.map((country) => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>

            {/* Street Address */}
            <div className="mb-4">
              <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700">Street Address *</label>
              <input
                type="text"
                id="streetAddress"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                placeholder="House number and street name"
                value={deliveryInfo.streetAddress}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Apartment */}
            <div className="mb-4">
              <label htmlFor="apartment" className="block text-sm font-medium text-gray-700">Apartment, suite, unit, etc. (optional)</label>
              <input
                type="text"
                id="apartment"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                placeholder="Apartment, suite, unit, etc."
                value={deliveryInfo.apartment}
                onChange={handleInputChange}
              />
            </div>

            {/* City & State */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">Town/City *</label>
                <input
                  type="text"
                  id="city"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                  placeholder="Enter your town/city"
                  value={deliveryInfo.city}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">State *</label>
                <select
                  id="state"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                  value={deliveryInfo.state}
                  onChange={handleInputChange}
                  required
                >
                  {states.map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* ZIP Code */}
            <div className="mb-4">
              <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">ZIP Code *</label>
              <input
                type="text"
                id="zipCode"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                placeholder="Enter your ZIP code"
                value={deliveryInfo.zipCode}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Phone & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone *</label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                  placeholder="Enter your phone number"
                  value={deliveryInfo.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                  placeholder="Enter your email"
                  value={deliveryInfo.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {/* Order Notes */}
            <div className="mb-6">
              <label htmlFor="orderNotes" className="block text-sm font-medium text-gray-700">Order Notes (optional)</label>
              <textarea
                id="orderNotes"
                rows="4"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                placeholder="Notes about your order, e.g. special notes for delivery"
                value={deliveryInfo.orderNotes}
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
            <p><strong>First name:</strong> {deliveryInfo.firstName} </p>
            <p><strong>Last name:</strong> {deliveryInfo.lastName}</p>
            <p><strong>Country/Region:</strong> {deliveryInfo.country}</p>
            <p><strong>Street address:</strong> {deliveryInfo.streetAddress}</p>
            <p><strong>Apartment:</strong>  {deliveryInfo.apartment}</p>
            <p><strong>Town/City:</strong> {deliveryInfo.city}</p>
            <p><strong>State:</strong> {deliveryInfo.state}</p>
            <p><strong>Zipcode: </strong>{deliveryInfo.zipCode}</p>
            <p><strong>Phone:</strong> {deliveryInfo.phone}</p>
            <p><strong>Email Address:</strong> {deliveryInfo.email}</p>
            {deliveryInfo.orderNotes && <p><strong>Order Notes:</strong> {deliveryInfo.orderNotes}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default DeliveryForm;