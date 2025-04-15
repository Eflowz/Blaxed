import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Hero from '../components/Hero';
import BestSeller from '../components/BestSeller';
import NewsLetterBox from '../components/NewsLetterBox';
import Limited from '../components/Limited';
import AllCategories from '../components/category/AllCategories';
import Display from '../components/Disker/Display';

const API_URL = import.meta.env.VITE_API_URL1 || 'http://localhost:4000';
const socket = io(API_URL, {
  transports: ['websocket'], 
});
const Home = () => {
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    const fetchInitialTimer = async () => {
      try {
        const response = await fetch(`${API_URL}/api/currentOffer`);
        const data = await response.json();
        if (data?.endDate) setEndDate(data.endDate);
      } catch (error) {
        console.error('Failed to fetch initial timer:', error);
      }
    };

    fetchInitialTimer();

    socket.on('limitedOfferUpdated', (data) => {
      console.log('Received limitedOfferUpdated:', data);
      setEndDate(data.endDate);
    });

    return () => {
      socket.off('limitedOfferUpdated');
    };
  }, []);

  return (
    <div>
      <Hero />
      <Limited endDate={endDate} />
      <BestSeller />
      <AllCategories />
      <Display />
      <NewsLetterBox />
    </div>
  );
};

export default Home;
