import React from 'react'
import ContactInfo from './Request Event/ContactInfo'
import EventDetails from './Request Event/EventDetails'
import OtherDetails from './Request Event/OtherDetails'
import Footer from './Request Event/Footer'

const RequestEvent = () => {
    return (
        <div className=''>
            <p className="text-4xl m-5 md:ms-24 md:my-5 font-semibold text-[#8836FF]">Request Event</p>
            <div className="flex flex-col lg:flex-row items-center justify-around ms-0 md:ms-20 gap-20 p-5">
                <div className="flex flex-col gap-10 w-full lg:w-1/2 pe-0 md:pe-20 lg:pe-0" >
                    <ContactInfo />
                    <EventDetails />
                </div>
                <div className="w-full h-full lg:w-1/2" >
                    <OtherDetails />
                </div>
            </div>
            <Footer />
    </div >
  )
}

export default RequestEvent