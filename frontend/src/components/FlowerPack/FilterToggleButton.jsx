import React from 'react'

const FilterToggleButton = ({ showSidebar, toggleSidebar }) => {
    return (
      <button
        className="bg-green-500 text-white px-4 py-2 rounded lg:hidden 
          mobile-lgp:text-sm
          mobile-lgo:text-sm
          mobile-xzl:text-sm"
        onClick={toggleSidebar}
      >
        {showSidebar ? 'Hide Filters' : 'Show Filters'}
      </button>
    );
  };
  
  export default FilterToggleButton;