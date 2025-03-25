import React from 'react'
import What from '../assets/presets/water.png'


const Whatsapp = () => {
    const phoneNumber= '+12242328459'
  return (
    <a
    href={`https://wa.me/${phoneNumber}`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 left-6 z-50"
  >       
      <div className="bg-white p-2  rounded-full shadow-lg hover:bg-green-400 transition duration-300">
        <img src={What} alt="" className='w-[50px] ' />        
    </div>
    </a>
  )
}

export default Whatsapp