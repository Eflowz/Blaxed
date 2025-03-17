import React, { useState } from 'react';
import CartSummary from '../components/CartSummary';
import DeliveryForm from '../components/DeliveryForm';
import PaymentForm from '../components/PaymentForm';

const Checkout = () => {
  const [deliveryInfo, setDeliveryInfo] = useState(null);

  const handleDeliverySubmit = (info) => {
    setDeliveryInfo(info);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4 text-center">Checkout</h1>

      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Left Side: Cart Summary & Delivery Form */}
        <div className="flex-1 w-full space-y-6">
          <CartSummary />
          <DeliveryForm onSubmit={handleDeliverySubmit} />
        </div>

        {/* Right Side: Payment Form */}
        {deliveryInfo && (
          <div className="flex-1 w-full space-y-6">
            <PaymentForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
