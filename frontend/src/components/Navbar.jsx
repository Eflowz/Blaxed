import React, { useContext, useState } from 'react';
import {  FiUser} from 'react-icons/fi';
import { FaTimes } from "react-icons/fa";
// import Lang from './Lang';
import { Link, NavLink, useLocation } from 'react-router-dom'; 
import logo from '../assets/presets/logo.png';
import CartIcon from './CartIcon';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); 


  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  const isActive = (path) => location.pathname === path;

 
  return (
    <>
    {/* <Lang/> */}
    <nav className="bg-[#016c4f] top-0 left-0 right-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4 md:p-6">
        <div>
          <Link to="/">
            <img
              src={logo}
              className="h-[90px] w-[120px] md:h-[90px] md:w-[150px]"
              alt="Get High"
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center text-white gap-3 ">
          {/* 
             space-x-3 lg:space-x-4
          */}
           <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p>HOME</p>
                  </NavLink>
                  <NavLink to='/flower'  className={isActive("/flower") ? "bg-[#ffd65a] p-2 rounded" : ""}>FLOWER
                  </NavLink>
                  <NavLink to='/prerolls'  className={isActive("/prerolls") ? "bg-[#ffd65a] p-2 rounded" : ""}>PRE ROLLS</NavLink>
                  <NavLink to='/vapes'  className={isActive("/vapes") ? "bg-[#ffd65a] p-2 rounded" : ""}>VAPES</NavLink>
                  <NavLink to='/edibles'  className={isActive("/edibles") ? "bg-[#ffd65a] p-2 rounded" : ""}>EDIBLES</NavLink>
                  <NavLink to='/concentrates'  className={isActive("/concentrates") ? "bg-[#ffd65a] p-2 rounded" : ""}>CONCENTRATE</NavLink>
                  <NavLink to='/apparel&accessories'  className={isActive("/apparel&accesories") ? "bg-[#ffd65a] p-2 rounded" : ""}>APPAREL & ACCESSORIES</NavLink>
                  <NavLink to='/collection'  className={isActive("/collection") ? "bg-[#ffd65a] p-2 rounded" : ""}>COLLECTION</NavLink>
        </div>

      {/* the last items */}
        <div className="flex items-center gap-3 text-white ">
        
        <div className="group relative">
          <Link to='/login'>
            <FiUser className='w-5 h-5 cursor-pointer' />
          </Link>
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black"> My profile</p>
              <p className="cursor-pointer hover:text-black"> Orders</p>
              
            </div>
          </div>
        </div>
      <CartIcon/>
        </div>



        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            <div className="space-y-[6px]">
              <span className="block w-8 h-0.5 bg-white"></span>
              <span className="block w-5 h-0.5 bg-white"></span>
              <span className="block w-5 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>
        </div>
    

      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-90 z-50 flex flex-col items-center justify-center space-y-6 text-white"
          onClick={toggleMenu}
        >
          <button
            className="absolute top-8 right-8 text-white focus:outline-none"
            aria-label="Close menu"
          >
            <FaTimes size={30} />
          </button>

          {/* Mobile Links */}
          <Link
            to="/"
            className={`text-xl font-semibold hover:text-blue-400 ${isActive("/") ? "bg-[#ffd65a] p-2 rounded" : ""}`}
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/flower"
            className={`text-xl font-semibold hover:text-blue-400 ${isActive("/flower") ? "bg-[#ffd65a] p-2 rounded" : ""}`}
            onClick={toggleMenu}
          >
            Flower
          </Link>
          <Link
            to="/prerolls"
            className={`text-xl font-semibold hover:text-blue-400 ${isActive("/prerolls") ? "bg-[#ffd65a] p-2 rounded" : ""}`}
            onClick={toggleMenu}
          >
            Prerolls
          </Link>
          <Link
            to="/vapes"
            className={`text-xl font-semibold hover:text-blue-400 ${isActive("/vapes") ? "bg-[#ffd65a] p-2 rounded" : ""}`}
            onClick={toggleMenu}
          >
            Vapes
          </Link>
          <Link
            to="/edibles"
            className={`text-xl font-semibold hover:text-blue-400 ${isActive("/edibles") ? "bg-[#ffd65a] p-2 rounded" : ""}`}
            onClick={toggleMenu}
          >
            Edibles
          </Link>
          <Link
            to="/concentrates"
            className={`text-xl font-semibold hover:text-blue-400 ${isActive("/concentrates") ? "bg-[#ffd65a] p-2 rounded" : ""}`}
            onClick={toggleMenu}
          >
            Concentrates
          </Link>
          <Link
            to="/apparel&accessories"
            className={`text-xl font-semibold hover:text-blue-400 ${isActive("/apparel&accessories") ? "bg-[#ffd65a] p-2 rounded" : ""}`}
            onClick={toggleMenu}
          >
            Apparel And Accessories
          </Link>
          <Link
            to="/collection"
            className={`text-xl font-semibold hover:text-blue-400 ${isActive("/collection") ? "bg-[#ffd65a] p-2 rounded" : ""}`}
            onClick={toggleMenu}
          >
            Collection
          </Link>
        </div>
      )}
    </nav>
    
    
    </>
  );
}

export default Navbar;