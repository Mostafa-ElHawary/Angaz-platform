"use client";
import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
// import clsx from "clsx";
import { AiOutlineGlobal } from "react-icons/ai";

export default function Header() {
  return (
    <header className={` z-[999] relative`}>
      <motion.div
        className=" "
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <div className="  p-1 headwrapper grid grid-cols-2 lg:grid-cols-6 lg:col-span-1">
        <div className="flex log-Srch  p-4 justify-center items-center lg:col-span-1">
          <img className="w-8 h-8" src="" alt="" />
          <input
            type="text"
            name="Search"
            placeholder="Search"
            className="ml-2 border border-gray-300 px-2 py-1 w-[150px] rounded-md focus:outline-none focus:border-blue-500"
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
                  className=" flex flex-col justify-center items-center p-4 pl-2 pr-2"
                >
                  {link.icon}
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        <div className="flex justify-center items-center log-lang  lg:col-span-2">
          <div className="">
            <button className="login sm:w-[70px]  bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200">
              Login
            </button>
            <button className="signup sm:w-[70px]   ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:border-gray-400 focus:ring focus:ring-gray-200">
              SignUp
            </button>
          </div>
          <div className="flex items-center ">
            <AiOutlineGlobal className="w-6 h-6 mr-2 rounded-full" />
            <select
              id="langs"
              className="border border-gray-300 px-2 py-1 rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="volvo">English</option>
              <option value="saab">Arabic</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}
