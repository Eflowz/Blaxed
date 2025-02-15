import React from 'react';
import Slider from 'react-slick';
import Image2 from '../assets/presets/category-image-flower.png';  
import Image3 from '../assets/presets/phkj.webp';  
import Image4 from '../assets/presets/m-80.webp';  

const sliderSettings = {
  autoplay: true, 
  autoplaySpeed: 1000, 
  arrows: false, 
  dots: false, 
  infinite: true, 
  speed: 5000, 
  fade: true, 
};

const Hero = () => {
  return (
    <div className='px-4 sm:px-[2vw] md:px-[2vw] lg:px-[3vw]'>
      <div className='flex flex-col sm:flex-row border border-gray-400 '>
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
          <div className="text-[rgb(65,65,65)]">
            <div className='flex items-center gap-2'> 
              <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
              <p className='font-medium text-sm md:text-base'>OUR BEST SELLERS</p>
            </div>
            <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>BODY RELAXERS</h1>
            <div className='flex items-center gap-2'>
              <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
              <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2">
          <Slider {...sliderSettings}>
            <div>
              <img src={Image2} alt="image 2" className='w-full  lg:h-[400px] lg:w-auto lg:ml-[300px] fade-out' />
            </div>
            <div>
              <img src={Image3} alt="image 3" className='w-full  lg:h-[400px] lg:w-auto  fade-out lg:ml-[300px]' />
            </div>
            <div>
              <img src={Image4} alt="image 3" className='w-full  lg:h-[400px] lg:w-auto  fade-out lg:ml-[300px]' />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Hero;
