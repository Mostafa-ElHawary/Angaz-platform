"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Support from "@/app/assets/svgImg/undraw_showing_support_re_5f2v.svg";

const Signup: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <div className="p-4 md:p-8 rounded-md w-full max-w-md ">
        <div className="text-center mb-6">
          <Image src={Support} alt="Your Image Alt" width={600} height={250} />
        </div>

        <form className="flex flex-col">
          <h3 className="text-3xl font-bold text-white mt-4">Create a New Account</h3>
          <p className="text-sm text-white mb-4">Write your signup data</p>

          <button className="bg-yellow-400 text-gray-800 py-2 rounded-md mb-4 hover:bg-yellow-500 transition w-full">
            Sign up with Google
          </button>

          <div className="mb-4 text-center text-white">or</div>

          {[
            { label: "First Name", type: "text" },
            { label: "Last Name", type: "text" },
            { label: "Your Email", type: "email" },
            { label: "Your Number", type: "tel" },
            { label: "Your Password", type: "password" },
            { label: "Confirm Password", type: "password" },
          ].map((input, index) => (
            <Input key={index} {...input} />
          ))}

          <p className="text-sm mt-4 mb-6 text-white">
            By registering in Enjaz, you agree to the privacy, terms, and conditions
          </p>

          <button
            type="button"
            className="bg-blue-500 text-white py-2 rounded-md mb-4 hover:bg-blue-600 transition focus:outline-none w-full"
          >
            Sign Up
          </button>

          <p className="text-sm text-center text-white">
            Already have an account?{' '}
            <Link href={``} className="text-blue-200 hover:underline">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

interface InputProps {
  label: string;
  type: string;
}

const Input: React.FC<InputProps> = ({ label, type }) => {
  return (
    <div className="mb-4">
      <label htmlFor={label} className="block text-sm font-semibold text-white mb-1">
        {label}
      </label>
      <input
        type={type}
        id={label.toLowerCase().replace(' ', '-')}
        className="input-field bg-gray-100 text-gray-800 placeholder-gray-500 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        placeholder={`Enter ${label}`}
      />
    </div>
  );
};

export default Signup;