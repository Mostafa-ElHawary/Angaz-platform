import React from "react";
import Image from "next/image";
export default function UserCard() {
    return (
        <main className="bg-white rounded-md shadow-md p-6 m-4">
          <div className="flex items-center mb-4">
            <div className="mr-4">
              <Image
                src={``}
                alt=""
                width={40}
                height={40}
                quality={95}
                priority={true}
                title=""
                data-original-title=""
                className="rounded-full"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold">User Name</h2>
              <h4 className="text-gray-500">Job Title</h4>
            </div>
            <div className="ml-auto">
              <span className="StarCount text-2xl">5.0</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold">Design</h5>
              <h5>Full Time</h5>
            </div>
            <div>
              <h5 className="font-semibold">Location:</h5>
              <h5>Cairo, Egypt</h5>
            </div>
            <div>
              <h5 className="font-semibold">Salary:</h5>
              <h5>$400-600</h5>
            </div>
          </div>
        </main>
      );
}
