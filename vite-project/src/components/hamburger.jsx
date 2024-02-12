import { useState } from "react"
import GridViewIcon from '@mui/icons-material/GridView';
import CloseIcon from '@mui/icons-material/Close';

export default function Hamburger() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="flex justify-center items-center w-full">
                <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none z-50">
                    {isOpen ? <CloseIcon className="text-3xl " /> : <GridViewIcon className="text-3xl" />}
                </button>
            </div>
            {isOpen && (
                <div className="flex flex-col items-center justify-center w-full h-screen bg-white fixed top-0 left-0 z-40 animate-[slide-in]">
                    <a href="#" className="text-2xl font-bold mb-4">Home</a>
                    <a href="#" className="text-2xl font-bold mb-4">Request Event</a>
                    <button className="bg-purple-400 font-normal text-sm md:text-base leading-normal tracking-wider flex-shrink-0 fill-current text-black-500 mix-blend-darken rounded-2xl rgba(136, 54, 255, 0.59); md:p-1 md:px-2 p-0.25 px-0.5">
                        Login/SignUp
                    </button>
                </div>
            )}
        </>
    )
}