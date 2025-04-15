import React, { useState, useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import CountdownTimer from '../components/CountdownTimer';
import products from '../assets/presets/products';
import { ShopContext } from "../context/ShopContext";

const Limited = ({ endDate }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [offerEnded, setOfferEnded] = useState(false); 
    const { currency, addToCart } = useContext(ShopContext);
    const limitedProducts = products.filter(product => product.limited === true);

    const openModal = (product) => {
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setSelectedProduct(null);
    };

    const handleOfferEnd = () => {
        setOfferEnded(true); 
    };

    return (
    <div className="limited-offer mt-5">
        <div className='mx-auto sm:px-5 md:px-12 mb-4'>
            {/* <h5 className="text-lg blink">All products available for pickup today.</h5> */}
        </div>
        <div className="container mx-auto">
            <div className="flex space-x-9 items-center">
                <h2 className="text-2xl sm:text-md font-semibold text-red-500 px-4 sm:px-4">Limited Offer</h2>
                <CountdownTimer endDate={endDate} onTimerEnd={handleOfferEnd} />
            </div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
{limitedProducts.map((product, index) => {
const discountedPrice = parseFloat((product.price * 0.6).toFixed(2)); // Discounted price
const displayedPrice = offerEnded ? product.price : discountedPrice; 

return (
<div key={index} className="product bg-white p-4 shadow-md rounded-lg text-left">
    <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover mb-4 rounded"
    />
    <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
    </div>
    <p className="text-sm text-gray-500 mb-2">{product.desc}</p>
    <div className="flex items-center mb-2">
        <span
            className={`rounded-full px-2 py-1 text-xs text-white ${
                product.type === 'Sativa'
                    ? 'bg-pink-500'
                    : product.type === 'Hybrid'
                    ? 'bg-blue-500'
                    : 'bg-orange-500'
            }`}
        >
            {product.type}
        </span>
        <p className="ml-2">THC: {product.thc}</p>
    </div>

    {/* Price Section */}
    <div className="mb-4">
        <p className={`text-gray-500 ${offerEnded ? '' : 'line-through'}`}>
            ${parseFloat(product.price).toFixed(2)} {/* Original price */}
        </p>
        {!offerEnded && (
            <p className="text-red-500 font-bold">
                ${discountedPrice}
            </p>
        )}
    </div>

    <button
        onClick={() =>
            addToCart(product._id, product.name, displayedPrice, product.image)
        }
        className="bg-green-500 text-white py-2 px-4 rounded"
    >
        Add to cart
    </button>
</div>
);
                })}
            </div>

            {/* Modal */}
{selectedProduct && (
<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
<div className="bg-white p-6 rounded-lg w-full max-w-md relative">
    <FaTimes className="absolute top-2 right-2 text-gray-600 cursor-pointer" onClick={closeModal} />
    <h3 className="text-xl font-semibold mb-4">{selectedProduct.name}</h3>
    <p className="mb-4">{selectedProduct.description}</p>
    <p className="mb-2">THC: {selectedProduct.thc}</p>
    <p className="mb-2">Type: {selectedProduct.type}</p>
    <p className="mb-4">Price: {currency}{parseFloat(selectedProduct.price).toFixed(2)}</p>

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
        onClick={() =>
            addToCart(
                selectedProduct._id,
                selectedProduct.name,
                parseFloat(selectedProduct.price).toFixed(2),
                selectedProduct.image
            )
        }
        className="bg-green-500 text-white py-2 px-4 rounded w-full"
    >
        Add to cart
    </button>
                    </div>
                </div>
            )}
        </div>
    </div>
    );
};

export default Limited;
