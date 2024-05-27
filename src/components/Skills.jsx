import React from 'react'
import html from '../assets/html.png'
import bootstrap from '../assets/bootstrap.png'
import tailwind from '../assets/tailwind.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import Csharp from '../assets/c#.png'
import java from '../assets/java.webp'
import python from '../assets/python.png'
import php from '../assets/php.png'


const Skills = () => {
  return (
    <div className='border border-gray-600 bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-rows-3 grid-flow-col
                        place-items-center md:flex md:justify-between md:items-center'>

        <h2 className='row-span-3 text-gray-700 text-2xl md:tet-4xl font-bold m-4'>
            My <br /> Tech <br /> Stack
        </h2>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={html} alt="html-logo" />
            <p className='mt-2'>HTML</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={bootstrap} alt="bootstrap-logo" width={100} height={100}/>
            <p className='mt-2'>Bootstrap</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={tailwind} alt="tailwind-logo" width={100} height={100}/>
            <p className='mt-2'>Tailwind</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={javascript} alt="javascript-logo" width={100} height={100}/>
            <p className='mt-2'>JavaScript</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={react} alt="react-logo" width={100} height={100}/>
            <p className='mt-2'>React</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={java} alt="java-logo" width={100} height={100}/>
            <p className='mt-2'>Java</p>
        </div>
        
        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={python} alt="python-logo" width={100} height={100}/>
            <p className='mt-2'>Python</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={php} alt="php-logo" width={100} height={100}/>
            <p className='mt-2'>PHP</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={Csharp} alt="C#-logo" width={100} height={100}/>
            <p className='mt-2'>CSharp</p>
        </div>
      
    </div>
  )
}

export default Skills
