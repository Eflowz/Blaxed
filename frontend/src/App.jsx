import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Flower from './pages/Flower';
import PreRoll from './pages/PreRoll';
import Vapes from './pages/Vapes';
import Edibles from './pages/Edibles';
import Concentrate from './pages/Concentrate';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Apparel from './pages/Apparel';
import Collection from './pages/Collection';
import AllCategories from './components/category/AllCategories';
import Footer from './components/Footer';
import ShopProvider from './context/ShopContext';
import CartIcon from './components/CartIcon'
import Lang from './components/Lang';

const App = () => {
  return (
    <ShopProvider>
      <Lang />
      <Navbar />
      <AnimatePresence exitBeforeEnter>
      <ScrollToTop>
      <ToastContainer />
        <CartIcon/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flower" element={<Flower />} />
        <Route path="/prerolls" element={<PreRoll />} />
        <Route path="/vapes" element={<Vapes />} />
        <Route path="/edibles" element={<Edibles />} />
        <Route path="/concentrates" element={<Concentrate />} />
        <Route path="/apparel&accessories" element={<Apparel />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/all-categories" element={<AllCategories />} />
      </Routes>
      </ScrollToTop>
      </AnimatePresence>
      <Footer />
    </ShopProvider>
  );
};

export default App;
