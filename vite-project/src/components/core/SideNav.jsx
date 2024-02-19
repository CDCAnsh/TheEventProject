import React, { useState } from "react";
import styles from "./style.module.css";

const SideNav = ({ onCategoryChange }) => {
  let [category, setCategory] = useState("Spirituality");

  const handleCategoryClick = (newCategory) => {
    setCategory(newCategory);
    onCategoryChange(newCategory);
  };

  return (
    <div className="w-full md:w-56 p-3 md:p-0 md:m-2">
      <div className="w-full md:h-screen rounded-lg pt-6 bg-gray-100 opacity-100 text-black">
        <div className="">
          <div className="block  font-semibold text-xl text-center">
            Categories
            <hr className="w-24"></hr>
          </div>
          <div className="md:flex grid md:flex-col grid-cols-2 font-medium  mt-3 gap-1">
            <div className="text-customColor cursor-pointer md:pl-5 pl-0 h-10 flex items-center justify-center md:justify-start hover:bg-white" onClick={() => handleCategoryClick("Spirituality")}>
              <div className={styles.icon}>
                <img className="ml-3 h-6  " src="../../public/s1.png" alt="" />
              </div>
              <div className="pl-3">Spiritual</div>
            </div>
            <div className="text-customColor cursor-pointer md:pl-5 pl-0 h-10 flex items-center justify-center md:justify-start  hover:bg-white" onClick={() => handleCategoryClick("Technology")}>
              <div className={styles.icon}>
                <img className="ml-3  h-6  " src='../../public/bulb.png' alt="" />
              </div>
              <div className="pl-3">Technology</div>
            </div>
            <div className="text-customColor cursor-pointer md:pl-5 pl-0 h-10 flex items-center justify-center md:justify-start hover:bg-white" onClick={() => handleCategoryClick("Business")}>
              <div className={styles.icon}>
                <img className="ml-3 h-6  " src='../../public/briefcase.png' alt="" />
              </div>
              <div className="pl-3">Business</div>
            </div>
            <div className="text-customColor cursor-pointer md:pl-5 pl-0 h-10 flex items-center justify-center md:justify-start hover:bg-white" onClick={() => handleCategoryClick("Sports")}>
              <div className={styles.icon}>
                <img className="ml-3 h-6  " src='../../public/scolor.png' alt="" />
              </div>
              <div className="pl-3">Sports</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;