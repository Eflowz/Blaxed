import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; 
import Image from '../assets/presets/intro-bg.jpg'; 

const MultiStepForm = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [isAbove21, setIsAbove21] = useState(null);
  const [hasAgreed, setHasAgreed] = useState(null);
  const navigate = useNavigate();

  const handleNext = () => {
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
      navigate('/'); 
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="text-center p-8">
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
                <p className="mb-4">Access the main content 🍀🍀</p>
                <button onClick={handleComplete}>
  <div className="flex items-center justify-center">
    <div className="relative group">
      <button
        className="relative inline-block p-px font-semibold leading-6 text-white bg-neutral-900 shadow-2xl cursor-pointer rounded-2xl shadow-emerald-900 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-emerald-600"
      >
        <span
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        ></span>
        <span className="relative z-10 block px-6 py-3 rounded-2xl bg-neutral-950">
          <div className="relative z-10 flex items-center space-x-3">
            <span
              className="transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-green-400 text-sm"
            >
              Begin Journey
            </span>
          </div>
        </span>
      </button>
    </div>
  </div>
</button>

              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-4">Not Eligible</h2>
                <p className="mb-4">Sorry, you are not eligible to enter.</p>
                <button
                  className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded transition duration-300"
                  onClick={() => setStep(1)} 
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
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Image})` }}
    >
      <div className="multi-step-form max-w-lg w-full p-6 bg-white shadow-lg rounded-md bg-opacity-90">
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
