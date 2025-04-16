import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutimg from '../assets/aboutme1b.jpg'

const About = () => {
    useEffect(() => {
      AOS.init({
          duration: 1000, // Animation duration in ms
          once: false, // Whether animation should happen only once
      });
  }, []);

  return (
<div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
      
      <div className='md:grid md:grid-cols-2 sm:py-16'>

        <div className='mt-4 md:mt-0 text-left flex'>
            <div data-aos="fade-right" className='my-auto mx-6'>
                <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
                <p className='text-base lg:text-lg'>
                  
                My passion for technology drives me to constantly explore and develop bespoke applications that 
                address everyday challenges. I thrive on creating innovative solutions that not only meet user 
                needs but also enhance their overall experience. This enthusiasm for technology and 
                problem-solving is at the core of my professional identity and motivates me to stay current 
                with emerging trends and continuously improve my skill set. <br /> <br />

                Proficient in both front-end and back-end web development, I have 
                successfully managed numerous web development projects from start to 
                finish. My skill set encompasses a wide range of technologies and 
                frameworks, allowing me to deliver robust and scalable web applications. My 
                ability to handle full-stack development projects ensures that I can contribute 
                effectively to all stages of the development lifecycle, from design to 
                deployment. <br /><br />

                </p>
            </div>
        </div>
    <div data-aos="fade-left" data-aos-delay="500" >
        <img className='mx-auto md:mt-14 rounded-xl md:rounded-3xl py-8 md:py-0' src={aboutimg} width={300} height={250} alt='ikashi_ishieka_photo'/>
</div>

  )
}

export default About
