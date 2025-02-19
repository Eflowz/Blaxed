// import React, { useState } from 'react';
// import { FiMapPin, FiGlobe } from 'react-icons/fi';

// const Lang = () => {
//   const [location, setLocation] = useState('Holyoke, MA');
//   const [language, setLanguage] = useState('English');

//   return (
//     <div className='flex flex-col justify-end bg-black text-white px-6 py-3 sm:flex-row sm:space-x-4'>
//       <div className="flex items-center space-x-1 text-sm mt-1">
//         <FiMapPin className="mr-1" />
//         <p className='text-md'>Change Location:</p>
//         <select
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//           className="bg-black text-gray-400 hover:text-white border-none outline-none"
//         >
//           <option value="Holyoke, MA">Holyoke, MA</option>
//           <option value="New York, NY">New York, NY</option>
//           <option value="Los Angeles, CA">Los Angeles, CA</option>
//           <option value="Chicago, IL">Chicago, IL</option>
//         </select>
//       </div>
//       <div className="flex items-center space-x-1 text-sm mt-1 sm:mt-0">
//         <FiGlobe className="mr-1" />
//         <p className='text-md'>Change Language:</p>
//         <select
//           value={language}
//           onChange={(e) => setLanguage(e.target.value)}
//           className="bg-black text-gray-400 hover:text-white border-none outline-none"
//         >
//           <option value="English">English</option>
//           <option value="Spanish">Spanish</option>
//           <option value="French">French</option>
//           <option value="German">German</option>
//           <option value="Swahili">Swahili</option>
//         </select>
//       </div>
//     </div>
//   );
// }

// export default Lang;

// import React, { useState } from 'react';
// import { FiMapPin, FiGlobe } from 'react-icons/fi';
// import { useTranslation } from 'react-i18next';
// import '../i18n'; // make sure to import the i18n config

// const Lang = () => {
//   const [location, setLocation] = useState('Holyoke, MA');
//   const { t, i18n } = useTranslation();

//   const changeLanguage = (lang) => {
//     i18n.changeLanguage(lang);
//   };

//   return (
//     <div className='flex flex-col justify-end bg-black text-white px-6 py-3 sm:flex-row sm:space-x-4'>
//       <div className="flex items-center space-x-1 text-sm mt-1">
//         <FiMapPin className="mr-1" />
//         <p className='text-md'>{t('changeLocation')}</p>
//         <select
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//           className="bg-black text-gray-400 hover:text-white border-none outline-none"
//         >
//           <option value="Holyoke, MA">Holyoke, MA</option>
//           <option value="New York, NY">New York, NY</option>
//           <option value="Los Angeles, CA">Los Angeles, CA</option>
//           <option value="Chicago, IL">Chicago, IL</option>
//         </select>
//       </div>
//       <div className="flex items-center space-x-1 text-sm mt-1 sm:mt-0">
//         <FiGlobe className="mr-1" />
//         <p className='text-md'>{t('changeLanguage')}</p>
//         <select
//           onChange={(e) => changeLanguage(e.target.value)}
//           className="bg-black text-gray-400 hover:text-white border-none outline-none"
//         >
//           <option value="en">English</option>
//           <option value="es">Spanish</option>
//           <option value="fr">French</option>
//           {/* <option value="de">German</option>
//           <option value="sw">Swahili</option> */}
//         </select>
//       </div>
//     </div>
//   );
// };

// export default Lang;

import React, { useState } from 'react';
import { FiMapPin, FiGlobe } from 'react-icons/fi';
import i18n from '../i18n'; 

const Lang = () => {
  const [location, setLocation] = useState('Holyoke, MA');
  const [language, setLanguage] = useState('English');

  const languageMap = {
    English: 'en',
    Spanish: 'es',
    French: 'fr',
  };

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    i18n.changeLanguage(languageMap[selectedLanguage]);
  };

  return (
    <div className='flex flex-col justify-end bg-black text-white px-6 py-3 sm:flex-row sm:space-x-4'>
      <div className="flex items-center space-x-1 text-sm mt-1">
        <FiMapPin className="mr-1" />
        <p className='text-md'>{i18n.t('changeLocation')}</p>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="bg-black text-gray-400 hover:text-white border-none outline-none"
          aria-label={i18n.t('changeLocation')}
        >
          <option value="Holyoke, MA">Holyoke, MA</option>
          <option value="New York, NY">New York, NY</option>
          <option value="Los Angeles, CA">Los Angeles, CA</option>
          <option value="Chicago, IL">Chicago, IL</option>
        </select>
      </div>
      <div className="flex items-center space-x-1 text-sm mt-1 sm:mt-0">
        <FiGlobe className="mr-1" />
        <p className='text-md'>{i18n.t('changeLanguage')}</p>
        <select
          value={language}
          onChange={handleLanguageChange}
          className="bg-black text-gray-400 hover:text-white border-none outline-none"
        >
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>
      </div>
    </div>
  );
}

export default Lang;

