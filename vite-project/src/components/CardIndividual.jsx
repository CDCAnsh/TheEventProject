// CardIndividual.jsx

import React from 'react';

const CardIndividual = ({event}) => {
  return (
    <div key={event.eventId} className="border border-slate-500 transition-all duration-700  hover:shadow-[#424242ae]  hover:shadow-custom rounded-lg w-80 m-4 bg-white-100 bg-opacity-75 p-2">
      <div className="p-1">
        <img
          className="h-40 w-full object-cover rounded-lg"
          src={event.image}
          alt=""
        />
      </div>
      <div className="p-2">
        <div className=" font-semibold text-black-800 text-lg h-10">
          {event.title}
        </div>
        <br />
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <div>{event.DateAndTime}</div>
          <div className="flex items-center">
            <img src="/pin.png" alt="" className="h-4" />
            <span className="ml-1">{event.location}</span>
          </div>
        </div>
        <div className="mt-2 text-gray-600 font-medium">{event.mentorName}</div>
        <div className="flex justify-between items-center mt-2">
          <div>{event.category}</div>
          <div>
            <button className="border-4 border-transparent bg-[#00a4e5d6] hover:bg-[#f39f2ad2]  rounded-md transition-all duration-500 text-white px-4 py-2">
              {event.Button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardIndividual;


