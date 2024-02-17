// Navbar.js

import React, { useState } from 'react';
import SideNav from '../core/SideNav';
import CustomContainer from '../core/CustomContainer';
import Card from '../common/Card';
import {Link} from 'react-router-dom'
import Hamburger from '../core/hamburger';

const Navbar = () => {
  return(
        <nav className="bg-white-800 text-black p-4 h-20 w-full min-h-20">
          <div className="container mx-auto flex justify-between items-center">  
            <div className="font-bold flex items-center md:text-xl ml-10 ">
              <div>
                <img src="../..//public/inspiration-logo.png" className='h-10 min-w-10' alt="" />
              </div>
              <div className='min-w-48'>
              Insipiration App
              </div>
            </div>
            <div className="flex gap-2">
              <button href="#" className="  hover:bg-[#9b9b9b88] transition-all duration-400 rounded-md border-2 border-transparent  p-2 w-32">
                Home
              </button>
              <Link to='/requestEvent'>
              <button href="#" className="  border-transparent   hover:bg-[#9b9b9b88] transition-all duration-400 rounded-md border-2  p-2 w-32  ">
                Request Event
              </button>
              </Link>
              <button className="bg-[#941aff] hover:bg-[#] transition-all duration-500 hover:text-black text-white border-transparent font-normal text-sm md:text-base leading-normal tracking-wider flex-shrink-0 fill-current text-black-500 mix-blend-darken rounded-md rgba(136, 54, 255, 0.59); md:p-1 md:px-2 p-0.25 px-0.5">
                Login/SignUp
              </button>
            </div>
          </div>
        </nav>
        
  )
};

export default Navbar;
