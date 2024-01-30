import React, { useState } from 'react'
import styles from './style.module.css'

const SideNav = ({onCategoryChange}) => {

    let [showSideNav,setSideNav] = useState(false)
    let [category,setCategory] = useState("Spirituality")

    function showSide(){
        setSideNav(!showSideNav)
    }

    const handleCategoryClick = (newCategory) => {
        setCategory(newCategory);
        onCategoryChange(newCategory);
      };

  return (
    <div className={`fixed transition-all duration-700 ${showSideNav ? 'w-60' : 'w-12'} h-screen `}>
    <div className={showSideNav ? "w-full h-screen pt-6 bg-side text-black" : 'w-12 h-screen pt-6'}>
        <div className='flex justify-end'>
            {showSideNav ? <img src='../../public/cancel.png' className='cursor-pointer h-5 mr-6'onClick={showSide} ></img> : <img src='../../public/hamburger.png' className='h-5 mr-4 cursor-pointer' onClick={showSide}></img>}
        </div>
        <div className="text-xl">
            <div className='pl-6 font-semibold'>
                {showSideNav ? 'Categories' : null}
                {showSideNav ? <hr className='w-24'></hr> : null}
            </div>
        </div>
        <div className={showSideNav ? 'flex flex-col mt-5 font-medium' :' font-medium flex flex-col items-center mt-5'}>
            <div className={showSideNav ? 'hover:bg-white transition-all duration-300 hover:text-customColor cursor-pointer pl-5 h-10 flex items-center  ' : 'h-10 w-12 flex justify-center items-center hover:bg-side transition-all duration-300 hover:text-white'} onClick={()=>handleCategoryClick("Spirituality")}>
                <div className={styles.icon}>
                    <img className='ml-3 h-6 grayscale active:grayscale-0 focus:grayscale-0 ' tabIndex="0" src='../../public/s1.png' alt="" />
                </div>
                <div className='pl-3'>
                    {showSideNav ? 'Spiritual' : null}
                </div>
            </div>
            <div className={showSideNav ? 'hover:bg-white transition-all duration-300 hover:text-customColor cursor-pointer pl-5 h-10 flex items-center' : 'h-10 w-12 flex justify-center items-center hover:bg-side transition-all duration-300 hover:text-white'} onClick={()=>handleCategoryClick("Technology")}>
                <div className={styles.icon}>
                    <img className='ml-3 h-6 grayscale active:grayscale-0 focus:grayscale-0 ' tabIndex="0"  src='../../public/bulb.png' alt="" />
                </div>
                <div className='pl-3'>
                    {showSideNav ? 'Technology' : null}
                </div>
            </div>
            <div className={showSideNav ? 'hover:bg-white transition-all duration-300 hover:text-customColor cursor-pointer pl-5 h-10 flex items-center' : 'h-10 w-12 flex justify-center items-center hover:bg-side transition-all duration-300 hover:text-white'}  onClick={()=>handleCategoryClick("Business")}>
                <div className={styles.icon}>
                    <img className='ml-3 h-6 grayscale active:grayscale-0 focus:grayscale-0'  tabIndex="0" src='../../public/briefcase.png' alt="" />
                </div>
                <div className='pl-3'>
                    {showSideNav ? 'Business' : null}
                </div>
            </div>
            <div className={showSideNav ? 'hover:bg-white transition-all  duration-300 hover:text-customColor cursor-pointer pl-5 h-10 flex items-center' : ' h-10 w-12 flex justify-center items-center hover:bg-side transition-all duration-300 hover:text-white'} onClick={()=>handleCategoryClick("Sports")}>
                <div className={styles.icon}>
                    <img className='ml-3 h-6 grayscale active:grayscale-0 focus:grayscale-0'  tabIndex="0" src='../../public/scolor.png' alt="" />
                </div>
                <div className='pl-3'>
                    {showSideNav ? 'Sports' : null}
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default SideNav