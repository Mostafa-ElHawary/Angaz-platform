import React from "react";
import Image from "next/image";
export default function WhyAngaz() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">
          <i className="fas fa-question-circle text-blue-500"></i> Why Angaz
        </h2>
        <p className="text-lg text-center mb-12">
          Angaz works to provide a professional and safe environment for dealing
          between entrepreneurs and independents through:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center items-center mb-8 md:mb-0">
            <p className="text-2xl font-semibold mb-4">Business Owner</p>
            <ul className="list-disc list-inside">
              <li>
                Full guarantee of your rights and distinguished technical
                support at your service
              </li>
              <li>No additional fees, just pay for your purchases</li>
              <li>
                Enjoy the challenges section, the exclusive section in the Arab
                world
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <img src={``} alt="Business Owner" className="max-h-96" />
          </div>

          <div className="flex justify-center items-center">
            <img src={``} alt="The Independent" className="w-full" />
          </div>
          <div className="flex flex-col justify-center items-center mb-8 md:mb-0">
            <p className="text-2xl font-semibold mb-4">The Independent</p>
            <ul className="list-disc list-inside">
              <li>
                Full guarantee of your rights and distinguished technical
                support at your service
              </li>
              <li>
                The balance suspension period may only last up to two days
              </li>
              <li>The site commission may reach only 10%</li>
              <li>
                Various and easy means of withdrawing profits (Visa - MasterCard
                - PayPal - Vodafone Cash - bank transfer and many other
                methods...)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
