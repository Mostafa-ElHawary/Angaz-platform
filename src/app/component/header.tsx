"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { TfiEmail } from "react-icons/tfi";
import LanguageSwitcher from "./Languages";
import { AiOutlineClose } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { links } from "../lib/data";

export default function Header() {
  const pathname = usePathname();
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header
      className="z-[999] md:sticky w-full m-auto lg:top-4 xl:w-[90%]"
      dir="rtl"
    >
      <div className="flex md:hidden justify-between items-center bg-white dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 bg-opacity-50 shadow-xl rounded-md border border-white border-opacity-25 pl-3 pr-3 py-[2px] w-full m-auto">
        <div className="flex items-center gap-5 text-2xl">
          <button className="text-gray-600 hover:text-[#1967D3]">
            <IoCartOutline />
          </button>
          <button className="text-gray-600 hover:text-[#1967D3]">
            <GoBell />
          </button>
          <button className="text-gray-600 hover:text-[#1967D3]">
            <TfiEmail />
          </button>
        </div>

        <div className="flex justify-center items-center text-[18px]">
          <Link
            href="/component/mainpage/login"
            className="text-center  bg-gray-400 text-white py-[2px] px-7"
          >
            دخول
          </Link>
          <Link
            href="/component/mainpage/Signup"
            className="text-center bg-[#1967D3] text-white py-[2px] px-3 hover:bg-gray-400 focus:outline-none focus:border-gray-400 focus:ring focus:ring-gray-200"
          >
            حساب جديد
          </Link>
        </div>
      </div>
      <div className="flex justify-between items-center pt-3 md:pt-5 flex-row-reverse md:flex-row lg:bg-white lg:bg-opacity-80 lg:shadow-lg lg:rounded-md lg:border lg:border-white lg:border-opacity-25 p-4">
        {/* Burger Icon */}
        <button
          onClick={handleNav}
          className="block lg:hidden text-gray-600 text-[1.8rem] relative hover:text-[#1967D3]"
        >
          &#9776;
        </button>
        <div className="text-[#1967D3] text-4xl font-noto-sans-arabic font-extrabold break-words">
          <Link href="/">Angaz</Link>
        </div>

        {/* Other Buttons & Login/Signup */}
        <div className="hidden md:flex items-center gap-7 text-[1.5rem]">
          <ul
            className={`hidden lg:flex sm:items-center sm:gap-12 sm:mx-10`}
            lang="ar"
          >
            {links.map((link) => (
              <motion.li
                key={link.id}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  href={link.hash}
                  className="text-gray-700 text-xl normal-case hover:text-[#1967D3] cursor-pointer"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>

          <button className="text-gray-600 hover:text-[#1967D3]">
            <IoCartOutline />
          </button>
          <button className="text-gray-600 hover:text-[#1967D3]">
            <GoBell />
          </button>
          <button className="text-gray-600 hover:text-[#1967D3]">
            <TfiEmail />
          </button>
          {/* Login and Signup */}
          <div className="flex justify-center items-center sm:w-[160px] text-[17px]">
            <Link
               href="/component/mainpage/login"
              className="text-center text-[#1967D3] hover:bg-gray-400 hover:text-white py-2 px-3"
            >
              دخول
            </Link>
            <Link
              href="/component/mainpage/Signup"
              className="w-full text-center bg-[#1967D3] text-white px-4 py-2 hover:bg-gray-400 focus:outline-none focus:border-gray-400 focus:ring focus:ring-gray-200"
            >
              حساب جديد
            </Link>
          </div>
        </div>

        {/* Language Selector */}
        <div className="items-center flex-row-reverse text-[18px] hidden lg:flex">
          <LanguageSwitcher />
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        onClick={handleNav}
        className={
          nav ? "lg:hidden fixed right-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? "fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] dark:bg-gray-950 p-10 ease-in duration-500"
              : "fixed right-[-100%] top-0 p-10 ease-in duration-500 h-screen"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link
                href="/"
                style={{
                  color: "#1967D3",
                  fontFamily: "",
                  fontSize: "45px",
                  fontWeight: "bolder",
                  marginLeft: "10px",
                }}
              >
                Angaz
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 dark:shadow-none p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4"></div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              {links.map((link) => {
                return (
                  <Link href={`${link.hash}`} key={link.id}>
                    <li
                      onClick={() => setNav(false)}
                      className={
                        pathname === link.hash
                          ? "py-4 text-xl active2 font-medium"
                          : "py-4 text-xl font-medium"
                      }
                    >
                      {link.name}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
          {/* Language Selector */}
          <div className="items-center flex-row text-[18px] flex mb-5">
            <LanguageSwitcher />
          </div>
          <div className="flex justify-center items-center text-[18px]">
            <Link
                href="/component/mainpage/login"
              className="w-full text-center bg-gray-400 text-white py-2"
            >
              دخول
            </Link>
            <Link
               href="/component/mainpage/Signup"
              className="w-full text-center bg-[#1967D3] text-white px-4 py-2 hover:bg-gray-400 focus:outline-none focus:border-gray-400 focus:ring focus:ring-gray-200"
            >
              حساب جديد
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
