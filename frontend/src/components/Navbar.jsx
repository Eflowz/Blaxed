import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/presets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const routes = [
    { name: "Home", path: "/" },
    { name: "Flower", path: "/flower" },
    { name: "Pre-Rolls", path: "/prerolls" },
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
              className="text-white hover:bg-blue-700 px-4 py-2 rounded"
            >
              {route.name}
            </Link>
          ))}
        </div>

        {/* Right Section: Login & Sign Up */}
        <div className="hidden md:flex space-x-3">
          <button className="text-white hover:bg-blue-700 px-4 py-2 rounded">
            Login
          </button>
          <button className="text-white hover:bg-blue-700 px-4 py-2 rounded">
            Sign Up
          </button>
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
      <div
        className={`fixed top-[50px] left-0 h-full w-64 bg-[#5b913b] transform ${
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
              className="block text-white hover:bg-blue-700 w-full text-left px-4 py-2 rounded"
              onClick={toggleMenu}
            >
              {route.name}
            </Link>
          ))}
          <button className="block text-white hover:bg-blue-700 w-full text-left px-4 py-2 rounded mt-2">
            Login
          </button>
          <button className="block text-white hover:bg-blue-700 w-full text-left px-4 py-2 rounded mt-2">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
