import React, { useState } from 'react';

const Footer = () => {
    const [location, setLocation] = useState("Holyoke, Massachusetts");

    const locations = [
        "Holyoke, Massachusetts",
        "Boston, Massachusetts",
        "Springfield, Massachusetts",
        "Worcester, Massachusetts"
    ];

    return (
<footer className="bg-black text-white py-8">
<div className="container mx-auto flex flex-col sm:flex-row gap-6 px-4 sm:px-0">
    
    {/* Left: Logo Section */}
    <div className="flex flex-col items-start">
        <img src="/path/to/logo.png" alt="Dazed Logo" className="mb-4 w-24" />
        <p className="text-gray-400">&copy; 2023+</p>
    </div>

    <div className="text-center sm:text-left">
        <h4 className="font-bold text-sm">DISPENSARY HOURS & LOCATION</h4>

        <select 
            value={location} 
            onChange={(e) => setLocation(e.target.value)} 
            className="mt-2 bg-black border border-gray-400 text-white py-2 px-4 rounded">
    {locations.map((loc, index) => (
        <option key={index} value={loc}>
            {loc}
        </option>
    ))}
    </select>

    <p className="text-sm mt-2">
    {location}: Monday to Sunday: 8am – 11pm
    </p>
    <p className="font-bold text-sm mt-4">Press Enquiries:</p>
    <a href="mailto:PR@dazed.fun" className="text-sm">PR@dazed.fun</a>
    <p className="text-sm mt-4">
    For use only by adults 21 years of age and older. Keep out of reach of children and pets. Please consume responsibly. There may be health risks associated with the consumption of this product.
    </p>
    </div>
    <div className="flex flex-col sm:items-end text-center sm:text-right">
    <div className="mb-4">
    <a href="#" className="text-white ml-4">About</a>
    <a href="#" className="text-white ml-4">Order Now</a>
    </div>
    </div>
</div>
        </footer>
    );
};

export default Footer;
