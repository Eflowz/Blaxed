import React from 'react'
import Hero from '../components/Hero';
import BestSeller from '../components/BestSeller';
import NewsLetterBox from '../components/NewsLetterBox';
import Limited from '../components/Limited';
import AllCategories from '../components/category/AllCategories';
import Display from '../components/Disker/Display';
import TypewriterEffect from '../components/TypeWriterEffect';


const Home = () => {
  return (
    <div>
      <TypewriterEffect />
      <Hero/>
      <Limited endDate="2025-02-19T23:59:59"/>
      <BestSeller/>
      <AllCategories/>
      <Display/>
      <NewsLetterBox/>
    </div>
  )
}

export default Home;