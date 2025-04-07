export const filterProducts = (products, selectedFilters, searchQuery) => {
    return products.filter((product) => {
      const matchesFeatured = selectedFilters.featured.length === 0 || 
        (product.featured && selectedFilters.featured.includes(product.featured.trim())); 
      const matchesSubCategories = selectedFilters.subCategories.length === 0 || 
        (product.subCategories && selectedFilters.subCategories.includes(product.subCategories));
      const matchesBrand = selectedFilters.brands.length === 0 || 
        selectedFilters.brands.includes((product.brand || "").trim());
      const matchesPotencyCBD = selectedFilters.potencyCBD.length === 0 || 
        selectedFilters.potencyCBD.includes(product.potencyCBD);
      const matchesPotencyTHC = selectedFilters.potencyTHC.length === 0 || 
        selectedFilters.potencyTHC.includes(product.potencyTHC);
      const matchesEffects = selectedFilters.effects.length === 0 || 
        (product.effects && selectedFilters.effects.some((selectedEffect) => product.effects.includes(selectedEffect)));
      const matchesStrainType = selectedFilters.strainType.length === 0 || 
        selectedFilters.strainType.includes(product.strainType);
      const matchesWeight = selectedFilters.weight.length === 0 || 
        selectedFilters.weight.includes(product.weight);
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
  };
  
  export const sortProducts = (products, sortOption) => {
    return [...products].sort((a, b) => {
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
  };