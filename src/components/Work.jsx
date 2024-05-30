import React from 'react'
import proj1 from '../assets/mig-check.png'
import proj2 from '../assets/fertzmall.png'
import proj5 from '../assets/proj5.png'

const Work = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5' id='work'>
        <div className='pb-8'>
            <p className='text-4xl mb-3 font-bold primary-color'>Work</p>
            <p className='text-gray-400'>Check out some of my recent work</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                            h-[200px] bg-cover relative'>
                <img src={proj1} alt='migrationCheckImage'/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex 
                                flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'>Migration Check</span>
                    <div className='pt-8 text-center'>
                        <a href="https://migration-check.com/" target='_blank' rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700
                                                font-bold text-lg'>
                                Live

                            </button>
                        </a>
                        <p>
                            Migration-Check.com streamlines your German relocation journey with a suite of services 
                            powered by cutting-edge technology.  They offer expert review of your CV and application 
                            materials, ensuring they meet German standards.  The platform is built with technologies 
                            such as JavaScript for interactivity, React for a 
                            dynamic user experience, Node.js for efficient backend operations, Next.js for optimal 
                            performance, and APIs for seamless integration of various services. 
                        </p>
                    </div>
                </div>

            </div>


            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                            h-[200px] bg-cover relative'>
                <img src={proj2} alt="fertzMall_logo"/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex 
                                flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'>Fertz Mall</span>
                    <div className='pt-8 text-center'>
                        <a href="https://kashii96.pythonanywhere.com/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700
                                                font-bold text-lg'>
                                Live

                            </button>
                        </a>
                        <p>
                            Fertz Mall is a web scraper application built with Python and the Django framework. 
                            It utilizes Selenium for web automation and data collection, integrates a SQLite3 database, and features 
                            a user interface built with Tailwind CSS and Javascript, and an integrated AI chatbot.
                        </p>
                    </div>
                </div>

            </div>


            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                            h-[200px] bg-cover relative'>
                <img src={proj5} alt="demo_logo"/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex 
                                flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'>Migration Check</span>
                    <div className='pt-8 text-center'>
                        <a href="/">
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
  )
}

export default Work
