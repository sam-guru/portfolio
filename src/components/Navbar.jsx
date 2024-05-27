import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu}from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    
      <div className='z-10 bg-black text-slate-50 h-[100px] mx-auto justify-between items-center fixed flex-no-wrap  top-0 flex w-full'>

        <h1 className='text-3xl font-bold text-red-800 ml-4'>I. ISHIEKA</h1>
        <ul className='hidden md:flex mr-6'>
            <li className='p-5'><a href='#about'>About</a></li>
            <li className='p-5'><a href='#work'>Work</a></li>
            <li className='p-5'><a href='#contact'>Contact</a></li>
        </ul>

        <div onClick={handleNav} className='block md:hidden mr-6'>
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>}
        </div>

        <div className={nav ? 'z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500' 
        : 'fixed left-[-100%]'}>

        <h1 className='text-3xl font-bold text-red-800 m-4'>I. ISHIEKA</h1>
        <ul className='p-8 text-2xl'>
            <li className='p-2'><a href='/'>Home</a></li>
            <li className='p-2'><a href='#about'>About</a></li>
            <li className='p-2'><a href='#work'>Work</a></li>
            <li className='p-2'><a href='#contact'>Contact</a></li>
        </ul>





        </div>

      </div> 
  )
}

export default Navbar

