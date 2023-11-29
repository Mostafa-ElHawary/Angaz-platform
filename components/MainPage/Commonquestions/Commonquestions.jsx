"use client";
import React, { useState } from "react";
import { questions } from "@/lib/data";
import SingleQuestion from "./SingleQuestion";

export default function Commonquestions() {
  // const [question, setQuestion] = useState(questions);
  const [que, SetQ] = useState(questions);
  const [value, setValue] = useState(0);
  const { id, topic, duties } = que[value];

  //  Note : this question in data need to a real question it;s just a fake write now
  return (
    <section className=" relative scroll-mt-28 mb-28 sm:mb-4 ">
      <div className="w-80vw  max-w-screen-l md:grid md:grid-cols-250 md:grid-flow-col w-90vw mx-auto bg-white rounded-md p-10 max-w-fixed grid gap-4 md:gap-8">
        <div className="btn-container grid grid-flow-col md:grid-flow-row justify-center mb-16 flex-wrap">
          {questions.map((q, indx) => {
            return (
              <button
                key={q.id}
                onClick={() => setValue(indx)}
                className={`bg-transparent border-transparent capitalize text-base md:text-lg lg:text-xl xl:text-2xl font-normal letter-spacing-[-0.01562rem] mx-2 transition-transform cursor-pointer py-1 outline-primary  ${
                  indx === value && "text-blue-500 shadow-blue-500"
                }`}
              >
                {q.topic}
              </button>
            );
          })}
        </div>
        <section className="info">
          {duties.map((info) => {
            return <SingleQuestion key={info.id} {...info} />;
          })}
        </section>
      </div>
    </section>
  );
}
