"use client";
import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
// import clsx from "clsx";
import { AiOutlineGlobal } from "react-icons/ai";

export default function Header() {
  return (
    <header className={` z-[999] relative pr-20 pl-20`}>
      <motion.div
        className=" "
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <div className="=p-1 headwrapper grid grid-cols-2 lg:grid-cols-6 lg:col-span-1 ">
        <div className="flex log-Srch  p-4 justify-center items-center lg:col-span-1">
          {/* we need add logo and editing his size */}
          <img className="w-8 h-8" src="" alt="" />
          <input
            type="text"
            name="Search"
            placeholder="Search"
            className="ml-2 border border-gray-300 px-4 py-2 rounded-md w-[150px]  focus:outline-none focus:border-blue-500"
          />
        </div>

        <nav className="  hidden lg:block  justify-center items-center lg:col-span-3">
          <ul className="grid grid-cols-4 pl-4 pr-4">
            {links.map((link) => (
              <motion.li
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  href={link.hash}
                  className=" flex flex-col justify-center items-center p-4 pl-2 pr-2 gray-800  text-md pb-2 normal-case hover:text-blue-600 cursor-pointer"
                >
                  {/* we need to edit icon size & font size */}
                  {link.icon}
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        <div className="flex justify-center items-center log-lang  lg:col-span-2">
          <div className="flex justify-center items-center sm:w-[200px]">
            <button className="login sm:w-full text-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200">
              Login
            </button>
            <button className="signup sm:w-full text-center ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:border-gray-400 focus:ring focus:ring-gray-200">
              SignUp
            </button>
          </div>
          <div className="flex items-center flex-col ">
            <AiOutlineGlobal className="w-5 h-5 mr-2 rounded-full gray-500" />
            {/* we need to change structure for this opt */}
            <select
              id="langs"
              className=" px-2 py-1 rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="English" className="" name="English">
                English
              </option>
              <option value="Arabic" name="Arabic">
                Arabic
              </option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}
