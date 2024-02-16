import { useState } from "react"
import GridViewIcon from '@mui/icons-material/GridView';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";

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
                    <Link to="/" className='font-semibold text-2xl hover:bg-[#9b9b9b88] rounded-full px-5 py-1'>Home</Link>
                    <Link to='/requestEvent' className='font-semibold text-2xl hover:bg-[#9b9b9b88] rounded-full px-5 py-1'>Request Event</Link>
                    <Link to='/' className="bg-[#941aff] hover:bg-[#c58df6] text-white hover:text-black px-5 rounded-full font-semibold text-2xl py-1">
                        Login/SignUp
                    </Link>
                </div>
            )}
        </>
    )
}