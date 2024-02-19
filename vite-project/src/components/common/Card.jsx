import React, { useEffect, useState } from 'react';
import data from './data.json';
import CardIndividual from './CardIndividual';
import { Link } from 'react-router-dom';
import SideNav from '../core/SideNav';

const Card = () => {
  let [AllEvents, setAllEvents] = useState(data.eventsList);
  const [events, setEvents] = useState(AllEvents.filter(event => event.upcoming === 'true'));
  const [activeEvent, setActiveEvent] = useState("upcoming");
  const [selectedCategory, setSelectedCategory] = useState("Spirituality");

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
  };


  const handleUpcomingEvent = () => {
    setEvents(AllEvents.filter(event => event.upcoming === 'true'));
    setActiveEvent("upcoming");
  };
  const handlePrerecordedEvent = () => {
    setEvents(AllEvents.filter(event => event['pre-recorded'] === 'true'));
    setActiveEvent("pre-recorded");
  };

  const handle = () => {
    setEvents(AllEvents.filter(event => event.request === 'true'))
  }

  return (
    <>
      <div className='flex flex-col md:flex-row'>
        <SideNav onCategoryChange={handleCategoryChange} />
        <div className='flex flex-col'>
          <div className='flex justify-center sm:justify-start items-center gap-2 md:gap-5 mx-3'>
            <div onClick={handleUpcomingEvent} className={activeEvent === 'upcoming' ? 'text-md sm:text-xl text-center font-semibold hover:text-orange-500' : 'text-md sm:text-xl text-center font-semibold hover:text-orange-500'}>Upcoming Events</div>

            <div onClick={handlePrerecordedEvent} className={activeEvent === 'pre-recorded' ? 'text-md sm:text-xl text-center font-semibold hover:text-orange-500' : 'text-md sm:text-xl text-center font-semibold hover:text-orange-500'}>Pre-recorded Events</div>

            <Link to="/requestEvent" className="text-md sm:text-xl text-center font-semibold hover:text-orange-500">Request Event</Link>

            {/* <div onClick={handle} className={activeEvent === 'request' ? 'text-xl transition-all duration-400 border-b-4 border-customColor cursor-pointer hover:text-customColor' : 'text-xl transition-all duration-400 border-b-4 border-side cursor-pointer hover:text-customColor'}><a>Request Event</a></div> 
      
                <div  onClick={handle} className={activeEvent === 'schedule' ? 'text-xl transition-all duration-400 border-b-4 border-customColor cursor-pointer hover:text-customColor' : 'text-xl transition-all duration-400 border-b-4 border-side cursor-pointer hover:text-customColor'}><a >Schedule Event</a></div> */}
          </div>
          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {events
              .filter((item) => item.category === selectedCategory)
              .map((item, index) => {
                return (
                  <CardIndividual key={index} event={item} />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
