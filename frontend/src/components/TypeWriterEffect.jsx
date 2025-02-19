import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { useTranslation } from 'react-i18next';

const TypewriterEffect = () => {
  const { t } = useTranslation(); 
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        t('typewriterText'), 
      ],
      typeSpeed: 50,
      backSpeed: 20,
      loop: true,
      backDelay: 1000,
    });

    return () => {
      typed.destroy(); 
    };
  }, [t]); 

  return (
    <div className='px-8 md:px-[200px]'>
      <div className='text-center mt-5 mb-6 bg-black text-white'>
        <span ref={el}></span>
      </div>
    </div>
  );
};

export default TypewriterEffect;
