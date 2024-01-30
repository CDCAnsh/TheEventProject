import React from "react";

const Navbar = () => {
  return (
    
      <nav className="bg-white-800 text-black p-4 top-0 w-full z-10 absolute">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-bold text-xl">Mentors Connect</div>

          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              Home
            </a>
            <a href="#" className="hover:text-gray-400">
              Request Event
            </a>
            <button className="bg-purple-800 font-normal text-base leading-normal tracking-wider flex-shrink-0 fill-current text-black-500 mix-blend-darken rounded-md rgba(136, 54, 255, 0.59);">
              Login/SignUp
            </button>
          </div>
        </div>
      </nav>

  
    
  );
};

export default Navbar;
