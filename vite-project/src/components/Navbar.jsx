// Navbar.js

import React, { useState } from 'react';
import SideNav from './SideNav';
import CustomContainer from './CustomContainer';
import Card from './Card';

const Navbar = () => {
  return(
        <nav className="bg-white-800 text-black p-4 h-20 w-full">
          <div className="container mx-auto flex justify-between items-center">  
            <div className="font-bold flex items-center md:text-xl ">
              <div>
                <img src="../..//public/inspiration-logo.png" className='h-10' alt="" />
              </div>
              <div className='ml-6'>
              Insipiration App
              </div>
            </div>
            <div className="flex gap-2">
              <button href="#" className="  hover:text-white bg-[#ac4dff48] hover:bg-[#ac4dff] transition-all duration-500 rounded-xl border-2 border-transparent  p-2 w-32">
                Home
              </button>
              <button href="#" className=" hover:text-white border-transparent  bg-[#ac4dff48] hover:bg-[#ac4dff] transition-all duration-500 rounded-xl border-2  p-2 w-32  ">
                Request Event
              </button>
              <button className="bg-[#ac4dff] hover:bg-[#ac4dff48] transition-all duration-500 hover:text-black text-white border-transparent font-normal text-sm md:text-base leading-normal tracking-wider flex-shrink-0 fill-current text-black-500 mix-blend-darken rounded-xl rgba(136, 54, 255, 0.59); md:p-1 md:px-2 p-0.25 px-0.5">
                Login/SignUp
              </button>
            </div>
          </div>
        </nav>
  )
};

export default Navbar;
