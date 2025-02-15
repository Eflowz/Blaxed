import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypewriterEffect = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [

  'This product is intended for use only by adults 21 years of age or older. Keep these products out of reach of children and pets. Your health and well-being are a priority, so please consume responsibly. Be aware that there may be health risks associated with the consumption of these products. In case of accidental ingestion or overconsumption, immediately contact the National Poison Control Center Hotline at 1-800-222-1222 or call 9-1-1.'

],

      typeSpeed: 50,
      backSpeed: 20,
      loop: true,
      backDelay: 1000,
    });

    return () => {
      typed.destroy(); 
    };
  }, []);

  return (
    <div className='px-8 md:px-[200px]'>
    <div className='text-center mt-5 mb-6 bg-black text-white'>
      <span ref={el}></span>
    </div>
    </div>
  );
};

export default TypewriterEffect;
