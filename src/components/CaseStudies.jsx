import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const caseStudies = [
  {
    title: 'Kryze Collections',
    subtitle: 'E-commerce Business Analysis & System Design',
    problem:
      'Kryze Collections needed a professional online platform to showcase fashion products, improve customer engagement, and support scalable product management.',
    objectives: [
      'Create a responsive e-commerce experience',
      'Enable structured product and content management',
      'Support secure customer interaction and shopping cart flow',
      'Build a scalable foundation for future payment and order features'
    ],
    stakeholders: [
      'Business Owner',
      'Customers',
      'Administrator',
      'Developer / Technical BA'
    ],
    userStories: [
      'As a customer, I want to browse products so I can explore available collections.',
      'As a customer, I want to view product details so I can make informed purchase decisions.',
      'As an admin, I want to manage products so I can keep the catalogue updated.',
      'As a business owner, I want a professional online store so I can increase brand visibility.'
    ],    
    systemDesign: [
      'Frontend: Blade / Alpine.js / TailwindCSS',
      'Backend: PHP Laravel',
      'Database: MySQL',
      'Features: Authentication, admin dashboard, image storage, shopping cart'
    ],
    outcome: [
      'Delivered a fully deployed e-commerce platform',
      'Improved the brand’s online presence',
      'Created a scalable structure for future e-commerce growth'
    ],

    processFlows: {
        customerBrowsing:
            'Customer → Product Page → View Product Details → System Fetches Product Data → Product Displayed',

        customerCart:
            'Customer → Add to Cart → Cart State/Session Updated → Cart Page → Review Items → Update Quantity / Remove Item',

        customerCheckout:
            'Customer → Cart → Checkout → Enter Delivery Details → Validate Order → Create Order Record → Confirmation',

        customerFavourites:
            'Customer → Click Favourite → Authentication Check → Save Product to Wishlist → Wishlist Updated',

        admin:
            'Admin → Admin Dashboard → Controller → Validation → Database (CRUD Operations) → Response → Dashboard Update'
    }
  }
];

const CaseStudies = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className='scroll-mt-[120px] max-w-[1200px] mt-10 mx-auto p-5' id='caseStudies'>
      {/* BA case studies */}
        <div className='' data-aos='fade-up' data-aos-delay='200'>
            <div className='mb-10'>
                <p className='text-4xl mb-3 font-bold primary-color'>
                    Business Analysis Case Studies
                </p>
                <p className='text-gray-100'>
                    Selected projects showing how I analyse business problems, define requirements,
                    and design technical solutions.
                </p>
            </div>

            {caseStudies.map((study, index) => (
                <div
                    key={index}
                    className='bg-gray-900/80 border border-gray-700 rounded-xl p-6 md:p-8 shadow-lg shadow-[#dce312]/20'>
                    <div className='mb-6'>
                        <h3 className='text-2xl md:text-3xl font-bold text-gray-100'>
                            {study.title}
                        </h3>
                        <p className='text-blue-400 mt-2'>{study.subtitle}</p>
                    </div>

                    <div className='grid md:grid-cols-2 gap-8'>
                        <div>
                            <h4 className='text-xl font-semibold text-[#dce312] mb-2'>
                                Business Problem
                            </h4>
                            <p className='text-gray-300'>{study.problem}</p>
                        </div>

                        <div>
                            <h4 className='text-xl font-semibold text-[#dce312] mb-2'>
                                Objectives
                            </h4>
                            <ul className='list-disc list-inside text-gray-300 space-y-1'>
                                {study.objectives.map((item, i) => (
                                <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className='text-xl font-semibold text-[#dce312] mb-2'>
                                Stakeholders
                            </h4>
                            <ul className='list-disc list-inside text-gray-300 space-y-1'>
                                {study.stakeholders.map((item, i) => (
                                <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className='text-xl font-semibold text-[#dce312] mb-2'>
                                System Design
                            </h4>
                            <ul className='list-disc list-inside text-gray-300 space-y-1'>
                                {study.systemDesign.map((item, i) => (
                                <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className='mt-8'>
                        <h4 className='text-xl font-semibold text-[#dce312] mb-3'>
                        User Stories
                        </h4>
                        <div className='grid md:grid-cols-2 gap-4'>
                            {study.userStories.map((story, i) => (
                                <div key={i}
                                    className='bg-black/40 border border-gray-700 rounded-lg p-4 text-gray-300'>
                                    {story}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='mt-8'>
                        <h4 className='text-xl font-semibold text-[#dce312] mb-3'>
                            Customer & Admin Process Flows
                        </h4>

                        <div className='grid md:grid-cols-2 gap-4'>
                            <div className='bg-black/50 border border-gray-700 rounded-lg p-4'>
                            <p className='text-blue-400 font-semibold mb-2'>Customer Browsing Flow</p>
                            <p className='text-gray-200 text-sm'>{study.processFlows.customerBrowsing}</p>
                            </div>

                            <div className='bg-black/50 border border-gray-700 rounded-lg p-4'>
                            <p className='text-blue-400 font-semibold mb-2'>Cart Flow</p>
                            <p className='text-gray-200 text-sm'>{study.processFlows.customerCart}</p>
                            </div>

                            <div className='bg-black/50 border border-gray-700 rounded-lg p-4'>
                            <p className='text-blue-400 font-semibold mb-2'>Checkout Flow</p>
                            <p className='text-gray-200 text-sm'>{study.processFlows.customerCheckout}</p>
                            </div>

                            <div className='bg-black/50 border border-gray-700 rounded-lg p-4'>
                            <p className='text-blue-400 font-semibold mb-2'>Favourites Flow</p>
                            <p className='text-gray-200 text-sm'>{study.processFlows.customerFavourites}</p>
                            </div>

                            <div className='bg-black/50 border border-gray-700 rounded-lg p-4 md:col-span-2'>
                            <p className='text-blue-400 font-semibold mb-2'>Admin Flow</p>
                            <p className='text-gray-200 text-sm'>{study.processFlows.admin}</p>
                            </div>
                        </div>
                    </div>

                    <div className='mt-8'>
                        <h4 className='text-xl font-semibold text-[#dce312] mb-2'>
                            Outcome
                        </h4>
                        <ul className='list-disc list-inside text-gray-300 space-y-1'>
                            {study.outcome.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className='mt-8'>
                        <a
                            href='https://kryze.co.uk'
                            target='_blank'
                            rel='noopener noreferrer'>
                            <button className='rounded-lg px-5 py-3 bg-white text-gray-800 font-bold hover:bg-blue-500 hover:text-white transition-all'>
                                View Live Project
                            </button>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};


export default CaseStudies;
