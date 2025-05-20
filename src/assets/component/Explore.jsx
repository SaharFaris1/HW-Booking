import React from 'react'
import { IoIosWarning } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
function Explore() {
  return (
    <div className="bg-gray-100 flex-col items-center p-5">
<h1 className=" p-3 text-2xl font-bold"> Explore destinations</h1>
<p className="p-2">Not sure where to go? Use our interactive map to find flights to great destinations.</p>
<div className= "hidden  md:flex justify-center p-0.5 bg-red-100 border-2 border-red-500 border-s-8 w-11/12">
<IoIosWarning  className= " h-6 w-10  text-rose-600 "/>
<p>Sorry, no results have been found. Please enter a different origin location or expand your search area.</p>
</div>
<div className="hidden md:flex">
<div className=" hidden md:flex flex-col w-50 p-2">
          <label> Flying from</label>
          <input type="text" placeholder='Riyadh' className=" text-black border rounded p-3 bg-white" />
        </div>
        <div className=" hidden md:flex flex-col w-50 p-2">
          <label> Search type</label>
          <input type="text" placeholder='Riyadh' className=" text-black border rounded p-3 bg-white" />
        </div>
        <div className=" hidden md:flex flex-col w-50 p-2">
          <label> Dates</label>
          <input type="date" className=" text-black border rounded p-3 bg-white" />
        </div>
        <div className=" hidden md:flex flex-col w-50 p-2">
          <label> Max price</label>
          <input type="text" placeholder='$2000' className=" text-black border rounded p-3 bg-white" />
        </div>
<div className='p-8 '>
<button type="button" className=' bg-blue-800 text-white rounded-full shadow-lg hover:bg-blue-700 w-30 h-12 transition'>Search</button>

</div>
<div className="flex text-blue-700 p-10 ">
    <IoIosArrowForward className='w-5 h-6'/>
  <a href="">Refine Search</a>
</div>
</div>
    </div>
  )
}

export default Explore