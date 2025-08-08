import React, { useState } from 'react';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    // Clear error for this field as user types
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: '',
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email.';
    }
    if (!formData.message.trim()) newErrors.message = 'Please enter your message.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      e.preventDefault(); // prevent form from submitting
      setErrors(validationErrors);
    }
  };

  return (
    <div data-aos="flip-up" data-aos-delay="300" className='scroll-mt-[20 0px] max-w-[1200px] mx-auto mt-20 bg-blue-300 dark:bg-black sm:py-20 p-5 rounded-lg' id='contact'>
      <div className='text-center'>
        <h2 className='text-4xl font-bold leading-tight primary-color'>Contact Me</h2>
      </div>

      <div className='max-w-[800px] mx-auto'>
        <div className='mt-6 bg-blue-400 dark:bg-[#161616] rounded-xl'>
          <div className='p-10'>
            <form
              onSubmit={handleSubmit}
              action="https://getform.io/f/zbxdpodb"
              method="POST"
              noValidate
            >
              <input type="hidden" name="apikey" value="aa144315-d877-487d-bd64-a5444f80e95d" />

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4'>
                <div>
                  <div className='mt-2.5'>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600'
                    />
                    {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
                  </div>
                </div>

                <div>
                  <div className='mt-2.5'>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600'
                    />
                    {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                  </div>
                </div>

                <div className='sm:col-span-2'>
                  <div className='mt-2.5'>
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600'
                    />
                    {errors.message && <div className="text-red-500 text-sm mt-1">{errors.message}</div>}
                  </div>
                </div>

                <div className='sm:col-span-2'>
                  <button
                    type="submit"
                    className='text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color hover:text-gray-800 rounded-md'
                  >
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
