import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Break() {
  return (
    <div className='p-10'>
<div className="  flex flex-col md:flex-row bg-black text-white rounded-2xl overflow-hidden shadow-lg">

      <div className="flex-1 p-8 flex flex-col justify-center">
        <h1 className="text-4xl font-semibold mb-6">Break the Wi-Fi barrier</h1>
        <p className="text-lg mb-8">
          Join MileagePlus<sup>®</sup> to access the fastest connectivity in the sky, for free. Now available on select United flights.
        </p>
        <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full border border-blue-700 hover:bg-blue-100 transition w-fit">
          Join now
        </button>
      </div>
      <div className="flex-1 relative">
        <img
          src="https://media.united.com/assets/m/730a5b86b08a82b3/original/1265_Starlink_BelowTheFold_500x300-new.jpg" // replace with actual path
          alt="In-flight entertainment"
          className="w-full h-full object-cover"
        />

      </div>

    </div>
    <div className="flex justify-center items-center space-x-6 p-6">
      <button
        className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-blue-700 text-blue-700 hover:bg-blue-50 transition"
      >
 <IoIosArrowBack/>
      </button>
      <span className="text-xl font-medium">1 / 6</span>
      <button
        className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-blue-700 text-blue-700 hover:bg-blue-50 transition"
      >
            <IoIosArrowForward/>
      </button>
    </div>
    </div>
  );
};

export default Break