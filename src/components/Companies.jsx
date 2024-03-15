import React from 'react'
import { companyLogo1, companyLogo2, companyLogo3, companyLogo4 } from '../assets'

const Companies = () => {
  return (
    <div>
        <div className='w-full bg-white py-[50px]'>
            <div className='max-w-[1480px] m-auto'>
                <h1 className='text-center text-2xl font-bold text-[#536E96]'>
                Trusted by over 25,000 teams around the world.
                </h1>
                <p className='text-center text-xl text-[#536E96]'>
                Leading companies use the same courses to help employees keep their skills fresh.
                </p>
                <div className='flex justify-center gap-5 py-10'>
                    <img src={companyLogo1} />
                    <img src={companyLogo2} />
                    <img src={companyLogo3} />
                    <img src={companyLogo4} />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Companies
