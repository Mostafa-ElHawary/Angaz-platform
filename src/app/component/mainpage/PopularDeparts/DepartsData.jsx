"use client";
import React, { useState } from "react";
import Image from "next/image";
const DepartsData = ({ title, icon }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <section className=" grid item-center justify-center bg-white dark:bg-gray-950 p-4 rounded-md shadow-md w-[10rem]">
      <div className="grid grid-col items-center justify-center mb-4">
        <Image src={icon} className="grid grid-col items-center justify-center text-xl pb-6"   width={70} height={70}/>
        <h2 className="text-lg text-center normal-case  hover:text-blue-600 cursor-pointer gray-800 ">{title}</h2>
      </div>
    </section>
  );
};
export default DepartsData;
