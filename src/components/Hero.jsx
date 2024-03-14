import React from 'react'
import { heroImg } from '../assets'

const Hero = () => {
  return (
    <div className='w-full bg-white py-24'>
        <div className='max-w-[1480px] h-12 m-auto grid grid-cols-2'>
            <div className='bg-gray-100 flex flex-col gap-4'>
                <p className='text-[#20B486] text-2xl font-medium'>
                START TO SUCCESS
                </p>
                <h1 className='text-6xl'>
                Access To 5000+ Courses from 300 Instructors & Institutions
                </h1>
                <p className='text-1xl text-[#6D737A] '>
                Various versions have evolved over the years, sometimes by accident,
                </p>
                <form className='shadow-lg rounded-md p-4 bg-white'>
                    <input type='text' placeholder='what do you want to learn?'/>
                </form>
            </div>
            <div className='bg-gray-50'>
                <img src={heroImg} className='p-10'/>
            </div>
        </div>
    </div>
  )
}

export default Hero
