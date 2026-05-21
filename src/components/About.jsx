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
              <p className='text-base lg:text-lg'>
                I’m a Software Engineer with a First Class BSc in IT & Business Information Systems, with experience working across both development and systems analysis. My work sits at the intersection of building reliable applications and understanding how technology supports real business needs. <br /><br />

                With a background in full-stack development, I’ve designed and built scalable systems using technologies like Node.js, PHP, and modern frontend frameworks. Alongside development, I’ve worked with requirements, system design, and data, which has shaped my approach to thinking beyond just implementation. <br /> <br />

                I’m particularly interested in how systems are designed end-to-end—from defining requirements and structuring APIs to working with data and improving how applications perform in real use. I’ve also worked with tools like Power BI and Tableau to turn data into insights that support better decisions. <br /> <br />

                Whether I’m building features, analysing system behaviour, or working with stakeholders, my focus is always on delivering practical, well-structured solutions that are reliable and make sense for both users and the business.I’m optimizing database performance or gathering technical requirements for stakeholders, my goal is always the same: to build smart, reliable technology that delivers measurable value.
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
