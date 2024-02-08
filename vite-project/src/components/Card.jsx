import React, { useEffect, useState } from 'react';
import data from '../assets/data.json';
import CardIndividual from './CardIndividual';

const Card = ({selectedCategory}) => {
  let [AllEvents, setAllEvents] = useState(data.eventsList);
  const [events, setEvents] = useState(AllEvents.filter(event => event.upcoming === 'true'));
  const [activeEvent,setActiveEvent] = useState("upcoming");

  const handleUpcomingEvent = () => {
    setEvents(AllEvents.filter(event => event.upcoming === 'true'));
    setActiveEvent("upcoming");
  };
  const handlePrerecordedEvent = () => {
    setEvents(AllEvents.filter(event => event['pre-recorded'] === 'true'));
    setActiveEvent("pre-recorded");
  };

  const handle = () =>{
    setEvents(AllEvents.filter(event => event.request === 'true'))
  }

  return (
    <>
    <div className='flex gap-8 rounded justify-center md:justify-around md:ml-14 md:my-4 md:mt-4 md:mb-0 p-4 w-full md:w-[400px]'>
      <div onClick={handleUpcomingEvent} className={activeEvent === 'upcoming' ? 'text-xl transition-all duration-400  cursor-pointer hover:text-[#f39f2ad2]' : 'text-xl transition-all duration-400   cursor-pointer hover:text-[#f39f2ad2]'}>Upcoming Events</div>

      <div onClick={handlePrerecordedEvent} className={activeEvent === 'pre-recorded' ? 'text-xl transition-all duration-400   cursor-pointer hover:text-[#f39f2ad2]' : 'text-xl transition-all duration-400   cursor-pointer hover:text-[#f39f2ad2]'}>Pre-recorded Events</div>

      {/* <div onClick={handle} className={activeEvent === 'request' ? 'text-xl transition-all duration-400 border-b-4 border-customColor cursor-pointer hover:text-customColor' : 'text-xl transition-all duration-400 border-b-4 border-side cursor-pointer hover:text-customColor'}><a>Request Event</a></div> 
      
      <div  onClick={handle} className={activeEvent === 'schedule' ? 'text-xl transition-all duration-400 border-b-4 border-customColor cursor-pointer hover:text-customColor' : 'text-xl transition-all duration-400 border-b-4 border-side cursor-pointer hover:text-customColor'}><a >Schedule Event</a></div> */}
    </div>
    <div className="flex justify-center mr-6 md:justify-start md:ml-10 md:mr-0 flex-wrap">
    {events
        .filter((item) => item.category === selectedCategory)
        .map((item, index) => {
        return(
          <CardIndividual key={item.eventId} event={item} />
        );
      })}
    </div>
    </>
  );
};

export default Card;
