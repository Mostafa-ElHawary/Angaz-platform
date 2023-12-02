import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
// import MasterCard from "@/public/svgImg/MasterCard.svg";
// import Visa from "@/public/svgImg/visa.svg";
// import Paypal from "@/public/svgImg/paypal.svg";
// import Fawry from "@/public/svgImg/fawry.webp";
// import Vodafone from "@/public/svgImg/vodafone.svg";
// import EgyptianPost from "@/public/svgImg/egyptian-post.webp";
import { menuItems, paymentMethods, withdrawalMethods } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="px-20">
      <div className="bg-gray-50 h-1/2 w-full grid grid-cols-2 gap-4 justify-around items-start py-20">
        {menuItems.map((menu, index) => (
          <div
            key={index}
            className={`col-span-2 md:col-span-1 `}
          >
            <div className="mb-8 grid grid-flow-row">
              <h2 className="text-gray-800 font-bold text-2xl pb-4 w-fit">
                {menu.title}
              </h2>

              {menu.items.map((item, itemIndex) => (
                <Link
                  href={item.url}
                  key={itemIndex}
                  className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer w-fit"
                >
                  {item.topic}
                </Link>
              ))}
            </div>

            {menu.title === "Support" && (
              <div className="flex items-center space-x-6">
                <FaInstagram className="text-2xl hover:text-yellow-500" />
                <FaTwitter className="text-2xl hover:text-blue-500" />
                <FaLinkedin className="text-2xl hover:text-blue-500" />
                <FaYoutube className="text-2xl hover:text-red-500" />
              </div>
            )}
          </div>
        ))}

        <div className="col-span-2 md:col-span-1">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Payment Methods</h2>
            <div className="grid grid-cols-5  justify-center items-center">
              {paymentMethods.map((method, methodIndex) => (
                <Image key={methodIndex} {...method} />
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Payment Methods</h2>
            <div className="grid grid-cols-5  justify-center items-center py-5">
            {withdrawalMethods.map((method, methodIndex) => (
                <Image key={methodIndex} {...method} />
              ))}
            </div>
          </div>

       
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
        <h1 className=" text-gray-800 font-semibold">
          © 2023 All rights reserved | Designed & Built by{" "}
          <span className="hover:text-blue-600 font-semibold cursor-pointer">
            Angaz Team{" "}
          </span>
        </h1>
      </div>
    </footer>
  );
}
