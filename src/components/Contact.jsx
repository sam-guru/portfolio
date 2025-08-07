import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in ms
            once: false, // Whether animation should happen only once
        });
    }, []);

    return (
        <div data-aos="fade-up" data-aos-delay="300" className='scroll-mt-[200px] max-w-[1200px] mx-auto mt-20 bg-blue-300 dark:bg-black sm:py-20 p-5 rounded-lg' id='contact'>
            <div className='text-center'>
                <h2 className='text-4xl font-bold leading-tight primary-color'>Contact Me</h2>
            </div>

            <div className='max-w-[800px] mx-auto'>
                <div className='mt-6 bg-blue-400 dark:bg-[#161616] rounded-xl'>
                    <div className='p-10'>
                        <form action="https://getform.io/f/zbxdpodb" method='POST'>
                            <input type="hidden" name="apikey" value="aa144315-d877-487d-bd64-a5444f80e95d"/>

                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4'>
                                <div>
                                    <div className='mt-2.5'>
                                        <input type="text" name='name' id='' placeholder='Your Name'
                                            className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border
                                                border-gray-700 rounded-md focus:outline-none focus:border-pink-600'/>
                                    </div>
                                </div>

                                <div>
                                    <div className='mt-2.5'>
                                        <input type="email" name='email' id='' placeholder='Your Email'
                                            className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border
                                                border-gray-700 rounded-md focus:outline-none focus:border-pink-600'/>
                                    </div>
                                </div>

                                <div className='sm:col-span-2'>
                                    <div className='mt-2.5'>
                                        <textarea name='message' id='' placeholder='Your Message'
                                            className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border
                                                border-gray-700 rounded-md focus:outline-none focus:border-pink-600'/>
                                    </div>
                                </div>

                                <div className='sm:col-span-2'>
                                    <button type="submit"
                                        className='text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color hover:text-gray-800 rounded-md'>
                                        Send
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Contact;
