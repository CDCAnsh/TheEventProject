import React from "react";
import { useRef,useEffect } from "react";
import { gsap } from 'gsap';


const CustomContainer = () => {

  const titleRefs = useRef([React.createRef(), React.createRef(), React.createRef(), React.createRef()]);
  const baseRefs = useRef([React.createRef(), React.createRef(), React.createRef(), React.createRef()])

 

  return (
    <div className="flex items-center justify-center">
      <div className="md:w-1/2 w-3/4 h-36 md:h-24 md:ml-8 flex-shrink-0 rounded-lg flex flex-col items-center justify-end p-2  ">
        
        <div className="w-full flex flex-col sm:flex-row bg-white p-1 border-2 border-white rounded-md mt-8 transition-all duration-500 gap-3">
          
          <input type="text" placeholder="Search Event Name" className="w-full border-[#9b9b9b45] h-14  outline-[#9b9b9bc0] border-2 rounded-md pl-4 text-zinc-900  "></input>
          <button className=" text-white border-2 rounded-lg flex justify-center items-center">
            <img src="/public/search (2).png " className=' hidden sm:block h-[22px] active:grayscale-0 m-4' alt="" />
            <p className="sm:hidden text-black font-semibold text-xl">Search</p>
          </button>
        </div>
      </div>
    </div>
  );

}

export default CustomContainer;