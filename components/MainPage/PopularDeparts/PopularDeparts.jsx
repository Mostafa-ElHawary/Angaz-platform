"use client";
import React, { useState } from "react";
import { Departments } from "@/lib/data";
import DepartsData from "./DepartsData";

export default function PopularDeparts() {
  const [Depart, SetQ] = useState(Departments);
  const [value, setValue] = useState(0);
  const { id, topic, duties } = Depart[value];

  return (
    <main className="min-h-screen  flex items-center justify-center">
      <div className="w-80vw  max-w-screen-l md:grid md:grid-cols-250 md:grid-flow-col w-90vw mx-auto bg-white rounded-md p-10 max-w-fixed grid gap-4 md:gap-8">
        <div className="btn-container grid grid-flow-col md:grid-flow-row justify-center mb-16 flex-wrap">
          {Departments.map((d, indx) => (
            <button
              key={d.id}
              onClick={() => setValue(indx)}
              className={`h-10  capitalize text-base md:text-lg lg:text-xl xl:text-2xl font-normal tracking-wide transition-all cursor-pointer outline-none  sm:w-full text-center ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:border-gray-400 focus:ring focus:ring-gray-200${
                indx === value ? 'text-blue-500 shadow-md' : ''
              }`}
            >
              {d.topic}
            </button>
          ))}
        </div>
        <section className="info grid grid-cols-1 gap-4">
          {duties.map((info) => (
            <DepartsData key={info.id} {...info} />
          ))}
        </section>
      </div>
    </main>
  );
}
