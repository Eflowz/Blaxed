import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Flower from './pages/Flower';
import PreRoll from './pages/PreRoll';
import Vapes from './pages/Vapes';
import Edibles from './pages/Edibles';
import Concentrate from './pages/Concentrate';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Apparel from './pages/Apparel';
import Collection from './pages/Collection';
import AllCategories from './components/category/AllCategories';
import Footer from './components/Footer';
import ShopProvider from './context/ShopContext';
import MultiStepForm from './pages/MultiStepForm';

const App = () => {
  const [hasCompletedForm, setHasCompletedForm] = useState(
    () => localStorage.getItem('hasCompletedForm') === 'true'
  );

  const handleFormCompletion = () => {
    setHasCompletedForm(true);
    localStorage.setItem('hasCompletedForm', 'true');
  };

  // Use a flag to track if the page is being reloaded
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      // Check if the event is a page reload
      if (event.type === 'beforeunload') {
        // Set a temporary flag in sessionStorage to indicate a reload
        sessionStorage.setItem('isReloading', 'true');
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // Check for the reload flag when the component mounts
  useEffect(() => {
    const isReloading = sessionStorage.getItem('isReloading') === 'true';

    if (isReloading) {
      // If it's a reload, clear the reload flag but do not reset hasCompletedForm
      sessionStorage.removeItem('isReloading');
    } else {
      localStorage.removeItem('hasCompletedForm');
      setHasCompletedForm(false);
    }
  }, []);

  return (
    <div>
      <ShopProvider>
        {hasCompletedForm && <Navbar />}
        <ToastContainer />
        <Routes>
          <Route
            path="/form"
            element={<MultiStepForm onComplete={handleFormCompletion} />}
          />

          {/* Redirect to the form if it's not completed */}
          {!hasCompletedForm ? (
            <Route path="*" element={<Navigate to="/form" replace />} />
          ) : (
            <>
              {/* Define each route individually */}
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
            </>
          )}
        </Routes>
        {hasCompletedForm && <Footer />}
      </ShopProvider>
    </div>
  );
};

export default App;
