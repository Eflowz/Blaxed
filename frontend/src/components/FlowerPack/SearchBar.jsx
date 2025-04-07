// components/SearchBar.js
import { FiSearch } from 'react-icons/fi';

const SearchBar = ({ searchQuery, handleSearchChange }) => {
  return (
    <div className="flex justify-center items-center mb-6">
      <div className="relative">
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="border rounded p-2 pl-10 pr-4" 
        />
      </div>
    </div>
  );
};

export default SearchBar;