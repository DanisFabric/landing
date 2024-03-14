import React from 'react'
import {logo, lock} from '../assets'

const NavBar = () => {
  return (
    <div className='border-b h-[80px] w-full'>
      <div className='m-auto max-w-[1200px] h-full flex justify-between items-center bg-slate-200'>
        <img src={logo} className='h-6'/>
        <div className>
          <ul className='flex gap-4'>
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platform</li>
            <li>Pricing</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar
