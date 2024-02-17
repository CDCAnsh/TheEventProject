import React from "react";

const OtherDetails = () => {
  return (
    <div className="flex flex-row ml-40  mt-20">
      <div className="flex flex-col w-[90%] border-4 border-dashed border-purple-400 mt-8 p-4  ">
        <p className="w-[243px] text-black text-3xl font-normal font-['Inter'] tracking-[3px] ml-2  ">Other Details</p>

        <div className="flex flex-wrap space-x-4">
          <div className="w-[45%] pr-4">
            <label className="w-[258px] text-black text-xl font-normal font-['Inter'] tracking-widest">Event Description</label>
            <textarea className="w-[296px] h-[163px] bg-white rounded-[7px] border border-fuchsia-500" />
          </div>

          <div className="w-[45%]">
            <label className="w-[258px] text-black text-xl font-normal font-['Inter'] tracking-widest ml-6">Host of the Event</label>
            <textarea className="w-[296px] h-[163px] bg-white rounded-[7px] border border-fuchsia-500 ml-6" />
          </div>
        </div>

        <div className="flex flex-wrap mt-4 space-x-4">
          <div className="w-[45%] pr-4">
            <label className="w-[258px] text-black text-xl font-normal font-['Inter'] tracking-widest">Target Audience</label>
            <textarea className="w-[296px] h-[163px] bg-white rounded-[7px] border border-fuchsia-500" />
          </div>

          <div className="w-[45%]">
            <label className="w-[258px] text-black text-xl font-normal font-['Inter'] tracking-widest ml-6">Event Sponsors</label>
            <textarea className="w-[296px] h-[163px] bg-white rounded-[7px] border border-fuchsia-500 ml-6" />
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="mt-4 w-[45%]">
            <label className="w-[258px] text-black text-xl font-normal font-['Inter'] tracking-widest">Link of the Event</label>
            <textarea className="w-[580px] h-12 bg-white rounded-[7px] border border-fuchsia-500" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default OtherDetails;
