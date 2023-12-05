"use client";
import React, { useState } from "react";
import { Departments } from "@/app/lib/data";
import DepartsData from "./DepartsData";

export default function PopularDeparts() {
  const [departments, setDepartments] = useState(Departments);
  const [value, setValue] = useState(0);
  const { id, topic, duties } = departments[value];

  return (
    <section className="relative scroll-mt-28 mb-28 sm:mb-4 flex justify-center items-center">
      <div className="md:grid w-90vw mx-auto rounded-md p-10 max-w-fixed grid gap-8 md:gap-8  place-content-center">
        <h4 className="text-4xl font-bold text-center text-blue-500 mb-12">
          Departs
        </h4>

        <div className="grid grid-cols-3  gap-4 items-center justify-center ">
          {departments.map((d, indx) => (
            <button
              key={d.id}
              onClick={() => setValue(indx)}
              className={`h-12 text-lg font-medium tracking-wide transition-all cursor-pointer outline-none text-center bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:border-gray-400 focus:ring focus:ring-gray-200${
                indx === value ? "text-blue-500 shadow-md" : ""
              }`}
            >
              {d.topic}
            </button>
          ))}
        </div>

        <section className="grid  grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-center justify-center  items-center place-items-center">
          {duties.map((info) => (
            <DepartsData key={info.id} {...info} />
          ))}
        </section>
      </div>
    </section>
  );
}
