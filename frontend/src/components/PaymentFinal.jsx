import React from 'react'
import cash from  '../assets/presets/cashapp.png';
import bitcoin from  '../assets/presets/btc.png';
import { MdMessage } from "react-icons/md";


const PaymentFinal = () => {
  return (
    <>
     <div className="mt-4">
    <h4 className="text-red-500 mb-4">*Other payment options</h4>
  
    <div className="flex flex-row  md:flex-row space-x-3 md:space-x-4 space-y-4 md:space-y-0">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 flex items-center justify-center md:w-auto w-full">
        <img src={cash} alt="CashApp Logo" className="mr-2 w-6 h-6" />
        <span>Pay with CashApp</span>
      </button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 flex items-center justify-center md:w-auto w-full">
        <MdMessage className='mr-2 w-8 h-8 text-green-400' />
      <span>Pay with venmo</span>
      </button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 flex items-center justify-center md:w-auto w-full">
      <img src={bitcoin} alt="CashApp Logo" className="mr-2 w-8 h-8" />
      <span>Pay with bitcoin</span>
      </button>
  
     
    </div>
  </div> 
    </>
  )
}

export default PaymentFinal;