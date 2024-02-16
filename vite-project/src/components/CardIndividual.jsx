// CardIndividual.jsx

import React from 'react';

const CardIndividual = ({event}) => {
  console.log(typeof event.DateAndTime);
  return (
    <div key={event.eventId} className="border-2 rounded-lg p-2 flex flex-col justify-center items-center m-3">
      <div className="">
        <img
          className="w-full rounded-lg sm:h-40"
          src={event.image}
          alt=""
        />
      </div>
      <div className="w-full p-2">
        <div className="text-xl text-center font-semibold">
          {event.title}
        </div>
        <br />
        <div className="flex justify-between text-sm text-gray-600 ">
          <div className='flex flex-col sm:flex-row gap-1'>
            <p className=''>{event.DateAndTime.substr(0,10)}</p>
            <p>{event.DateAndTime.substr(11,13)}</p>
          </div>
          <div className="flex items-center">
            <img src="/pin.png" alt="" className="h-4" />
            <span className="ml-1 font-semibold text-md">{event.location}</span>
          </div>
        </div>
        <div className="mt-2 text-gray-600 font-medium">{event.mentorName}</div>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-2 gap-3">
          <div>{event.category}</div>
          <div className='w-full sm:w-auto'>
            <button className="border-3 border-transparent bg-[#00a4e5d6] hover:bg-[#f39f2ad2] w-full rounded-md transition-all duration-500 text-white px-4 py-2">
              {event.Button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardIndividual;


