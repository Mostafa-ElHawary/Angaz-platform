"use client";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { motion } from "framer-motion";
const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <motion.article className="p-4  mb-4 rounded-md shadow-md"
    >
      <header className="flex justify-between items-center"
       >
        <h4 className="mb-0 normal-case leading-6">{title}</h4>
        <button
          className="border-transparent w-8 h-8 bg-gray-300 dark:bg-gray-900  flex items-center justify-center rounded-full text-blue-500 cursor-pointer ml-4 self-center min-w-8"
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <motion.p 
      className="text-gray-500 mb-0 mt-[0.5rem]" 
       initial={{ y: 80, x: "0%", opacity: 0 }}
        animate={{ y: 0, x: "0%", opacity: 1 }}>{info}</motion.p>}
    </motion.article>
  );
};
export default SingleQuestion;
