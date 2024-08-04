import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import proj1 from '../assets/mig-check.png';
import proj2 from '../assets/fertzmall.png';
import proj5 from '../assets/proj5.png';

const Work = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className='max-w-[1200px] mx-auto p-5' id='work'>
      <div data-aos="fade-right" data-aos-delay="300" className='pb-8'>
            <p className='text-4xl mb-3 font-bold primary-color'>Work</p>
            <p className='text-gray-400'>Check out some of my recent work</p>
        </div>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {/* Migration Check */}
        <div data-aos="fade-up" data-aos-delay="300" className='flex flex-col items-center'>
          <div className='text-center mb-4'>
            <span className='text-2xl font-bold text-gray-800 tracking-wider'>Migration Check</span>
            <p className='text-gray-600 mt-2'>
              A web application designed to help users assess their eligibility for migration to Germany.
            </p>
            <p className='text-gray-600 mt-2 border-top-10'>
              Project was built using React, NodeJS, TailwindCSS, etc.
            </p>
          </div>
          <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                          shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                          h-[200px] bg-cover relative'>
            <img src={proj1} alt='migrationCheckImage' className='object-cover w-full h-full'/>
            <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex 
                            flex-col justify-center items-center'>
              <div className='pt-8 text-center'>
                <a href="https://migration-check.com/" target='_blank' rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700
                                      font-bold text-lg'>
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Fertz Mall */}
        <div data-aos="fade-up" data-aos-delay="200" className='flex flex-col items-center'>
          <div className='text-center mb-4'>
            <span className='text-2xl font-bold text-gray-800 tracking-wider'>Fertz Mall</span>
            <p className='text-gray-600 mt-2'>
              An e-commerce platform offering a wide range of products with user-friendly shopping experiences.
            </p>
            <p className='text-gray-600 mt-2 border-top-10'>
              Project was built using Python, Django, TailwindCSS, Selenium, etc.
            </p>
          </div>
          <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                          shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                          h-[200px] bg-cover relative'>
            <img src={proj2} alt="fertzMall_logo" className='object-cover w-full h-full'/>
            <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex 
                            flex-col justify-center items-center'>
              <div className='pt-8 text-center'>
                <a href="https://kashii96.pythonanywhere.com/" target='_blank' rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700
                                      font-bold text-lg'>
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio */}
        <div data-aos="fade-up" data-aos-delay="300" className='flex flex-col items-center'>
          <div className='text-center mb-4'>
            <span className='text-2xl font-bold text-gray-800 tracking-wider'>Portfolio</span>
            <p className='text-gray-600 mt-2'>
              A personal portfolio showcasing my projects, skills, and professional journey as a developer.
            </p>
            <p className='text-gray-600 mt-2 border-top-10'>
              Project was built using React, NodeJS, TailwindCSS, etc.
            </p>
          </div>
          <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                          shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                          h-[200px] bg-cover relative'>
            <img src={proj5} alt="demo_logo" className='object-cover w-full h-full'/>
            <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex 
                            flex-col justify-center items-center'>
              <div className='pt-8 text-center'>
                <a href="/" target='_blank' rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700
                                      font-bold text-lg'>
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
