import React, { useState } from 'react';

import ZelleIcon from '../../assets/presets/zelle.png';
import ApplePayIcon from '../../assets/presets/ApplePay.png';
import ChimeIcon from '../../assets/presets/Chime.png';
import CardIcon from '../../assets/presets/card.png';
import BitcoinIcon from '../../assets/presets/btc.png';
import CashAppIcon from '../../assets/presets/cashapp.png';
import PayPalIcon from '../../assets/presets/Paypal.png';
import VenmoIcon from '../../assets/presets/Venmo.png';
import Bottom from '../FinalPrep/Bottom';

const PaymentMethodSelector = ({ onPaymentMethodSelect }) => {


  const [selectedMethod, setSelectedMethod] = useState(null);
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvv: ''
  });

  const paymentMethods = [
    { name: 'Zelle pay', icon: ZelleIcon },
    { name: 'Apple Pay', icon: ApplePayIcon },
    { name: 'Chime Instant transfers', icon: ChimeIcon },
    { name: 'Debit/Credit Card', icon: CardIcon, hasDetails: true },
    { name: 'Bitcoin', icon: BitcoinIcon },
    { name: 'Cash App', icon: CashAppIcon },
    { name: 'PayPal', icon: PayPalIcon },
    { name: 'Venmo', icon: VenmoIcon },
  ];

  const handleMethodSelect = (method) => {
    const newMethod = selectedMethod === method ? null : method;
    setSelectedMethod(newMethod);
    if (onPaymentMethodSelect) {
      onPaymentMethodSelect(newMethod);
    }
  };

  const handleCardInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
    <div className="space-y-4">
      <h3 className="text-lg mt-4 font-medium">Payment Method</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-1 gap-3">
        {paymentMethods.map(method => (
          <React.Fragment key={method.name}>
            <div 
              className={`p-3 border rounded-lg cursor-pointer transition-colors flex items-center
                ${selectedMethod === method.name ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
              onClick={() => handleMethodSelect(method.name)}
            >
              <input
                type="radio"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                checked={selectedMethod === method.name}
                onChange={() => {}}
              />
              <img 
                src={method.icon} 
                alt={method.name} 
                className="w-8 h-8 ml-3 object-contain"
              />
              <label className="ml-3 block text-sm font-medium text-gray-700">
                {method.name}
              </label>
            </div>
            {method.hasDetails && selectedMethod === method.name && (
              <div className="md:col-span-2">
                <div className="mt-2 p-4 border border-gray-200 rounded-lg bg-gray-50">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="md:col-span-2">
        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
        Card Number
        </label>
        <input
        type="text"
        id="cardNumber"
        name="number"
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        placeholder="**** **** **** **** ***"
        value={cardDetails.number}
        onChange={handleCardInputChange}
        />
    </div>
    <div>
        <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700">
        Expiry Date
        </label>
        <input
        type="text"
        id="cardExpiry"
        name="expiry"
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        placeholder="MM/YY"
        value={cardDetails.expiry}
        onChange={handleCardInputChange}
        />
    </div>
    <div>
        <label htmlFor="cardCvv" className="block text-sm font-medium text-gray-700">
        CVV
        </label>
        <input
        type="text"
        id="cardCvv"
        name="cvv"
        className="mt-1 block w-[400px] border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        placeholder="***"
        value={cardDetails.cvv}
        onChange={handleCardInputChange}
        />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="mt-4 flex items-start">
        <div className="flex items-center h-5">
          <input
            id="marketing-email"
            name="marketing-email"
            type="checkbox"
            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="marketing-email" className="font-medium text-gray-700">
            I would like to receive exclusive emails with discounts and product updates
          </label>
        </div>
      </div>
    <Bottom />
    </div>
    </>
  );
};

export default PaymentMethodSelector;