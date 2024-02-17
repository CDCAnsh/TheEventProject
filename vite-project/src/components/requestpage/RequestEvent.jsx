import React from 'react'
import ContactInfo from './ContactInfo'
import EventDetails from './EventDetails'
import OtherDetails from './OtherDetails'
import Footer from '../common/Footer'

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