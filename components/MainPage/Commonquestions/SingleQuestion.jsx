"use client";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const SingleQuestion = ({ title, info }) => {
    const [showInfo , setShowInfo] = useState(false) 
  return (
    <article className="question p-4 border-2 border-gray-300 mb-4 rounded-md shadow-md">
      <header className="flex justify-between items-center">
        <h4 className="mb-0 normal-case leading-6">{title}</h4>
        <button className="border-transparent w-8 h-8 bg-gray-300 flex items-center justify-center rounded-full text-red-500 cursor-pointer ml-4 self-center min-w-8" onClick={()=> setShowInfo(!showInfo)}>
        {showInfo? <AiOutlineMinus/> : <AiOutlinePlus/>}
        </button>
      </header>
     {showInfo &&  <p className="text-gray-500 mb-0 mt-[0.5rem]" >{info}</p>}
    </article>
  );
};
export default SingleQuestion
