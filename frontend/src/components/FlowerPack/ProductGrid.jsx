import React from 'react'
import ProductItem from "../ProductItem";

const ProductGrid = ({ products }) => {
  return (
    <div className="grid 
      mobile-xzl:grid-cols-1
      mobile-lge:grid-cols-1
      mobile-lgo:grid-cols-1
      mobile-lgp:grid-cols-1
      grid-cols-2 md:grid-cols-3  
      md:gap-5 lg:grid-cols-3 
      gap-6 lg:gap-8">
      {products.map((item) => (
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
  );
};

export default ProductGrid;