import React from "react";

const Item = ({date, title, place, icon, tag, text}) => {
  return (              
    <li className="mb-10 ms-6">            
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white">
            <img src={icon} alt="icon"></img>
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
            {title} - {place}
        {tag && (
          <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded d ms-3">
            A venir
          </span>
        )}
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400">{date}</time>
        <p className="mb-4 text-base font-normal text-gray-500">{text}</p>
    </li>
  );
};

export default Item;