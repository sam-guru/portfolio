import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import proj1 from '../assets/mig-check.png';
import proj2 from '../assets/fertzmall.png';
import proj5 from '../assets/proj5.png';


const projects = [
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
    description: 'A scrapping website that curates agricultural plant health products from Nigerian platforms.',
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
      duration: 1000, // Animation duration in ms
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className='max-w-[1200px] mx-auto p-5' id='work'>
      <div data-aos='fade-right' data-aos-delay='200' className='pb-8'>
        <p className='text-4xl mb-3 font-bold primary-color'>Work</p>
        <p className='text-gray-100'>Check out some of my recent work</p>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 2 } 
        }}
        modules={[Pagination, Autoplay]}
        className='mySwiper'
      >
        {projects.map((proj, index) => (
          <SwiperSlide key={index}>
            <div
              data-aos='fade-up'
              data-aos-delay={proj.delay}
              className='flex flex-col items-center h-full'
            >
              <div className='text-center mb-4'>
                <span className='text-2xl font-bold text-gray-300 tracking-wider'>{proj.title}</span>
                <p className='text-gray-200 mt-2'>{proj.description}</p>
                <p className='text-gray-200 mt-2 border-t border-gray-300 pt-2'>Project Tech: {proj.tech}</p>
              </div>
              <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                              shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                              h-[200px] bg-cover relative'>
                <img src={proj.image} alt={`${proj.title} screenshot`} className='object-cover w-full h-full' />
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex 
                                flex-col justify-center items-center'>
                  <div className='pt-8 text-center'>
                    <a href={proj.link} target='_blank' rel='noopener noreferrer'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 hover:text-blue-700
                                          font-bold text-lg'>
                        Live
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Work;
