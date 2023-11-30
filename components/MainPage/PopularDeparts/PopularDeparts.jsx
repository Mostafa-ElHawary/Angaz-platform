"use client";
import React, { useState } from "react";
import { Departments } from "@/lib/data";
import DepartsData from "./DepartsData";

export default function PopularDeparts() {
  const [Depart, SetQ] = useState(Departments);
  const [value, setValue] = useState(0);
  const { id, topic, duties } = Depart[value];

  return (
    <section className="relative scroll-mt-28 mb-28 sm:mb-4 flex justify-center items-center">
      <div className="md:grid w-90vw mx-auto bg-white rounded-md p-10 max-w-fixed grid gap-4 md:gap-8">
        <h4 className="text-4xl font-bold text-center text-blue-500 mb-12">
          Departs
        </h4>
        <div className=" h-[5rem] grid grid-flow-col gap-4 items-center justify-center">
          {Departments.map((d, indx) => (
            <button
              key={d.id}
              onClick={() => setValue(indx)}
              className={`h-10 capitalize text-base md:text-lg lg:text-xl xl:text-2xl font-normal tracking-wide transition-all cursor-pointer outline-none sm:w-full text-center bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:border-gray-400 focus:ring focus:ring-gray-200${
                indx === value ? "text-blue-500 shadow-md" : ""
              }`}
            >
              {d.topic}
            </button>
          ))}
        </div>
        <section className=" info grid grid-cols-2 md:grid-cols-4 gap-4 text-center justify-center items-center">
          {duties.map((info) => (
            <DepartsData key={info.id} {...info} />
          ))}
        </section>
      </div>
    </section>
  );
}
