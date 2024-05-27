import React from 'react'
import heroimage from '../assets/profilepic1b.png'
import { TypeAnimation } from 'react-type-animation'
import myCV from '../assets/Ikashi-Ishieka-CV.pdf'


const Hero = () => {
  return (
    <div className='mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black'>
      
      {/* hero image */} 
        <div className='col-span-1 my-auto mx-auto'>
            <div className='w-[300px] h-auto lg:w-[400px]'>
                <img src={heroimage} alt="hero image" />
            </div>
        </div>


        {/* hero text */} 
        <div className='col-span-2 px-5 my-auto'>
            <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
                <span className='primary-color'>
                    I'm a
                </span> <br />
                <TypeAnimation
                sequence={[
                    "UI/UX Designer",
                    1000,
                    "Web Developer",
                    1000,
                    "Software Developer",
                    1000,
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}
                />
            </h1>
            <p className='text-white sm:text-lg my-6 lg:text-xl'>
                My name is Ikashi Ishieka and I have 2+ years experience in web development.
            </p>

            <div className='my-8'>
                <a href={myCV} download='ikashi-ishieka-CV' className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br
                from-orange-500 to-pink-500 text-white hover:text-gray-700 hover:font-extrabold'>
                    Download CV
                </a>


                <a href="#contact" className='px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 
                hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none'>
                    Contact
                </a>
            </div>

        </div>

    </div>
  )
}

export default Hero
