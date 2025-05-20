import React from 'react';
import { IoArrowForward } from "react-icons/io5";

const links = [
    {
        title: "Plan your trip",
        description: "Find a destination and any entry requirements.",
        url: "",
    },
    {
        title: "Visit the Help Center",
        description: "Find info on refunds, bags, seats and more.",
        url: "#",
    },
    {
        title: "Stay connected",
        description: "Get Wi-Fi for your next flight.",
        url: "#",
    },
    {
        title: "Time to start packing",
        description: "Learn more about bringing bags on your trip.",
        url: "#",
    },
    {
        title: "What to know before you go",
        description: "The world of travel has changed, find out how.",
        url: "#",
    },
    {
        title: "See what's on your flight",
        description: "View your seating, food and entertainment options.",
        url: "#",
    },
];

function Cards() {
    return (
        <div>
         <h1 className='font-bold text-2xl p-7'>Useful links for you</h1>   
        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {links.map((link, index) => (
                <div key={index} className=" flex justify-between border rounded-lg p-4 shadow-md hover:shadow-lg hover:border-blue-500  transition-shadow duration-300 ">
                    <div>
                    <h2 className="text-lg font-semibold mb-2">{link.title}</h2>
                    <p className="mb-4">{link.description}</p>
                    </div>
                    <div>
                    <a href={link.url} className="text-blue-800 font-medium flex items-center">
                         <IoArrowForward className="ml-2 w-5 h-20" />
                    </a>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
}

export default Cards;