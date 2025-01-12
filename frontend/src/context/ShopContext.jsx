import React, { createContext, useState, useEffect } from 'react';
import productsData from '../assets/presets/products';
import { toast } from 'react-toastify';

export const ShopContext = createContext();

const ShopProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState(""); 
  const [category, setCategory] = useState([]); 
  const [subCategory, setSubCategory] = useState([]); 
  const [currency] = useState('$');
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setProducts(productsData);
    setFilteredProducts(productsData);

    const bestSellingProducts = productsData.filter(product => product.bestseller);
    setBestSellers(bestSellingProducts.slice(0, 6));
  }, []);
  const addToCart = (_id, name, price, image, changeAmount = 1) => {
    const existingItem = cart.find(item => item._id === _id);

    if (existingItem) {
      setCart(cart.map(item =>
        item._id === _id
          ? {
              ...item,
              amount: item.amount + changeAmount,
              totalPrice: (item.amount + changeAmount) * price
            }
          : item
      ));
    } else {
      setCart([...cart, { _id, name, price, amount: 1, totalPrice: price, image }]);
      toast.success('Added to cart successfully!', {
        position: "top-right",
        autoClose: 2000, 
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
      });
    }
  };

  
    
    const removeFromCart = (_id) => {
      setCart(cart.filter(item => item._id !== _id));
    };
  
  // Get total number of items in the cart
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.amount, 0);
  };

  const applyFilter = () => {
    let productsCopy = [...products];

    if (search) {
      productsCopy = productsCopy.filter(item => 
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilteredProducts(productsCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [search, category, subCategory, products]);

  const value = {
    cart,
    addToCart,
    setCart,
    getTotalItems,
    removeFromCart,
    products,
    bestSellers,
    filteredProducts,
    setSearch, 
    setCategory,
    setSubCategory,
    currency,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
