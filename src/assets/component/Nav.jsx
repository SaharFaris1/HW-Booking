import React from 'react'
import { FiMenu } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { TbWorld } from "react-icons/tb";

function Nav() {
  return (
    <nav className="flex justify-around items-center p-4 lg:p-4 bg-black">
        <div className="flex justify-evenly gap-8 ">
     <img c src="https://www.united.com/2500e4e62233fbfe8ac6.unitedLogoNew.svg" className="w-20 h-15" alt="" />
    <ul className="lg:flex gap-10 hidden  text-white">
      <li className="flex hover:text-blue-400">Book <IoIosArrowDown className="w-5 h-7" /> </li>
      <li className="flex hover:text-blue-400">Mytrips <IoIosArrowDown className="w-5 h-7" /> </li>
      <li className=" flex hover:text-blue-400">Travel info <IoIosArrowDown className="w-5 h-7" /></li>
      <li className="flex hover:text-blue-400">MileagePlus <IoIosArrowDown className="w-5 h-7" /> </li>
      <li className="flex hover:text-blue-400">Deals <IoIosArrowDown className="w-5 h-7" /></li>
      <li className="flex hover:text-blue-400">Help <IoIosArrowForward className="w-5 h-7"  /></li>

    </ul>
    </div>
    <div className="flex gap-5">
    <button  className=" lg:flex md:flex gap-2 hidden w-30 h-10 rounded-lg text-white hover:bg-blue-400">
    <TbWorld className="w-5 h-6" />
  English-US$
    </button>
    <div className="flex gap-4"> 
    <IoIosSearch className=" md:text-white w-7 h-10 text-white hover:bg-blue-400 rounded-b-2xl" />
    <IoMdPerson className=" w-7 h-10 text-white  hover:bg-blue-400 rounded-b-2xl"  />
    <FaShoppingCart className=" w-7 h-10 text-white  hover:bg-blue-400 rounded-b-2xl" />
    <FiMenu className="lg:hidden  w-7 h-10 text-white  hover:bg-blue-400 rounded-b-2xl" />
   
    </div>
    </div>
  </nav>
);
}

export default Nav