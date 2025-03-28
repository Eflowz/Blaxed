import React, { useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import CartSummary from '../components/CartSummary';
import DeliveryForm from '../components/DeliveryForm';
import PaymentMethodSelector from '../components/Checkbars/PaymentMethodSelector';
import CheckoutProgress from '../components/Checkbars/CheckoutProgress';

const Checkout = () => {
  const [deliveryInfo, setDeliveryInfo] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [orderDetails, setOrderDetails] = useState(null); 
  const [currentStep, setCurrentStep] = useState(1);
  const { cart, currency } = useContext(ShopContext);

  const handleDeliverySubmit = (info) => {
    setDeliveryInfo(info);
  };

  const handlePaymentSubmit = async () => {
    if (!deliveryInfo) {
      alert('Please complete delivery information');
      return;
    }
    if (!paymentMethod) {
      alert('Please select a payment method');
      return;
    }

    const totalAmount = cart.reduce((total, item) => total + item.price * item.amount, 0);

    const order = {
      orderId: Math.floor(Math.random() * 1000000).toString().padStart(6, '0'),
      createdAt: new Date().toISOString(),
      totalAmount: totalAmount.toFixed(2),
      items: cart.map(item => ({
        name: item.name,
        price: item.price,
        quantity: item.amount,
      })),
    };

    try {
      const response = await fetch('http://localhost:4000/api/send-order-confirmation', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ deliveryInfo, paymentMethod, orderDetails: order }), 
      });

      if (response.ok) {
        console.log('Order confirmation sent');
        setOrderDetails(order); 
        setCurrentStep(3); 
      } else {
        const errorData = await response.json();
        console.error('Failed to send order confirmation:', errorData);
        alert('Failed to place order. Please try again later.');
      }
    } catch (error) {
      console.error('Error connecting:', error);
      alert('Failed to place order. Please check your internet connection.');
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <CheckoutProgress
        currentStep={currentStep}
        steps={[
          { id: 1, name: 'Shopping Cart' },
          { id: 2, name: 'Delivery & Payment' },
          { id: 3, name: 'Confirmation' }
        ]}
        className="mb-8"
      />

      {currentStep === 3 ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          {/* Order Confirmation UI */}
          <h2 className="mt-3 text-xl font-medium text-gray-900">Order Placed!</h2>
          <div className="mt-4 text-left max-w-md mx-auto">
            <h3 className="font-medium">Delivery Information:</h3>
            <p>{deliveryInfo?.firstName} {deliveryInfo?.lastName}</p>
            <p>{deliveryInfo?.streetAddress}</p>
            <p>{deliveryInfo?.city}, {deliveryInfo?.state}</p>
            <h3 className="font-medium mt-4">Payment Method:</h3>
            <p>{paymentMethod}</p>
          </div>
          {orderDetails && (
            <p className="mt-4 text-sm text-gray-500">
              Order #: {orderDetails.orderId}
            </p>
          )}
          <div className='mt-12'>
            <a href="/">
              <button className='bg-[#5b913b] p-4 rounded-xl mt-12 text-white'>
                Return to Shopping
              </button>
            </a>
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          {currentStep === 1 && (
            <div className="flex-1 w-full">
              <CartSummary />
              <button
                onClick={() => setCurrentStep(2)}
                className="mt-6 w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Proceed
              </button>
            </div>
          )}

          {currentStep === 2 && (
            <div className="w-full">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:flex-1">
                  <DeliveryForm onSubmit={handleDeliverySubmit} />
                </div>
                <div className="lg:flex-1">
                  <PaymentMethodSelector onPaymentMethodSelect={setPaymentMethod} />
                </div>
              </div>
              <button
                className="mt-6 w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                onClick={handlePaymentSubmit}
              >
                Place Order
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Checkout;
