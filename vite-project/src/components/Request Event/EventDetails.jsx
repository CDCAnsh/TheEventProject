import React from "react";

const EventDetails = () => {
  return (
    <div className="mt-6 flex  ml-12">
      <div className="">
        <div className="w-[100%] border-4 border-dashed border-purple-400 mt-8 p-4 h-64">
          <p className="w-[243px] text-black text-3xl font-normal font-['Inter'] tracking-[3px]">Event Details</p>

          <div className="flex flex-wrap mb-4 space-x-8">
            <div className="w-[45%] pr-4">
              <label className="w-[148px] h-6 text-black text-xl font-normal font-['Inter'] tracking-widest">Event Name</label>
              <input className="w-[215px] h-[41px] bg-white rounded-[7px] border border-fuchsia-500" type="text" />
            </div>

            <div className="w-[45%]">
              <label className="w-[148px] h-6 text-black text-xl font-normal font-['Inter'] tracking-widest">Category</label>
              <input className="w-[215px] h-[41px] bg-white rounded-[7px] border border-fuchsia-500" type="text" />
            </div>
          </div>

          <div className="flex flex-wrap space-x-8">
            <div className="w-[45%] pr-4">
              <label className="w-[148px] h-6 text-black text-xl font-normal font-['Inter'] tracking-widest">Event Start Time</label>
              <input className="w-[215px] h-[41px] bg-white rounded-[7px] border border-fuchsia-500" type="text" />
            </div>

            <div className="w-[45%]">
              <label className="w-[148px] h-6 text-black text-xl font-normal font-['Inter'] tracking-widest">Event End Time</label>
              <input className="w-[215px] h-[41px] bg-white rounded-[7px] border border-fuchsia-500" type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
 