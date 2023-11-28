"use client";
import React , {useState} from 'react'
import { questions } from "@/lib/data";
import SingleQuestion from "./SingleQuestion";

export default function Commonquestions() {
  const [question, setQuestion] = useState(questions);
//  Note : this question in data need to a real question it;s just a fake write now
  return (
    <main className='min-h-screen flex items-center justify-center'>
      <div className="container md:grid md:grid-cols-250 md:grid-flow-col w-90vw mx-auto bg-white rounded-md p-10 max-w-fixed grid gap-4 md:gap-8">
        <h3 className='leading-5 font-normal'>Frequently Asked Questions</h3>
        <section className="info">
          {question.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );

}
