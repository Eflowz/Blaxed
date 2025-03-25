// CheckoutProgress.js
import React from 'react';

const CheckoutProgress = ({ currentStep }) => {
  const steps = [
    { id: 1, name: 'Cart' },
    { id: 2, name: 'Summary and Checkout' },
    { id: 3, name: 'Confirmation' }
  ];

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center 
                ${currentStep >= step.id ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                {step.id}
              </div>
              <span className={`mt-2 text-sm font-medium 
                ${currentStep >= step.id ? 'text-blue-600' : 'text-gray-500'}`}>
                {step.name}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className={`flex-1 h-1 mx-2 
                ${currentStep > step.id ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CheckoutProgress;