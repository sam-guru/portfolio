import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // 1. Added Navigation CSS
import { Pagination, Autoplay, Navigation } from 'swiper/modules'; // 2. Added Navigation module
import { Swiper, SwiperSlide } from 'swiper/react';
import proj1 from '../assets/mig-check.png';
import proj2 from '../assets/fertzmall.png';
import proj5 from '../assets/proj5.png';
import globalbank from '../assets/global-bank.png';
import kryze from '../assets/kryze-collections.png'; 


import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'; 

const projects = [
  {
    title: 'Kryze Collections',
    description: 'A premium e-commerce platform for fashion, featuring a custom admin dashboard, secure user authentication, cloud-based image storage, and a fully responsive shopping cart experience.',
    tech: 'PHP, Laravel 13, Alpine.js, TailwindCSS, MySQL',
    image: kryze,
    link: 'https://kryze.co.uk',
    delay: 200
  },
  {
    title: 'Global Bank',
    description: 'A web banking simulation that enables secure user authentication, transaction PIN protection, internal and external fund transfers, deposits, real-time notifications, and comprehensive transaction history.',
    tech: 'Html, PHP, Laravel, etc.',
    image: globalbank,
    link: 'https://globalbank-main-0tlfhs.laravel.cloud/',
    delay: 300
  },
  {
    title: 'Migration Check',
    description: 'A web application designed to help users assess their eligibility for migration to Germany.',
    tech: 'Html, React, Next.js, Node.js, etc.',
    image: proj1,
    link: 'https://migration-check.com/',
    delay: 300
  },
  {
    title: 'Fertz Mall',
    description: 'A web application that utilizes web scraping techniques to gather agricultural health product data from diverse Nigerian online retailers, storing and presenting the information through a centralized and searchable web interface.',
    tech: 'Html, Python, Django, Selenium, etc.',
    image: proj2,
    link: 'https://kashii96.pythonanywhere.com/',
    delay: 200
  },
  {
    title: 'Portfolio',
    description: 'A personal portfolio showcasing my projects, skills, and professional journey as a developer.',
    tech: 'Html, React, Node.js, TailwindCSS, etc.',
    image: proj5,
    link: '/',
    delay: 300
  }
];

const Work = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className='scroll-mt-[120px] max-w-[1200px] mx-auto p-5' id='work'>
      <div data-aos='fade-right' data-aos-delay='200' className='pb-8'>
        <p className='text-4xl mb-3 font-bold primary-color'>Work</p>
        <p className='text-gray-100 pb-20'>Check out some of my recent work</p>
      </div>

      {/* main container for swiper and buttons */}
      <div className='relative px-4 md:px-12'> 
        
        {/* left button */}
        <button 
          className='prev-btn absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-gray-800/80 
                     rounded-full text-white hover:bg-blue-500 transition-all shadow-lg cursor-pointer
                     hidden md:flex items-center justify-center'
        >
          <IoIosArrowBack size={28} />
        </button>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false
          }}
          navigation={{
            prevEl: '.prev-btn',
            nextEl: '.next-btn',
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 2 } 
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className='mySwiper h-full'
        >
          {projects.map((proj, index) => (
            <SwiperSlide key={index} className='flex h-full'> 
              <div
                data-aos='fade-up'
                data-aos-delay={proj.delay}
                className='flex flex-col items-center w-full h-full bg-transparent'
              >
                <div className='text-center mb-4 flex-grow flex flex-col'>
                  <span className='text-2xl font-bold text-gray-300 tracking-wider'>{proj.title}</span>
                  <p className='text-gray-200 mt-2'>{proj.description}</p>
                </div>

                <div className='w-full'>
                  <p className='text-gray-200 mt-2 border-t border-gray-300 pt-2 mb-4 text-center'>
                    Project Tech: {proj.tech}
                  </p>
                  <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                                  shadow-lg shadow-[#dce312] group container rounded-md flex justify-center items-center
                                  h-[200px] bg-cover relative mx-auto'>
                    <img src={proj.image} alt={`${proj.title} screenshot`} className='object-cover w-full h-full' />
                    <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex 
                                    flex-col justify-center items-center'>
                      <div className='pt-8 text-center'>
                        <a href={proj.link} target='_blank' rel='noopener noreferrer'>
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
            </SwiperSlide>
          ))}
        </Swiper>

        {/* right button */}
        <button 
          className='next-btn absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-gray-800/80 
                     rounded-full text-white hover:bg-blue-500 transition-all shadow-lg cursor-pointer
                     hidden md:flex items-center justify-center'
        >
          <IoIosArrowForward size={28} />
        </button>
      </div>
    </div>
  );
};


export default Work;
