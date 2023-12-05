import React from "react";
import Image from "next/image";
import { Testimonials } from "@/app/lib/data";
export default function ClintComment() {
  return (
    <section className="py-16 " id="testimonials ">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-500 mb-12">
          What our customers said about us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 ">
          {Testimonials.map((testimonial) => (
                <div
                key={testimonial.id}
                className=" overflow-hidden p-6"
              >
                <Image
                  src={testimonial.image}
                  width={40}
                  height={40}
                  quality={95}
                  title=""
                  alt=""
                  className="w-20 h-20  mb-4 rounded-full object-cover"
                ></Image>
                <h4 className="text-xl font-semibold mb-2">{testimonial.name}</h4>
                <h5 className="text-gray-600 dark:text-gray-500  mb-4">{testimonial.position}</h5>
                <p className="text-gray-700 dark:text-gray-50 ">{testimonial.comment}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
