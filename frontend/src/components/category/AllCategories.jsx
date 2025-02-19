import React from 'react';
import { Link } from 'react-router-dom';
import categories from './categories'; 
import baddest from '../../assets/presets/zebra-stripes.jpg'
import { motion } from "framer-motion";

const AllCategories = () => {
  return (
    <div className="my-10">
      <div
          className="relative text-center text-3xl py-[70px] flex items-center justify-center"
          style={{
            backgroundImage: `url(${baddest})`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          data-aos="fade-up"
        >
          <div className="absolute inset-0 bg-[#ff9d23] opacity-90"></div>
          <div className="relative z-10">
            <h2 className="font-bold text-white text-5xl sm:text-3xl">SHOP BY CATEGORY</h2>
            <p className="w-3/4 m-auto text-sm sm:text-[16px] md:text-2xl text-white">
              Explore our wide range of cannabis products and accessories.
            </p>
          </div>
        </div>

        <div className="mt-7 px-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 ">
          {categories.map((category, index) => (
            <Link
                key={index}
                to={category.route}
                className="relative overflow-hidden group rounded-xl "
                data-aos="fade-right"
                data-aos-delay={`${index * 100}`}
            >
              <div
                  className="w-full h-60 bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.image})` }}
              ></div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-100 transition-opacity duration-500">
                <h3 className="text-white text-lg lg:text-2xl font-bold">{category.name}</h3>
              </div>
              <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white text-black px-6 py-2 rounded-full lg:text-lg md:text-md sm:text-sm opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <button className="text-black">Shop Now</button>
              </motion.div>
            </Link>
          ))}
        </div>
    </div>
  );
};

export default AllCategories;
