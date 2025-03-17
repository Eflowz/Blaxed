import React from 'react'
import Hero from '../components/Hero';
import BestSeller from '../components/BestSeller';
import NewsLetterBox from '../components/NewsLetterBox';
import Limited from '../components/Limited';
import AllCategories from '../components/category/AllCategories';
import Display from '../components/Disker/Display';
// import CartIcon from '../components/CartIcon'
import TypewriterEffect from '../components/TypeWriterEffect';


const Home = () => {
  return (
    <div>
      <TypewriterEffect />
      {/* <CartIcon/> */}
      <Hero/>
      <Limited endDate="2025-03-17T11:59:59"/>
      <BestSeller/>
      <AllCategories/>
      <Display/>
      <NewsLetterBox/>
    </div>
  )
}

export default Home;