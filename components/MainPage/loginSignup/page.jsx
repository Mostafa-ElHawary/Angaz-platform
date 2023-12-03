import React from "react";
import Image from "next/image";
export default function LoginSignup() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Image
        src="your-image-source"
        alt="Your Image Alt"
        width={200}
        height={200}
      />

      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h3 className="text-2xl font-bold mb-4">Create a New Account</h3>
        <p className="text-sm mb-4">Write your signup data</p>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4">
          Sign up with Google
        </button>

        <p className="mb-4">or</p>

        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-semibold mb-1"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="w-full px-3 py-2 border rounded-md mb-2 focus:outline-none focus:border-blue-500"
            placeholder="First Name"
          />

          <label
            htmlFor="lastName"
            className="block text-sm font-semibold mb-1"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="w-full px-3 py-2 border rounded-md mb-2 focus:outline-none focus:border-blue-500"
            placeholder="Last Name"
          />

          <label htmlFor="email" className="block text-sm font-semibold mb-1">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded-md mb-2 focus:outline-none focus:border-blue-500"
            placeholder="Your Email"
          />

          <label htmlFor="number" className="block text-sm font-semibold mb-1">
            Your Number
          </label>
          <input
            type="number"
            id="number"
            className="w-full px-3 py-2 border rounded-md mb-2 focus:outline-none focus:border-blue-500"
            placeholder="Your Number"
          />

          <label
            htmlFor="password"
            className="block text-sm font-semibold mb-1"
          >
            Your Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border rounded-md mb-2 focus:outline-none focus:border-blue-500"
            placeholder="Your Password"
          />

          <label
            htmlFor="confirmPassword"
            className="block text-sm font-semibold mb-1"
          >
            Your Password Again
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full px-3 py-2 border rounded-md mb-4 focus:outline-none focus:border-blue-500"
            placeholder="Your Password Again"
          />

          <p className="text-sm mb-4">
            By registering in Enjaz, you agree to the privacy, terms, and
            conditions
          </p>

          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 focus:outline-none"
          >
            Sign Up
          </button>

          <p className="text-sm">
            Already have an account?{" "}
            <Link href="your-login-route">
              <a className="text-blue-500">Log in</a>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
