import React, {useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroimage from '../assets/profilepic1b.png'
import { TypeAnimation } from 'react-type-animation'
// import myCV from '../assets/Ikashi-Ishieka-CV.pdf'


const Hero = ({ darkMode }) => {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in ms
            once: false, // Whether animation should happen only once
        });
    }, []);

  return (
    <div data-aos="flip-up" data-aos-delay="200" className="bg-blue-500 dark:bg-black mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] min-h-[70vh] mx-auto py-8 rounded-lg">
      
      {/* hero image */} 
        <div className='col-span-1 my-auto mx-auto'>
            <div className='w-[300px] h-auto lg:w-[400px] rounded-lg'>
                <img 
                                className='rounded-lg border-4 border-white dark:border-black md:rounded-3xl' 
                    src={heroimage}alt='homepage_banner'
                />
            </div>
        </div>


        {/* hero text */} 
        <div className='col-span-2 px-5 my-auto'>
            <h1 className='text-white text-3xl sm:text-4xl lg:text-7xl font-extrabold'>
                <span className='primary-color'>
                    I'm a
                </span> <br />
                <TypeAnimation
                sequence={[
                    "UI/UX Designer",
                    1000,
                    "Software Developer",
                    1000,
                    "Business Analyst",
                    1000,
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}
                />
            </h1>
            <p className='text-white sm:text-lg my-6 lg:text-xl'>
                My name is Ikashi Ishieka and I have 4 years experience in Software development.
            </p>

            <div className='my-8 '>

                {/* <a href={myCV} download='ikashi-ishieka-CV' className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br
                from-orange-500 to-pink-500 text-white hover:text-gray-700 hover:font-extrabold'>
                    Download CV
                </a> */}

                <a href="#contact" className='px-9 py-6 w-full rounded-xl mr-4 bg-gradient-to-br
                from-orange-500 to-pink-500 text-white hover:text-blue-200 hover:font-bold'>
                    Contact Me
                </a>
            </div>

        </div>

    </div>
  )
}

export default Hero
