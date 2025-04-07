import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import products from "../assets/presets/products";
import SearchBar from "../components/FlowerPack/SearchBar";
import ProductGrid from "../components/FlowerPack/ProductGrid";
import SortDropdown from "../components/FlowerPack/SortDropdown";
import FilterToggleButton from "../components/FlowerPack/FilterToggleButton";
import { filterProducts, sortProducts } from "../utils/filterProducts";
import NoProductsFound from "../components/NoProductsFound";

const Vapes = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    featured: [],
    subCategories: [],
    potencyCBD: [],
    potencyTHC: [],
    effects: [],
    brands: [],
    strainType: [],
    weight: [],
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState('Name A-Z');
  const [showSidebar, setShowSidebar] = useState(false);

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (updatedFilters[filterType].includes(value)) {
        updatedFilters[filterType] = updatedFilters[filterType].filter(
          (item) => item !== value
        );
      } else {
        updatedFilters[filterType].push(value);
      }
      return updatedFilters;
    });
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };


const vapeProducts = products.filter((product) => product.vapes === true);

  const filteredProducts = filterProducts(vapeProducts, selectedFilters, searchQuery);
  const sortedProducts = sortProducts(filteredProducts, sortOption);

  return (
    <div className="flex flex-col lg:flex-row p-4 relative overflow-x-hidden">
      <div className={`fixed lg:static inset-0 z-50 lg:z-auto w-2/4 lg:w-1/4
        transform ${showSidebar ? 'translate-x-0' : '-translate-x-full'} 
        lg:transform-none transition-transform duration-300 ease-in-out
        bg-white lg:bg-transparent shadow-xl lg:shadow-none`}>
        
        
        <Sidebar handleFilterChange={handleFilterChange} />
      </div>
      
      {showSidebar && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      <div className={`w-full lg:w-3/4 pl-0 lg:pl-2 mt-10 ${showSidebar ? 'overflow-hidden' : ''}`}>
        <SearchBar searchQuery={searchQuery} handleSearchChange={handleSearchChange} />
        
        <div className="flex justify-between items-center mb-4">
          <FilterToggleButton showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
          
          <div className="ml-auto">
            <SortDropdown sortOption={sortOption} handleSortChange={handleSortChange} />
          </div>
        </div>
        
        {sortedProducts.length === 0 ? (
          <NoProductsFound />
        ) : (
          <ProductGrid products={sortedProducts} />
        )}
      </div>
    </div>
  );
};

export default Vapes;