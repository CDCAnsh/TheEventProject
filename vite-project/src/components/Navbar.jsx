// Navbar.js

import React, { useState } from 'react';
import Hamburger from './hamburger';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='flex justify-between items-center m-3'>
        <div className='flex justify-center items-center ms-10 gap-5'>
          <img src='./inspiration-logo.png' className='w-10'></img>
          <p className='text-xl lg:text-2xl font-bold'>Inspiration App</p>
        </div>
        <div className='md:hidden'>
          <Hamburger />
        </div>
        <div className='hidden md:flex justify-center items-center mx-5 gap-2 lg:gap-10'>
          <Link to="/" className='font-semibold text-xl lg:text-2xl hover:bg-[#9b9b9b88] rounded-full px-5 py-1'>Home</Link>
          <Link to='/requestEvent' className='font-semibold text-xl lg:text-2xl hover:bg-[#9b9b9b88] rounded-full px-5 py-1'>Request Event</Link>
          <Link to='/' className="bg-[#941aff] hover:bg-[#c58df6] text-white hover:text-black px-5 rounded-full font-semibold text-xl lg:text-2xl py-1">
            Login/SignUp
          </Link>
        </div>
      </div>
    </>
  )
};

export default Navbar;
