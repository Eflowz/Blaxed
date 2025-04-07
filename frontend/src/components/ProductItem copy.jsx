import React, { useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { FaEye, FaTimes } from 'react-icons/fa';

const ProductItem = ({ id, image, name, price, type, thc, desc, description }) => {
  const { currency } = useContext(ShopContext);
  const { addToCart } = useContext(ShopContext);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="group text-gray-700 cursor-pointer transition duration-300 ease-in-out transform hover:scale-10">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden md:w-[330px] sm:w-[300px]">
        <div className="relative">
          <img 
            className="w-full h-40 object-cover group-hover:scale-110 transition ease-in-out" 
            src={image[0]} 
            alt={name} 
          />
          {/* <FaEye 
            className="absolute top-[180px] right-2 text-gray-600 cursor-pointer"
            onClick={() => openModal({ id, image, name, price, type, thc, desc, description })}
          /> */}
        </div>
        <div className="p-4">
          <p className="text-lg font-semibold text-gray-800">{name}</p>
          <div className="flex items-center mb-2">
            <span
              className={`rounded-full px-2 py-1 text-xs text-white ${
                type === "Sativa"
                  ? "bg-pink-500"
                  : type === "Hybrid"
                  ? "bg-blue-500"
                  : "bg-orange-500"
              }`}
            >
              {type}
            </span>
          </div>
          {thc && <p className="text-xs text-gray-500 mt-1">THC: {thc}</p>}
          <p className="text-xs text-gray-500 mt-1">{desc}</p>
          <p className="text-xl font-bold text-gray-800 mt-2">{currency}{price}</p>
          <p className="text-xs text-gray-400 mt-1">{description}</p>
          
          <button 
            onClick={() => addToCart(id, name, price, image)} 
            className="bg-green-500 text-white py-2 px-4 rounded w-2/4 md:w-full mt-3"
          >
            Add to cart
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
            <FaTimes 
              className="absolute top-2 right-2 text-gray-600 cursor-pointer" 
              onClick={closeModal} 
            />
            <h3 className="text-xl font-semibold mb-4">{selectedProduct.name}</h3>
            <p className="mb-4">{selectedProduct.description}</p>
            <p className="mb-2">THC: {selectedProduct.thc}</p>
            <p className="mb-2">Type: {selectedProduct.type}</p>
            {/* Newly Added */}
            <p className="mb-4">Price: {currency}{selectedProduct.price}</p>

            <div className="flex items-center justify-between mb-4">
              <span>Quantity:</span>
              <input 
                type="number" 
                min="1" 
                defaultValue="1" 
                className="border px-2 py-1 rounded w-16" 
              />
            </div>
            <button
              onClick={() => addToCart(selectedProduct.id, selectedProduct.name, selectedProduct.price, selectedProduct.image)}
              className="bg-green-500 text-white py-2 px-4 rounded w-full"
            >
              Add to cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductItem;
