// CardIndividual.jsx

import React from 'react';

const CardIndividual = ({event}) => {
  return (
    <div key={event.eventId} className="border border-customColor transition-all duration-700 shadow-2xl  hover:shadow-[#8800ff]  hover:shadow-2xl rounded-lg w-80 m-4 bg-purple-100 bg-opacity-75 p-2">
      <div className="p-1">
        <img
          className="h-40 w-full object-cover rounded-md"
          src={event.image}
          alt=""
        />
      </div>
      <div className="p-2">
        <div className="text-2xl font-bold text-black-800 h-12">
          {event.title}
        </div>
        <br />
        <div className="flex justify-between mt-2">
          <div>{event.DateAndTime}</div>
          <div className="flex items-center">
            <img src="/pin.png" alt="" className="h-4" />
            <span className="ml-1">{event.location}</span>
          </div>
        </div>
        <div className="mt-2 text-gray-700 font-medium">{event.mentorName}</div>
        <div className="flex justify-between items-center mt-2">
          <div>{event.category}</div>
          <div>
            <button className="border-4 border-transparent bg-button hover:bg-customColor hover:text-white rounded-md transition-all duration-500 text-black px-4 py-2">
              {event.Button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardIndividual;


