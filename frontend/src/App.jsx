import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Flower from './pages/Flower'
import PreRoll from './pages/PreRoll'
import Vapes from './pages/Vapes'
import Edibles from './pages/Edibles'
import Concentrate from './pages/Concentrate';
import Cart from './pages/Cart'
import Apparel from './pages/Apparel'
import Collection from './pages/Collection'
import AllCategories from './components/category/AllCategories';
import Footer from './components/Footer';
import ShopProvider from './context/ShopContext'; 

const App = () => {
  return (
    <div >
      <ShopProvider>
      <Navbar/>
      <ToastContainer/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/" element={<AllCategories />} />
        <Route path="/flower" element={<Flower />} />
        <Route path="/prerolls" element={<PreRoll />} />
        <Route path="/vapes" element={<Vapes />} />
        <Route path="/edibles" element={<Edibles />} />
        <Route path="/concentrates" element={<Concentrate />} />
        <Route path="/apparel&accessories" element={<Apparel />} />
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/cart' element={<Cart/>}/>
        
      </Routes>

      <Footer/>
      </ShopProvider>
      
      </div>
  )
}

export default App