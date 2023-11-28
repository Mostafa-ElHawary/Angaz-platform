"use client";
import React, { useState } from "react";
import { questions } from "@/lib/data";
import { q } from "@/lib/data";
import SingleQuestion from "./SingleQuestion";

export default function Commonquestions() {
  const [question, setQuestion] = useState(questions);
  const [que, SetQ] = useState(q);
  const [value, setValue] = useState(0);
  const { company, dates, duties, title } = que[value];
  console.log(
    q.map((q, indx) => {
      return q.topic;
    })
  );
  //  Note : this question in data need to a real question it;s just a fake write now
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="container  w-80vw  max-w-screen-l md:grid md:grid-cols-250 md:grid-flow-col w-90vw mx-auto bg-white rounded-md p-10 max-w-fixed grid gap-4 md:gap-8">
        {/* <h3 className="leading-10 font-bold">Frequently Asked Questions</h3> */}
        <div className="btn-container grid grid-flow-col md:grid-flow-row justify-center mb-16 flex-wrap">
          {q.map((q, indx) => {
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
          {duties.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}
