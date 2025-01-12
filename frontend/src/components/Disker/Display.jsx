import React, { useEffect } from 'react';
import { FaInstagram } from 'react-icons/fa';  
import imgDisplay from './ImageDisplay'; 
import AOS from 'aos';
import 'aos/dist/aos.css';  

function Display() {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      easing: 'ease',
      once: true, 
    });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {imgDisplay.map((image, index) => (
        <a
          key={index}
          href={image.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block group"
          data-aos="fade-up" 
        >
          <img
            src={image.image} 
            alt={`Instagram Image ${index + 1}`}
            className="w-full h-auto object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FaInstagram className="text-white text-3xl" />
          </div>
        </a>
      ))}
    </div>
  );
}

export default Display;
