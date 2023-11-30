import React from "react";
import UserCard from "./UserCard";
export default function Bestfreelancers() {
  return (
    <section className="relative mt-28 mb-28 sm:mb-4">
      <div className="bg-gray-800 text-white p-8 rounded-md shadow-md">
        <h2 className="text-3xl font-bold mb-4">Our Best Freelancers</h2>
        <p className="text-lg mb-4">
          Welcome to our community. We will be happy to have you join us and
          participate in what we do.
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
          More Freelancers
        </button>
      </div>
      {/* As real data will be fetched from an API, for now, it's fake */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </section>
  );
}
