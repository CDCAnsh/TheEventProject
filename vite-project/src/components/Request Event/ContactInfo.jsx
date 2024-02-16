import React from "react";

const ContactInfo = () => {
  return (
    <div className="flex  mt-8 ml-12 ">
      <div className="">
        <div className="mt-6 text-black text-4xl font-normal font-inter tracking-[3.60px] mb-6">
          <p>Request Events</p>
        </div>

        <div className="w-[100%] border-4 border-dashed border-purple-400 mt-2 p-4 h-[80%]">
          <p className="w-[243px] text-black text-3xl font-normal font-['Inter'] tracking-[3px] mt-2">Contact Info</p>

          <div className="flex flex-wrap mb-2 space-x-8">
            <div className="w-[45%] pr-4">
              <label className="w-[148px] h-6 text-black text-xl font-normal font-['Inter'] tracking-widest">First Name</label>
              <input className="w-[215px] h-[41px] bg-white rounded-[7px] border border-fuchsia-500" type="text" />
            </div>

            <div className="w-[45%]">
              <label className="w-[148px] h-6 text-black text-xl font-normal font-['Inter'] tracking-widest">Last Name</label>
              <input className="w-[215px] h-[41px] bg-white rounded-[7px] border border-fuchsia-500" type="text" />
            </div>
          </div>

          <div className="mb-2">
            <label className="w-[148px] h-6 text-black text-xl font-normal font-['Inter'] tracking-widest">Email</label>
            <input className="w-[487px] h-[41px] bg-white rounded-[7px] border border-fuchsia-500" type="text" />
          </div>

          <div className="flex flex-row space-x-6">
            <div className="flex items-center">
              <input className="w-[25px] h-[25.72px] bg-purple-400 rounded-full border-2 border-black" type="radio" name="mentor" />
              <label className="w-[95px] h-6 text-black text-base font-normal font-['Inter'] tracking-wider ml-2">Mentor</label>
            </div>

            <div className="flex items-center">
              <input className="w-[25px] h-[25.72px] bg-white rounded-full border-2 border-black" type="radio" name="mentee" />
              <label className="w-[126px] h-6 text-black text-base font-normal font-['Inter'] tracking-wider ml-2">Mentee</label>
            </div>

            <div className="flex items-center">
              <input className="w-[25px] h-[25.72px] bg-white rounded-full border-2 border-black" type="radio" name="organization" />
              <label className="ml-2 w-[148px] h-6 text-black text-base font-normal font-['Inter'] tracking-wider">Organization</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
