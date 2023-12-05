"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Support from "@/app/assets/svgImg/undraw_showing_support_re_5f2v.svg";

export default function Signup() {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <div className="p-4 md:p-8 rounded-md w-full max-w-md">
        <div className="text-center mb-6">
          <Image src={Support} alt="Your Image Alt" width={600} height={250} />
        </div>

        <form className="flex flex-col">
          <h3 className="text-2xl font-bold mt-4">Create a New Account</h3>
          <p className="text-sm text-gray-500 mb-4">Write your signup data</p>

          <button className="bg-blue-500 text-white py-2 rounded-md mb-4 hover:bg-blue-600 transition w-full">
            Sign up with Google
          </button>

          <div className="mb-4 text-center">or</div>

          {[
            { label: "First Name", type: "text" },
            { label: "Last Name", type: "text" },
            { label: "Your Email", type: "email" },
            { label: "Your Number", type: "number" },
            { label: "Your Password", type: "password" },
            { label: "Confirm Password", type: "password" },
          ].map((input, index) => (
            <Input key={index} {...input} />
          ))}

          <p className="text-sm mt-4 mb-6 text-gray-500">
            By registering in Enjaz, you agree to the privacy, terms, and conditions
          </p>

          <button
            type="button"
            className="bg-blue-500 text-white py-2 rounded-md mb-4 hover:bg-blue-600 transition focus:outline-none w-full"
          >
            Sign Up
          </button>

          <p className="text-sm text-center">
            Already have an account?{' '}
            <Link href={``} className="text-blue-500 hover:underline">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

function Input({ label, type, placeholder }: any) {
  return (
    <div className="mb-4">
      <label htmlFor={label} className="block text-sm font-semibold mb-1">
        {label}
      </label>
      <input
        type={type}
        id={label.toLowerCase().replace(' ', '-')}
        className="input-field"
        placeholder={placeholder}
      />
    </div>
  );
}