import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`z-10 ${darkMode ? 'bg-black' : 'bg-blue-500'} text-slate-50 h-[100px] mx-auto justify-between items-center fixed flex-no-wrap pb-10 mb-20 top-0 flex w-full transition-colors duration-300`}>
      <a href="/">
        <h1 className='text-3xl font-bold primary-color ml-4'>I. ISHIEKA</h1>
      </a>

      <ul className='hidden md:flex'>
        <li className='p-5'><a href='#about'>About</a></li>
        <li className='p-5'><a href='#work'>Work</a></li>
        <li className='p-5'><a href='#contact'>Contact</a></li>
      </ul>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-black text-xs md:text-sm dark:text-white mr-4"
      >
        {darkMode ? '☼ Light Mode' : '⏾ Dark Mode'}
      </button>

      <div onClick={handleNav} className='block md:hidden mr-6'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div className={nav ? 'z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='text-3xl font-bold primary-color m-4'>I. ISHIEKA</h1>
        <ul className='p-8 text-2xl'>
          <li className='p-2'><a href='/'>Home</a></li>
          <li className='p-2'><a href='#about'>About</a></li>
          <li className='p-2'><a href='#work'>Work</a></li>
          <li className='p-2'><a href='#contact'>Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
