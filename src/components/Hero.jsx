import React from 'react'
import { heroImg } from '../assets'
import { AiOutlineSearch } from 'react-icons/ai'

const Hero = () => {
  return (
    <div className='w-full bg-white py-24'>
        <div className='max-w-[1480px] h-12 m-auto grid grid-cols-2'>
            <div className='bg-gray-100 flex flex-col gap-8'>
                <p className='text-[#20B486] text-2xl font-medium'>
                START TO SUCCESS
                </p>
                <h1 className='text-6xl py-4 leading-[72px]'>
                Access To <span className='text-[#20B486]'>5000+</span> Courses from <span className='text-[#20B486]'>300</span> Instructors & Institutions
                </h1>
                <p className='text-1xl text-[#6D737A] '>
                Various versions have evolved over the years, sometimes by accident,
                </p>
                <form className='input-box-shadow border rounded-md p-4 bg-white flex justify-between'>
                    <input className='bg-white' type='text' placeholder='what do you want to learn?'/>
                    <button>
                        <AiOutlineSearch size={20} style={{color: 'black', backgroundColor: 'yellow'}} />
                    </button>
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
