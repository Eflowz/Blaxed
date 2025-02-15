import React from 'react'
import Hero from '../components/Hero';
import BestSeller from '../components/BestSeller';
import NewsLetterBox from '../components/NewsLetterBox';
import Limited from '../components/Limited';
import AllCategories from '../components/category/AllCategories';
import Display from '../components/Disker/Display';


const Home = () => {
  return (
    <div>
      <Hero/>
      <Limited endDate="2025-02-15T23:59:59"/>
      <BestSeller/>
      <AllCategories/>
      <Display/>
      <NewsLetterBox/>
    </div>
  )
}

export default Home;