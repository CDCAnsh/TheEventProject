import React from 'react'
import ContactInfo from './Request Event/ContactInfo'
import EventDetails from './Request Event/EventDetails'
import OtherDetails from './Request Event/OtherDetails'
import Footer from './Request Event/Footer'

const RequestEvent = () => {
    return (
        <div>
            
            <div className="flex  items-center ">
                <div className="flex-col ml-10" >
                    <ContactInfo />
                    <EventDetails />
                </div>
                <div className="w-[200%]" >
                    <OtherDetails />
                </div>
            </div>
            <Footer />
    </div >
  )
}

export default RequestEvent