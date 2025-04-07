import React from 'react'

const SortDropdown = ({ sortOption, handleSortChange }) => {
    return (
      <select 
        value={sortOption} 
        onChange={handleSortChange} 
        className="border rounded p-2 mobile-lgp:w-2/4 
          mobile-lgp:ml-[50%]
          mobile-lgo:w-2/4
          mobile-lgo:ml-[50%]
          mobile-xzl:w-3/4
          mobile-xzl:ml-[20%]"
      >
        <option value="Name A-Z">Name A-Z</option>
        <option value="Name Z-A">Name Z-A</option>
        <option value="Price: low to high">Price: low to high</option>
        <option value="Price: high to low">Price: high to low</option>
        <option value="Potency: low to high">Potency: low to high</option>
        <option value="Potency: high to low">Potency: high to low</option>
      </select>
    );
  };
  
  export default SortDropdown;