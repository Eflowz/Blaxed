import React from "react";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800">Thank You!</h1>
        <p className="text-gray-600 mt-4">
          Your submission has been received. We will get back to you shortly.
        </p>
        <a href="/">
        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all">
          
          Return to Home
        </button>
        </a>
      </div>
    </div>
  );
};

export default ThankYouPage;
