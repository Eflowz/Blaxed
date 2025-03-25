import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/presets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Add or remove the no-scroll class based on isOpen state
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Cleanup function to remove the class when component unmounts
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const routes = [
    { name: "Home", path: "/" },
    { name: "Flower", path: "/flower" },
    { name: "Pre-Rolls", path: "/prerolls" },
    { name: "Vapes", path: "/vapes" },
    { name: "Edibles", path: "/edibles" },
    { name: "Concentrates", path: "/concentrates" },
    { name: "Apparel", path: "/apparel&accessories" },
    { name: "Collection", path: "/collection" },
  ];

  return (
    <nav className="bg-[#5b913b] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-white text-2xl font-bold">
            <img src={logo} alt="" className="h-[90px] w-[140px] md:h-[90px] md:w-[150px]"/>
          </Link>
        </div>

        {/* Middle Section: Routes */}
        <div className="hidden md:flex ">
          {routes.map((route, index) => (
            <Link
            key={index}
            to={route.path}
      className="text-white px-4 py-2 relative 
                hover:text-[#F8ED8c]
                after:content-[''] after:absolute after:bottom-1 after:left-4 after:w-0 after:h-0.5 after:bg-[#F8ED8c] 
                after:transition-all after:duration-300
                hover:after:w-[calc(100%-2rem)]"
          >
            {route.name}
          </Link>
          ))}
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <div className="space-y-1.5">
              <div className="w-8 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-8 h-[2px] bg-white"></div>
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
      
      <div
        className={`fixed top-0  left-0 h-full w-64 bg-[#5b913b] transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-20`}
      >
        <div className="p-4">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none mb-4"
          >
            <svg
              className="w-8 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          {routes.map((route, index) => (
        <Link
        key={index}
        to={route.path}
        className="block text-white px-4 py-2 relative w-2/4 text-left
                 hover:text-[#F8ED8c]
                 after:content-[''] after:absolute after:bottom-2 after:left-1/2 after:w-0 after:h-[1px] after:bg-[#F8ED8c] 
                 after:transition-all after:duration-500 after:transform after:-translate-x-1/2
                 hover:after:w-[90%] hover:after:h-[2px]"
        onClick={toggleMenu}
      >
        {route.name}
      </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;