import React, { useContext, useEffect } from 'react';
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductItem from './ProductItem';
import { ShopContext } from '../context/ShopContext';
import baddest from '../assets/presets/zebra-stripes.jpg';
import AOS from 'aos'; 
import 'aos/dist/aos.css';  
import { useTranslation } from 'react-i18next'; // Import the translation hook

const BestSeller = () => {
  const { bestSellers } = useContext(ShopContext);
  const { t } = useTranslation(); // Use the translation hook

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <IoIosArrowForward />,
    prevArrow: <IoIosArrowBack />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    AOS.init({
      duration: 700, 
      easing: 'ease', 
      once: false, 
    });
  }, []);

  return (
    <div className="my-10">
      <div
        className="relative text-center text-3xl py-[70px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${baddest})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#f93827] opacity-90"></div>
        <div className="relative z-10">
          <h2 className="font-bold text-white text-5xl sm:text-3xl mb-2" data-aos="fade-up">
            {t('best_sellers')} {/* Translated "Best Sellers" */}
          </h2>
          <p className="w-3/4 m-auto text-sm  sm:text-[16px] md:text-2xl text-white" data-aos="fade-up" data-aos-delay="200">
            {t('experience_best_shop_picks')} {/* Translated "Experience the best, shop our top picks" */}
          </p>
        </div>
      </div>
      <div className="mt-7 px-4 md:px-11">
        <Slider {...settings}>
          {bestSellers.map((item, index) => (
            <div key={index} className="px-2" data-aos="zoom-in" data-aos-delay={index * 100}>
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
        </Slider>
      </div>
    </div>
  );
};

export default BestSeller;
