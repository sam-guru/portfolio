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

    overview:
      'Kryze Collections is a fashion e-commerce platform designed to help the business showcase products professionally, manage product content, and create a scalable foundation for future online ordering and payment features.',

    problem:
      'Kryze Collections needed to move from a limited/manual product showcase process to a structured online store where customers could browse products, view details, save favourites, and interact with the brand more easily. The business also needed an admin-friendly way to manage product content and prepare for future payment and order features.',

    myRole:
      'I acted as the Technical Business Analyst and Developer for this project. I analysed the business need, identified key stakeholders, defined user stories, mapped customer and admin workflows, translated requirements into technical features, and designed a scalable system structure using Laravel, MySQL, Blade, Alpine.js, and TailwindCSS.',

    objectives: [
      'Create a responsive e-commerce experience for customers',
      'Enable structured product and content management for administrators',
      'Support secure customer interaction through authentication and protected features',
      'Design shopping cart, favourites, and checkout flows',
      'Build a scalable foundation for future payment and order-management features'
    ],

    stakeholders: [
      'Business Owner',
      'Customers',
      'Administrator',
      'Developer / Technical BA'
    ],

    functionalRequirements: [
      'Customers must be able to browse available products.',
      'Customers must be able to view detailed product information.',
      'Customers must be able to add products to cart.',
      'Customers must be able to update or remove items from the cart.',
      'Customers must be able to save favourite products.',
      'Admin users must be able to create, update, and delete product records.',
      'The system must support authentication for protected customer and admin actions.'
    ],

    nonFunctionalRequirements: [
      'The platform must be responsive across desktop, tablet, and mobile devices.',
      'Product data must be stored in a structured relational database.',
      'The system should be scalable for future checkout, payment, and order-management features.',
      'The interface should be simple enough for non-technical users to manage products.',
      'The application should provide a clear separation between customer-facing and admin functionality.'
    ],

    userStories: [
      {
        story:
          'As a customer, I want to browse products so I can explore available collections.',
        acceptanceCriteria: [
          'Product listing page displays available products.',
          'Each product card includes key product information.',
          'The layout remains usable on mobile and desktop devices.'
        ]
      },
      {
        story:
          'As a customer, I want to view product details so I can make informed purchase decisions.',
        acceptanceCriteria: [
          'Product detail page displays product name, image, description, and price.',
          'Product data is fetched from the database.',
          'Customer can return to the product listing page.'
        ]
      },
      {
        story:
          'As an admin, I want to manage products so I can keep the catalogue updated.',
        acceptanceCriteria: [
          'Admin can create new product records.',
          'Admin can update existing product information.',
          'Admin can delete products when required.',
          'Product changes are reflected on the customer-facing product pages.'
        ]
      },
      {
        story:
          'As a business owner, I want a professional online store so I can increase brand visibility.',
        acceptanceCriteria: [
          'The website presents the brand in a clean and professional layout.',
          'Customers can access product information easily.',
          'The platform supports future business growth through scalable system design.'
        ]
      }
    ],

    systemDesign: [
      'Frontend: Blade, Alpine.js, TailwindCSS',
      'Backend: PHP Laravel',
      'Database: MySQL',
      'Authentication: Secure access for protected customer and admin features',
      'Admin Features: Product CRUD operations, dashboard, image management',
      'Customer Features: Product browsing, product details, favourites, shopping cart'
    ],

    technicalLogic: [
      'Product records are stored in MySQL and managed through Laravel CRUD operations.',
      'The customer-facing interface retrieves product data and displays it through responsive product pages.',
      'Cart functionality was designed around customer actions, cart state/session updates, item review, quantity updates, and item removal.',
      'Favourites functionality includes an authentication check before saving products to a customer wishlist.',
      'The admin flow uses validation before storing or updating product data in the database.'
    ],

    outcome: [
      'Delivered a live, responsive e-commerce platform for Kryze Collections.',
      'Improved the brand’s online presence through a professional product showcase.',
      'Created structured product-management functionality for administrators.',
      'Designed customer browsing, cart, favourites, checkout, and admin workflows.',
      'Built a scalable foundation for future payment, checkout, and order-management features.'
    ],

    lessonsLearned: [
      'Clear process flows helped translate business needs into technical features.',
      'Defining user stories made it easier to separate customer, admin, and business-owner needs.',
      'Future improvements would include payment gateway integration, order tracking, customer notifications, and analytics reporting.'
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
        'Admin → Admin Dashboard → Controller → Validation → Database CRUD Operations → Response → Dashboard Update'
    },

    liveLink: 'https://kryze.co.uk'
  }
];

const SectionTitle = ({ children }) => (
  <h4 className='text-xl font-semibold text-[#dce312] mb-3'>
    {children}
  </h4>
);

const BulletList = ({ items }) => (
  <ul className='list-disc list-inside text-gray-300 space-y-2'>
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

const InfoCard = ({ title, children, className = '' }) => (
  <div className={`bg-black/40 border border-gray-700 rounded-lg p-4 ${className}`}>
    {title && <p className='text-blue-400 font-semibold mb-2'>{title}</p>}
    <div className='text-gray-300'>{children}</div>
  </div>
);

const CaseStudies = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div
      className='scroll-mt-[120px] max-w-[1200px] mt-10 mx-auto p-5'
      id='caseStudies'
    >
      <div data-aos='fade-up' data-aos-delay='200'>
        <div className='mb-10'>
          <p className='text-4xl mb-3 font-bold primary-color'>
            Business Analysis Case Studies
          </p>
          <p className='text-gray-100 max-w-3xl'>
            Selected projects showing how I analyse business problems, define
            requirements, map workflows, and design technical solutions.
          </p>
        </div>

        {caseStudies.map((study, index) => (
          <div
            key={index}
            className='bg-gray-900/80 border border-gray-700 rounded-xl p-6 md:p-8 shadow-lg shadow-[#dce312]/20'
          >
            <div className='mb-8'>
              <h3 className='text-2xl md:text-3xl font-bold text-gray-100'>
                {study.title}
              </h3>
              <p className='text-blue-400 mt-2'>{study.subtitle}</p>
            </div>

            <div className='mb-8'>
              <SectionTitle>Project Overview</SectionTitle>
              <p className='text-gray-300 leading-relaxed'>{study.overview}</p>
            </div>

            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <SectionTitle>Business Problem</SectionTitle>
                <p className='text-gray-300 leading-relaxed'>{study.problem}</p>
              </div>

              <div>
                <SectionTitle>My Role</SectionTitle>
                <p className='text-gray-300 leading-relaxed'>{study.myRole}</p>
              </div>

              <div>
                <SectionTitle>Objectives</SectionTitle>
                <BulletList items={study.objectives} />
              </div>

              <div>
                <SectionTitle>Stakeholders</SectionTitle>
                <BulletList items={study.stakeholders} />
              </div>
            </div>

            <div className='mt-10'>
              <SectionTitle>Key Requirements</SectionTitle>

              <div className='grid md:grid-cols-2 gap-4'>
                <InfoCard title='Functional Requirements'>
                  <BulletList items={study.functionalRequirements} />
                </InfoCard>

                <InfoCard title='Non-Functional Requirements'>
                  <BulletList items={study.nonFunctionalRequirements} />
                </InfoCard>
              </div>
            </div>

            <div className='mt-10'>
              <SectionTitle>User Stories & Acceptance Criteria</SectionTitle>

              <div className='grid md:grid-cols-2 gap-4'>
                {study.userStories.map((item, i) => (
                  <InfoCard key={i}>
                    <p className='text-gray-100 font-medium mb-3'>
                      {item.story}
                    </p>

                    <p className='text-blue-400 font-semibold mb-2'>
                      Acceptance Criteria
                    </p>

                    <ul className='list-disc list-inside text-gray-300 space-y-1 text-sm'>
                      {item.acceptanceCriteria.map((criteria, index) => (
                        <li key={index}>{criteria}</li>
                      ))}
                    </ul>
                  </InfoCard>
                ))}
              </div>
            </div>

            <div className='mt-10'>
              <SectionTitle>Customer & Admin Process Flows</SectionTitle>

              <div className='grid md:grid-cols-2 gap-4'>
                <InfoCard title='Customer Browsing Flow'>
                  <p className='text-gray-200 text-sm'>
                    {study.processFlows.customerBrowsing}
                  </p>
                </InfoCard>

                <InfoCard title='Cart Flow'>
                  <p className='text-gray-200 text-sm'>
                    {study.processFlows.customerCart}
                  </p>
                </InfoCard>

                <InfoCard title='Checkout Flow'>
                  <p className='text-gray-200 text-sm'>
                    {study.processFlows.customerCheckout}
                  </p>
                </InfoCard>

                <InfoCard title='Favourites Flow'>
                  <p className='text-gray-200 text-sm'>
                    {study.processFlows.customerFavourites}
                  </p>
                </InfoCard>

                <InfoCard title='Admin Flow' className='md:col-span-2'>
                  <p className='text-gray-200 text-sm'>
                    {study.processFlows.admin}
                  </p>
                </InfoCard>
              </div>
            </div>

            <div className='mt-10 grid md:grid-cols-2 gap-8'>
              <div>
                <SectionTitle>System Design</SectionTitle>
                <BulletList items={study.systemDesign} />
              </div>

              <div>
                <SectionTitle>Data & System Logic</SectionTitle>
                <BulletList items={study.technicalLogic} />
              </div>
            </div>

            <div className='mt-10 grid md:grid-cols-2 gap-8'>
              <div>
                <SectionTitle>Outcome</SectionTitle>
                <BulletList items={study.outcome} />
              </div>

              <div>
                <SectionTitle>Lessons Learned / Future Improvements</SectionTitle>
                <BulletList items={study.lessonsLearned} />
              </div>
            </div>

            <div className='mt-10'>
              <a
                href={study.liveLink}
                target='_blank'
                rel='noopener noreferrer'
              >
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