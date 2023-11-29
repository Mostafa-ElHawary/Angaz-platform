import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";
import MasterCard from "@/public/svgImg/MasterCard.svg";
import Visa from "@/public/svgImg/visa.svg";
import Paypal from "@/public/svgImg/paypal.svg";
import Fawry from "@/public/svgImg/fawry.webp";
import Vodafone from "@/public/svgImg/vodafone.svg";
import EgyptianPost from "@/public/svgImg/egyptian-post.webp";

export default function Footer() {
  return (
    <footer>
      <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5 ">
          <div className="col-12 col-sm-6 col-md-3">
            <p className="text-gray-800 font-bold text-2xl pb-4">
              Payment Methods{" "}
            </p>

            <div className="grid grid-cols-5  justify-center items-center">
              <Image
                src={MasterCard}
                alt="mastercard"
                width="70"
                height="70"
                quality="95"
                priority={true}
                title=""
                data-original-title="Mastercard"
              ></Image>
              <Image
                src={Visa}
                alt="Visa"
                width="70"
                height="70"
                quality="95"
                priority={true}
                title=""
                data-original-title="Visa"
              ></Image>

              <Image
                src={Paypal}
                alt="Paypal"
                width="40"
                height="40"
                quality="95"
                priority={true}
                title=""
                data-original-title="Paypal"
              ></Image>

              <Image
                src={Fawry}
                alt="Fawry"
                width="40"
                height="40"
                quality="95"
                priority={true}
                title=""
                data-original-title="Fawry"
              ></Image>

              <Image
                src={Vodafone}
                alt="Vodafone"
                width="40"
                height="40"
                quality="95"
                priority={true}
                title=""
                data-original-title="Vodafone"
              ></Image>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-3">
            <p className="text-gray-800 font-bold text-2xl pb-4">
            Withdrawals Methods{" "}
            </p>

            <div className="grid grid-cols-5  justify-center items-center">
 
              <Image
                src={EgyptianPost}
                alt="EgyptianPost"
                width="40"
                height="40"
                quality="95"
                priority={true}
                title=""
                data-original-title="EgyptianPost"
              ></Image>

              <Image
                src={Fawry}
                alt="Fawry"
                width="40"
                height="40"
                quality="95"
                priority={true}
                title=""
                data-original-title="Fawry"
              ></Image>

              <Image
                src={Vodafone}
                alt="Vodafone"
                width="40"
                height="40"
                quality="95"
                priority={true}
                title=""
                data-original-title="Vodafone"
              ></Image>
            </div>
          </div>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Projects
</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            Programming
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            Design projects
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            Marketing projects
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            Project support
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            Training projects
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            Categories
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              About Angaz
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Team Of Service
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Pricing
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Careers
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Press & Media
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Points System
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Contact Us
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Support Portals
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              List Of Charges
            </li>
          
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Help Center
            </li>
          </ul>

          <ul>
            <div className="flex gap-6 pb-5">
              <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
              <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
            </div>
          </ul>
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
