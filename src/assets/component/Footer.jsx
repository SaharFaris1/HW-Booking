import React from 'react'
import { RiWifiFill } from "react-icons/ri";
import { IoAirplane } from "react-icons/io5";
import { GiFrogFoot } from "react-icons/gi";
import { ImBullhorn } from "react-icons/im";
import { RiBookmarkFill } from "react-icons/ri";
import { PiBagFill } from "react-icons/pi";
import { AiFillDollarCircle } from "react-icons/ai";
import { MdHeadsetMic } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { RiErrorWarningFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GrShare } from "react-icons/gr";

function Footer() {
  return (
    <div >
<div className="bg-gray-900 h-60 sm:flex-row wrap-anywhere items-center">
  
 
      <div className="flex justify-between mb-4 p-6">
      <h2 className="mb-4 text-white font-bold text-3xl">Popular topics</h2>
        <input
          type="text"
          placeholder="Search united"
          className="md:w-90 p-2 rounded-md focus:ring bg-white"
        />
      </div>
    
<div className='sm:flex md:flex-col item-center'>
<div className=''>
  <ul className=' md:flex  justify-evenly text-white underline'>
    <li className='flex gap-1' > <RiWifiFill className='w-6 h-5'/> Wi-Fi</li>
    <li className='flex gap-1'><IoAirplane className='w-6 h-5'/> Change flight</li>
    <li className='flex gap-1'><GiFrogFoot className='w-6 h-5'/> United Club</li>
    <li className='flex gap-1'><ImBullhorn className='w-6 h-5'/> Traveling with pets</li>
    </ul>  
</div>
<br />
<div className='sm:flex md:flex-col item-center'>
  <ul className=' md:flex justify-evenly text-white underline'>
    <li className='flex gap-1' > <RiBookmarkFill className='w-6 h-5'/> MileagePlus</li>
    <li className='flex gap-1'><PiBagFill className='w-6 h-5'/> Baggage</li>
    <li className='flex gap-1'><AiFillDollarCircle className='w-6 h-5'/> Refund</li>
    <li className='flex gap-1'><MdHeadsetMic className='w-6 h-5'/> Help Center</li>
    </ul>  
</div>
</div>

</div>


<div className="p-5 md:hidden">
        <ul className="space-y-4">
          <li className="flex items-center justify-between p-4 border-b border-gray-300 hover:bg-gray-100">
            <div className="flex items-center">
              <span className="text-gray-700">About United</span>
            </div>
            <SlArrowDown className="text-blue-900 w-6 h5" />

          </li>
          <li className="flex items-center justify-between p-4 border-b border-gray-300 hover:bg-gray-100">
            <div className="flex items-center">
              <span className="text-gray-700">Products and Services</span>
            </div>
            <SlArrowDown className="text-blue-900 w-6 h5" />

          </li>
          <li className="flex items-center justify-between p-4 border-b border-gray-300 hover:bg-gray-100">
            <div className="flex items-center">
              <span className="text-gray-700">Popular destenation</span>
            </div>
            <SlArrowDown className="text-blue-900 w-6 h5" />
          </li>
        </ul>
        <div className='flex justify-between'>
            <h1 className='flex gap-2 text-blue-700'>Careers <BsBoxArrowUpRight className='w-5 h-4'/> </h1>
            <h1 className='flex gap-2 text-blue-700'> <RiErrorWarningFill className='w-6 h-6'/>Important notics  </h1>
        </div>

        
      </div>


      <div className='hidden md:flex justify-between p-3'> 
        
      <ul className='text-blue-700 flex justify-between gap-5 text-sm '>
        <li className='flex gap-1'>
          About United <SlArrowDown className="text-blue-700 w-4 h-5" />
        </li>
        <li className='flex gap-1'>
          Products and services <SlArrowDown className="text-blue-700 w-4 h-5" />
        </li>
        <li className='flex gap-1'>
          Popular destinations <SlArrowDown className="text-blue-700 w-4 h-5" />
        </li>
        <li className='flex gap-1'>
          Careers <BsBoxArrowUpRight className='w-5 h-4' />
        </li >
      </ul>
      <h1 className='flex text-sm text-blue-700'><RiErrorWarningFill className='w-4 h-5'/> Important notics</h1>
    </div>

    <div className='bg-black'>

        <div className='flex justify-between p-5 text-white'>
        <input
          type="text"
          placeholder="Search"
          className="md:w-40 p-2 text-center rounded-3xl border-3 text-blue-800 border-blue-700 focus:ring bg-white"
        /> 
        <h1>English-United State$ | Espanol</h1>
        <div className='flex gap-2'>
<AiFillTikTok/>
<FaFacebookSquare/>
<FaXTwitter/>
<FaYoutube/>
<FaInstagram/>
<FaLinkedinIn/>
        </div>
        </div>
        <div className=' content-start'>
  <ul className=' md:flex justify-evenly text-blue-300  underline text-sm'>
    <li  >  Contract of carriage</li>
    <li >Lengthy tarmac delay plan</li>
    <li >Legal information</li>
    <li > Our United Customer Commitment </li>
    <li > Help Center </li>
    <li> Accessible travel</li>
    <li > Privacy Policy</li>
    </ul>  
</div>
<br />
<div className=''>
  <ul className=' md:flex justify-evenly text-blue-300 underline text-sm'>
    <li className='flex gap-1'  >  Do Not Sell or Share My Personal Information <GrShare className='w-3 h-4' /> </li>
    <li >Interest Based Ads</li>
    <li className='flex gap-1'  >United Jetstream <GrShare/> </li>
    <li className='flex gap-1'  > Cargo <GrShare/> </li>
    <li  className='flex gap-1' > Electronic Invoice <GrShare/> </li>
  
    </ul>  
</div>

<div className='flex justify-between p-3'>
    <p className='text-sm text-white flex gap-1 '> <GrShare className='w-6 h-5'/> Indicates an external site that may or may not meet accessibility guidelines. Copyright © 2025 United Airlines, Inc. All rights reserved.</p>
<div className='flex'>
    <img src="https://www.united.com/3149651732b3c9591453.UnitedLogoInverted.svg" alt="" srcset="" />
<img src="https://www.united.com/dd45368f41b2bc6e1df9.StarAlliance.svg" alt="" srcset="" />
</div>
</div>

<div className="flex items-center justify-center ">
  <button className="content-center bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg border border-blue-700 hover:bg-blue-100 transition w-fit">
    CoBrowse
  </button>
</div>
    </div>
  
     


    </div>
  )
}

export default Footer