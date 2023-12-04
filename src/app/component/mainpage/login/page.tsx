"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function LoginSignup() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <Image src={``} alt="Your Image Alt" width={80} height={80} />
          <h3 className="text-2xl font-bold mt-4">Create a New Account</h3>
          <p className="text-sm text-gray-500">Write your signup data</p>
        </div>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 hover:bg-blue-600 transition">
          Sign up with Google
        </button>

        <div className="mb-4 text-center">or</div>

        <form className="flex flex-col">
          <Input label="First Name" type="text" placeholder="First Name" />
          <Input label="Last Name" type="text" placeholder="Last Name" />
          <Input label="Your Email" type="email" placeholder="Your Email" />
          <Input label="Your Number" type="number" placeholder="Your Number" />
          <Input label="Your Password" type="password" placeholder="Your Password" />
          <Input label="Confirm Password" type="password" placeholder="Confirm Password" />

          <p className="text-sm mt-4 mb-6 text-gray-500">
            By registering in Enjaz, you agree to the privacy, terms, and conditions
          </p>

          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 hover:bg-blue-600 transition focus:outline-none"
          >
            Sign Up
          </button>

          <p className="text-sm">
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
function Input({ label, type, placeholder } :any) {
  return (
    <div className="mb-4">
      <label htmlFor={label} className="block text-sm font-semibold mb-1">
        {label}
      </label>
      <input
        type={type}
        id={label.toLowerCase().replace(' ', '-')}
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        placeholder={placeholder}
      />
    </div>
  );
}