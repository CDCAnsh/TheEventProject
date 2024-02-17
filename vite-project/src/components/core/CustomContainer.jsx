import React from "react";
import { useRef,useEffect } from "react";
import { gsap } from 'gsap';


const CustomContainer = () => {

  const titleRefs = useRef([React.createRef(), React.createRef(), React.createRef(), React.createRef()]);
  const baseRefs = useRef([React.createRef(), React.createRef(), React.createRef(), React.createRef()])

  // useEffect(() => {
  //   const tl = gsap.timeline();

  //   titleRefs.current.forEach((titleRef) => {
  //     const title = titleRef.current;
  //     title.style.color = '#ac4dff';

  //     tl.from(title, { opacity: 0,rotateX:-90,y:80,stagger:0.2,duration: 2 }, "<")
  //     .to(title, { opacity: 1, y:-80,rotateX:90,stagger:0.2,duration: 2}, "<1");
  //   });
  // }, []);



  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     baseRefs.current.forEach((baseRef)=>{
  //       baseRef.current.style.visibility = 'visible';
  //       if(window.innerWidth<=1024){
  //         baseRef.current.style.display = 'none';
  //       }
  //     })
  //   }, 7500);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="w-5/6 h-48 flex-shrink-0 rounded-lg flex flex-col items-center justify-end p-2  ">
        {/* <div>
          <div className="flex w-[900px] justify-between text-2xl invisible lg:visible  ">
            <div ref={baseRefs.current[0]} className="invisible h-20 text-4xl pt-12 text-[#5f16ec]">Spirituality</div>
            <div ref={baseRefs.current[1]} className="invisible text-2xl text-[#2d12a4]">Technology</div>
            <div ref={baseRefs.current[2]} className="invisible pt-12 text-3xl  text-[#4b14d1]" >Business</div>
            <div ref={baseRefs.current[3]} className="invisible text-4xl text-[#803bff]">Sports</div>
          </div>
          <div >
            <p className="text-4xl text-center leading-[0]" ref={titleRefs.current[0]}>Spirituality</p>
            <p className="text-4xl text-center leading-[0]" ref={titleRefs.current[1]}>Technology</p>
            <p className="text-4xl text-center leading-[0]" ref={titleRefs.current[2]}>Business</p>
            <p className="text-4xl text-center leading-[0]" ref={titleRefs.current[3]}>Sports</p>
          </div>
        </div> */}
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