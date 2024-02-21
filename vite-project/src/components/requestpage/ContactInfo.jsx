import React from "react";

const ContactInfo = () => {
  return (
    <div className="flex flex-col md:justify-center md:items-center w-full md:w-auto rounded-lg border-purple-500 border-dashed border-4 p-3 shadow-xl shadow-purple-300">
                <p className="w-full text-xl font-semibold">Contact Info</p>
                <div className="flex flex-col md:flex-row justify-around items-center w-full my-3 gap-6">
                    <div className="flex flex-col w-full">
                        <label htmlFor="first_name" className="my-2 font-semibold">First Name</label>
                        <input type="text" name="first_name" id="first_name" placeholder="First Name" className="border-[1px] border-purple-500 rounded-md px-3 py-1" />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="last_name" className="my-2 font-semibold">Last Name</label>
                        <input type="text" name="last_name" id="last_name" placeholder="Last Name" className="border-[1px] border-purple-500 rounded-md px-3 py-1" />
                    </div>
                </div>
                <div className="flex justify-around items-center w-full">
                    <div className="flex flex-col w-full">
                        <label htmlFor="email" className="my-2 font-semibold">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" className="border-[1px] border-purple-500 rounded-md px-3 py-1" />
                    </div>
                </div>
                <div className="flex justify-around items-center w-full my-3">
                    <fieldset className="flex flex-col w-full">
                        <div className="grid grid-cols-2 place-items-start gap-2 sm:flex justify-around items-center w-full">
                            <div className="flex justify-center items-center">
                                <input type="radio" name="type" id="type1" value="student" className="w-[25px] h-[25.72px] bg-white rounded-full border-2 border-black" />
                                <label htmlFor="type1" className="mx-1 md:mx-3 font-semibold">Mentor</label>
                            </div>
                            <div className="flex justify-center items-center">
                                <input type="radio" name="type" id="type2" value="faculty" className="w-[25px] h-[25.72px] bg-white rounded-full border-2 border-black" />
                                <label htmlFor="type2" className="mx-1 md:mx-3 font-semibold">Mantee</label>
                            </div>
                            <div className="flex justify-center items-center">
                                <input type="radio" name="type" id="type3" value="staff" className="w-[25px] h-[25.72px] bg-white rounded-full border-2 border-black" />
                                <label htmlFor="type3" className="mx-1 md:mx-3 font-semibold">Organization</label>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
  );
};

export default ContactInfo;
