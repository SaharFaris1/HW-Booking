import React from 'react';
import { IoAirplane } from "react-icons/io5";
import { RiShareBoxLine } from "react-icons/ri";
import { LuArrowDownUp } from "react-icons/lu";
import { PiBookFill } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import { CiClock2, CiCircleCheck } from "react-icons/ci";
import { IoBriefcase } from "react-icons/io5";
import { FaArrowRightArrowLeft } from "react-icons/fa6";


function Book() {
  return (
    <div className="flex p-5 max-w-2xl mx-auto">
        
         <div className="flex gap-4 h-12 p-5 items-center">
         <IoAirplane className=" md:hidden lg:hidden w-5 h-6" />

      <p className="text-blue-900">Book</p>
      <ul className="hidden md:flex gap-5 text-white bg-blue-900 p-4 h-10">
        <li >Flight status</li>
        <li>Check-in</li>
        <li>My trips</li>
      </ul>
    </div>
    
  
      <div className="relative p-5">
        <ul className="flex gap-5 text-gray-500">
          <li className="text-black">Flight</li>
          <li>Packages</li>
          <li>Hotel</li>
          <li>Car</li>
          <li className="text-blue-800 flex">Cruise <RiShareBoxLine className="h-6 w-5" /></li>
        </ul>
        <div className="absolute bottom-2 left-4 right-0 h-0.5 bg-gray-400 w-full"></div>
        <div className="absolute bottom-1 left-4 right-0 h-0.5 bg-black w-10"></div>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="flex flex-col w-full p-4">
          <label>From</label>
          <input type="text" placeholder='RUH' className="border rounded w-full p-3" />
        </div>
        <div className="flex justify-between items-center">
  <LuArrowDownUp className="text-blue-800 md:hidden w-9 h-8 absolute right-8 ml-5" />

</div>        <FaArrowRightArrowLeft className="text-blue-800 my-auto hidden md:block w-10 h-10" />
        <div className="flex flex-col w-full p-4">
          <label>To</label>
          <input type="text" placeholder='Destination' className="border rounded w-full p-3" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="flex flex-col w-full p-4">
          <label>Dates</label>
          <input type="date" className="border rounded w-full p-3" />
        </div>
        <div className="flex flex-col w-full p-4">
          <label>Travelers</label>
          <input type="text" placeholder='1 Adult' className="border rounded w-full p-3" />
        </div>
      </div>
      <div className="flex flex-col w- p-4 hidden md:block w-75">
  <input type="text" placeholder='Economy' className="border rounded w-full p-3" />
</div>

<div className="flex flex-col sm:flex-row">
  {/* Advanced Search Section */}
  <div className="flex flex-col p-3 w-full sm:w-auto">
    <h1 className="text-blue-800 flex items-center">
      Advanced search <IoIosArrowForward className="w-6 h-7 ml-2" />
    </h1>
    <p>(Certificates, multi-city and upgrades)</p>
    <div className="flex gap-1">
      <a href="" className="text-blue-800 underline">Changed bag rules</a>
      <p className="text-sm">and</p>
      <a href="" className="text-blue-800 underline">fees for optional services</a>
    </div>
  </div>

  {/* Buttons Section */}
  <div className="flex flex-col items-center p-4 w-full sm:w-auto">
    <button type="button" className="w-full sm:w-60 bg-blue-800 text-white h-12 rounded-full shadow-lg hover:bg-blue-700 md:w-80 transition">
      Find Flights
    </button>
    <button type="button" className="w-full sm:w-60 bg-white text-blue-800 h-12 rounded-full border-2 border-blue-800 md:w-80 flex items-center justify-center gap-2 hover:bg-blue-50 transition mt-2">
      <PiBookFill className="w-5 h-5" />
      Find your travel credits
    </button>
  </div>
</div>
     

      <div className="p-5 md:hidden">
        <ul className="space-y-4">
          <li className="flex items-center justify-between p-4 border-b border-gray-300 hover:bg-gray-100">
            <div className="flex items-center">
              <CiClock2 className="text-blue-900 w-6 h-6 mr-2" />
              <span className="text-gray-700">Flight status</span>
            </div>
            <IoIosArrowForward className="text-gray-500" />
          </li>
          <li className="flex items-center justify-between p-4 border-b border-gray-300 hover:bg-gray-100">
            <div className="flex items-center">
              <CiCircleCheck className="text-blue-900 w-6 h-6 mr-2" />
              <span className="text-gray-700">Check-in</span>
            </div>
            <IoIosArrowForward className="text-gray-500" />
          </li>
          <li className="flex items-center justify-between p-4 border-b border-gray-300 hover:bg-gray-100">
            <div className="flex items-center">
              <IoBriefcase className="text-blue-900 w-6 h-6 mr-2" />
              <span className="text-gray-700">My trips</span>
            </div>
            <IoIosArrowForward className="text-gray-500" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Book;