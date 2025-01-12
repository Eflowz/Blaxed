import { FiSearch } from "react-icons/fi";
import { useState } from "react";

const SearchComponent = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <FiSearch
        onClick={() => setShowSearch((prev) => !prev)}
        className="w-5 h-5 cursor-pointer"
      />

      {showSearch && (
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          className="border p-2 text-black"
          placeholder="Search..."
        />
      )}
    </div>
  );
};

export default SearchComponent;
