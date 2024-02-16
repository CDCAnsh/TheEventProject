import React from "react";
import buttonImg from "../../assets/right-arrow.png"

const Footer = () => {

    return(
        <div className="flex flex-col items-center justify-center mt-20 mb-10">
            <div className="">
                <button className="w-[187px] h-[53px] bg-purple-400 hover:bg-button transition-all duration-500 bg-opacity-70 rounded-[20px] border-4 border-purple-400">
                    Button
                </button> 
            </div >
            <div className="flex justify-center items-center mt-10 gap-7 md:gap-20 w-full">
                <label className="text-black text-sm md:text-xl font-normal font-['Inter'] tracking-widest w-full text-end">Privacy Policy</label>
                <label className="text-black text-sm md:text-xl font-normal font-['Inter'] tracking-widest w-full">Terms and Conditions</label>
            </div> 
        </div>
    );
}

export default Footer;