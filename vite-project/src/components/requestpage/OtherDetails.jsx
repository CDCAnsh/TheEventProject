import React from "react";

const OtherDetails = () => {
  return (
    <div className="flex flex-col justify-center items-center rounded-lg border-purple-500 border-dashed border-4 p-5 shadow-xl shadow-purple-300 md:me-20 h-full">
                <p className="w-full text-xl font-semibold">Other Details</p>
                <div className="flex justify-around items-center w-full my-3 gap-6">
                    <div className="flex flex-col w-1/2">
                        <label htmlFor="event_description" className="my-2 font-semibold">Event Description</label>
                        <textarea name="event_description" id="event_description" placeholder="Describe your event in brief" className="border-[1px] border-purple-500 rounded-md px-3 py-1 h-36" />
                    </div>
                    <div className="flex flex-col w-1/2">
                        <label htmlFor="host_of_the_event" className="my-2 font-semibold">Host of the Event</label>
                        <textarea name="host_of_the_event" id="host_of_the_event" placeholder="Who's hosting the event" className="border-[1px] border-purple-500 rounded-md px-3 py-1 h-36" />
                    </div>
                </div>
                <div className="flex justify-around items-center w-full my-3 gap-6">
                    <div className="flex flex-col w-1/2">
                        <label htmlFor="target_audience" className="my-2 font-semibold">Target Audience</label>
                        <textarea name="target_audience" id="target_audience" placeholder="Expected target audience to your event" className="border-[1px] border-purple-500 rounded-md px-3 py-1 h-36" />
                    </div>
                    <div className="flex flex-col w-1/2">
                        <label htmlFor="event_sponsors" className="my-2 font-semibold">Event Sponsors</label>
                        <textarea name="event_sponsors" id="event_sponsors" placeholder="Sponsors of the Event" className="border-[1px] border-purple-500 rounded-md px-3 py-1 h-36" />
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="event_link" className="my-2 font-semibold">Link for the Event</label>
                    <input type="text" name="event_link" id="event_link" placeholder="Eg : https://curiousdevelopers.in/" className="border-[1px] border-purple-500 rounded-md px-3 py-1" />
                </div>
    </div>
  );
};

export default OtherDetails;
