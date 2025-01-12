import React, { useState, useContext} from "react";
import Sidebar from "../components/Sidebar";
import products from "../assets/presets/products";
import { FiSearch} from 'react-icons/fi';
import ProductItem from "../components/ProductItem";

const PreRolls = () => {
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

  const preRollProducts = products.filter((product) => product.prerolls === true);

  const filteredProducts = preRollProducts.filter((product) => {
    const matchesFeatured = selectedFilters.featured.length === 0 || (product.featured && selectedFilters.featured.includes(product.featured.trim())); 
    const matchesSubCategories = selectedFilters.subCategories.length === 0 || (product.subCategories && selectedFilters.subCategories.includes(product.subCategories));
    const matchesBrand = selectedFilters.brands.length === 0 || selectedFilters.brands.includes((product.brand || "").trim());
    const matchesPotencyCBD = selectedFilters.potencyCBD.length === 0 || selectedFilters.potencyCBD.includes(product.potencyCBD);
    const matchesPotencyTHC = selectedFilters.potencyTHC.length === 0 || selectedFilters.potencyTHC.includes(product.potencyTHC);
    const matchesEffects = selectedFilters.effects.length === 0 || 
    (product.effects && selectedFilters.effects.some((selectedEffect) => product.effects.includes(selectedEffect)));
    const matchesStrainType = selectedFilters.strainType.length === 0 || selectedFilters.strainType.includes(product.strainType);
    const matchesWeight = selectedFilters.weight.length === 0 || selectedFilters.weight.includes(product.weight);
    const matchesSearchQuery =
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase());

    return (
      matchesFeatured &&
      matchesSubCategories &&
      matchesPotencyCBD &&
      matchesPotencyTHC &&
      matchesEffects &&
      matchesStrainType &&
      matchesWeight &&
      matchesBrand &&
      matchesSearchQuery
    );
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'Name A-Z') {
      return a.name.localeCompare(b.name);
    } else if (sortOption === 'Name Z-A') {
      return b.name.localeCompare(a.name);
    } else if (sortOption === 'Price: low to high') {
      return a.price - b.price;
    } else if (sortOption === 'Price: high to low') {
      return b.price - a.price;
    } else if (sortOption === 'Potency: high to low') {
      return b.potencyTHC - a.potencyTHC;
    } else if (sortOption === 'Potency: low to high') {
      return a.potencyTHC - b.potencyTHC;
    } else {
      return 0;
    }
  });

  return (
    <div className="flex p-4">
      <div className={`w-1/4 mobile-lgp:w-3/4 
        mobile-lgo:w-3/4
        mobile-lge:w-3/4
        mobile-xzl:w-3/4
        lg:block ${showSidebar ? "block" : "hidden"}`}>
        <Sidebar handleFilterChange={handleFilterChange} />
      </div>

      <div className="w-full pl-2 mt-10">
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

        <div className="flex justify-between items-center mb-4">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded lg:hidden 
            mobile-lgp:text-sm
            mobile-lgo:text-sm
            mobile-xzl:text-sm
            "
            onClick={toggleSidebar}
          >
            {showSidebar ? 'Hide Filters' : 'Show Filters'}
          </button>

          <div className="ml-auto">
            <select value={sortOption} onChange={handleSortChange} className="border rounded p-2 mobile-lgp:w-2/4 
              mobile-lgp:ml-[50%]
              mobile-lgo:w-2/4
              mobile-lgo:ml-[50%]
              mobile-xzl:w-3/4
              mobile-xzl:ml-[20%]
              ">
              <option value="Name A-Z">Name A-Z</option>
              <option value="Name Z-A">Name Z-A</option>
              <option value="Price: low to high">Price: low to high</option>
              <option value="Price: high to low">Price: high to low</option>
              <option value="Potency: low to high">Potency: low to high</option>
              <option value="Potency: high to low">Potency: high to low</option>
            </select>
          </div>
        </div>
        
        {sortedProducts.length === 0 ? (
          <div className="text-center text-xl text-gray-500">No Products Found !</div>
        ) : (
          <div className="grid 
            mobile-xzl:grid-cols-1
            mobile-lge:grid-cols-1
            mobile-lgo:grid-cols-1
            mobile-lgp:grid-cols-1
            grid-cols-2 md:grid-cols-3  
            md:gap-5 lg:grid-cols-3 
            gap-6 lg:gap-8
          ">
            {sortedProducts.map((item) => (
              <div key={item._id} className="w-full">
                <ProductItem
                  id={item._id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  type={item.type}
                  thc={item.thc}
                  desc={item.desc}
                  description={item.description}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PreRolls;
