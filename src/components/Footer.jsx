import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Footer = () => {

  useEffect(() => {
      AOS.init({
          duration: 1000, // Animation duration in ms
          once: false, // Whether animation should happen only once
      });
  }, []);
  return (
    <div className='max-w-[1200px] sm:h-[150px] p-12 flex justify-between mx-auto'>
      <div data-aos="fade-right" data-aos-delay="300">
        <span className='primary-color text-3xl font-black '>I. ISHIEKA</span>
      </div>
      <div data-aos="fade-left" data-aos-delay="300" >
        <p className='text-gray-600 md:pt-0 pt-2'> All rights reserved &#169;2024</p>
      </div>
      
    </div>
  )
}

export default Footer
