import React, { useState } from 'react';
import { FiMapPin, FiGlobe } from 'react-icons/fi';

const Lang = () => {
  const [location, setLocation] = useState('Holyoke, MA');
  const [language, setLanguage] = useState('English');

  return (
    <div className='flex flex-col justify-end bg-black text-white px-6 py-3 sm:flex-row sm:space-x-4'>
      <div className="flex items-center space-x-1 text-sm mt-1">
        <FiMapPin className="mr-1" />
        <p className='text-md'>Change Location:</p>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="bg-black text-gray-400 hover:text-white border-none outline-none"
        >
          <option value="Holyoke, MA">Holyoke, MA</option>
          <option value="New York, NY">New York, NY</option>
          <option value="Los Angeles, CA">Los Angeles, CA</option>
          <option value="Chicago, IL">Chicago, IL</option>
        </select>
      </div>
      <div className="flex items-center space-x-1 text-sm mt-1 sm:mt-0">
        <FiGlobe className="mr-1" />
        <p className='text-md'>Change Language:</p>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-black text-gray-400 hover:text-white border-none outline-none"
        >
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
          <option value="German">German</option>
          <option value="Swahili">Swahili</option>
        </select>
      </div>
    </div>
  );
}

export default Lang;