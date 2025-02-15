import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { motion, AnimatePresence } from 'framer-motion'; 

const MultiStepForm = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [isAbove21, setIsAbove21] = useState(null);
  const [hasAgreed, setHasAgreed] = useState(null);
  const navigate = useNavigate();

  const handleNext = () => {
    if (step === 1 && isAbove21 === null) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Please answer the question.',
      });
      return;
    }
    if (step === 2 && hasAgreed === null) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Please agree to the terms.',
      });
      return;
    }
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleComplete = () => {
    if (isAbove21 && hasAgreed) {
      if (onComplete) {
        onComplete(); 
      }
      Swal.fire({
        icon: 'success',
        title: '',
        text: 'WELCOME.',
      }).then(() => {
        navigate('/'); 
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Not Eligible',
        text: 'Sorry, you are not eligible to enter.',
      });
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Are you above 21 years old?</h2>
            <button
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded mr-2 transition duration-300"
              onClick={() => {
                setIsAbove21(true);
                handleNext(); 
              }}
            >
              Yes
            </button>
            <button
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
              onClick={() => {
                setIsAbove21(false);
                handleNext(); 
              }}
            >
              No
            </button>
          </div>
        );
      case 2:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Do you agree to the terms and conditions?</h2>
            <button
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded mr-2 transition duration-300"
              onClick={() => {
                setHasAgreed(true);
                handleNext(); 
              }}
            >
              Yes
            </button>
            <button
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
              onClick={() => {
                setHasAgreed(false);
                handleNext();
              }}
            >
              No
            </button>
          </div>
        );
      case 3:
        return (
          <div className="text-center">
            {isAbove21 && hasAgreed ? (
              <>
                <h2 className="text-2xl font-bold mb-4">Welcome!</h2>
                <p className="mb-4">You can now access the main content.</p>
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition duration-300"
                  onClick={handleComplete}
                >
                  Go to Home
                </button>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-4">Not Eligible</h2>
                <p className="mb-4">Sorry, you are not eligible to enter.</p>
                <button
                  className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded transition duration-300"
                  onClick={() => setStep(1)} // Restart the form
                >
                  Restart
                </button>
              </>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-green-100">
      <div className="multi-step-form max-w-lg w-full p-6 bg-white shadow-lg rounded-md">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between mt-4">
          {step > 1 && step < 3 && (
            <button
              className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
              onClick={handlePrevious}
            >
              Previous
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
