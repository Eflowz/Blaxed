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

const PreviousArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute z-10 left-0 top-[160px] transform -translate-y-1/2 bg-yellow-500 text-white p-2 rounded-full hover:bg-red-600 transition"
    >
      <IoIosArrowBack size={25} />
    </button>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-[165px] transform -translate-y-1/2 bg-[#f93827] text-white p-2 rounded-full hover:bg-gray-600 transition"
    >
      <IoIosArrowForward size={25} />
    </button>
  );
};

const BestSeller = () => {
  const { bestSellers } = useContext(ShopContext);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
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
            BEST SELLERS
          </h2>
          <p className="w-3/4 m-auto text-xs sm:text-[16px] md:text-2xl text-white" data-aos="fade-up" data-aos-delay="200">
            Experience the best, shop our top picks.
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
