import React from 'react'
import {logo, lock, hamburgerMenu, close} from '../assets'

const NavBar = () => {
  const [showMenu, setShowMenu] = React.useState(false)

  return (
    <div className='border-b h-[80px] w-full'>
      <div className='m-auto md:max-w-[1200px] max-w-[600px] h-full flex justify-between items-center'>
        <img src={logo} className='h-6'/>
        <div className>
          <ul className='hidden md:flex gap-4'>
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platform</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className='hidden md:flex gap-4'>
          <button className='text-[#6D737A] flex items-center gap-2 px-6'>
            <img src={lock} className='h-6'/>
            Login
          </button>
          <button className='bg-[#20B486] text-white px-[24px] py-[12px] rounded-md font-bold'>
            Sign Up for Free
          </button>
        </div>
        <div className='md:hidden' onClick={() => setShowMenu(!showMenu)}>
          <button>
            <img src={showMenu ? close: hamburgerMenu} />
          </button>
        </div>
      </div>

      <div className={showMenu ? 'absolute z-10 p-4 bg-white w-full px-8 md:hidden': 'hidden'}>
        <ul>
            <li className='p-4 hover:bg-gray-100'>Home</li>
            <li className='p-4 hover:bg-gray-100'>About</li>
            <li className='p-4 hover:bg-gray-100'>Support</li>
            <li className='p-4 hover:bg-gray-100'>Platform</li>
            <li className='p-4 hover:bg-gray-100'>Pricing</li>
          </ul>
        <div className='flex flex-col my-4 px-4 gap-2'>
            <button className='text-[#6D737A] flex justify-center items-center gap-2 px-[24px] py-[12px] border border-[#20B486] rounded-md font-bold'>
              <img src={lock} className='h-6'/>
              Login
            </button>
            <button className='bg-[#20B486] text-white px-[24px] py-[12px] rounded-md font-bold'>
              Sign Up for Free
            </button>
        </div>
      </div>
    </div>
  )
}

export default NavBar
