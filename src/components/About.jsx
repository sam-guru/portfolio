import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutimg from '../assets/myphoto2.png';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      
    });
  }, []);

  return (
    <div className='scroll-mt-[120px] text-black dark:text-white bg-blue-300 dark:bg-black max-w-[1200px] mx-auto my-12 transition-colors duration-300 rounded-lg' id='about'>
      <div className='md:grid md:grid-cols-2 sm:py-16'>
        <div className='mt-4 md:mt-0 text-left flex'>
          <div data-aos='fade-right' className='my-auto mx-6'>
            <h2 className='text-4xl mt-8 md:mt-0 font-bold mb-4 primary-color'>About Me</h2>
              <p className='text-base lg:text-lg text-pretty JSON-friendly'>
                I’m a Software Developer with a First Class BSc in IT & Business Information Systems, experienced in both full-stack development and systems analysis. My work sits at the intersection of building reliable software and understanding exactly how technology supports real business needs. <br /><br />

                On the engineering side, I design and build scalable backend architectures using PHP, Python, and Node.js, alongside modern frontend frameworks. Because my day-to-day work involves requirements gathering, system design, and relational database modeling, I approach development with a holistic mindset that looks far beyond just writing code. <br /><br />

                Whether I am fine-tuning database performance or translating complex business needs into technical specifications, my goal remains the same: to deliver practical, well-structured solutions that make sense for both users and the business.
              </p>


          </div>
        </div>

        <div data-aos='fade-left' data-aos-delay='500' className="py-8 md:py-0">
          <img 
            className="mx-auto rounded-lg border-4 border-white dark:border-gray-700 transition-colors duration-300" 
            src={aboutimg} 
            width={400} 
            height={350} 
            alt="ikashi_ishieka_photo"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
