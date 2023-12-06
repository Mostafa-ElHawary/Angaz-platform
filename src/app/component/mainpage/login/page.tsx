"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Support from "@/app/assets/svgImg/undraw_showing_support_re_5f2v.svg";

const Signup: React.FC = () => {
  return (
    <section className="h-full mt-10 mb-14">
      <div className="p-4 md:p-8 rounded-md w-full flex items-center justify-center flex-wrap xl:flex-nowrap xl:justify-around">
        <div className="text-center mb-6">
          <Image src={Support} alt="Your Image Alt" width={500} height={250} />
        </div>

        <form className="flex flex-col w-full mt-7 xl:mt-0 lg:w-[80%] xl:w-[45%]">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mt-4 mb-2">
              تسجيل دخول
            </h3>
            <p className="text-sm text-white text-opacity-70 mb-4">
              رجاء ادخل بياناتك لتسجيل الدخول
            </p>
          </div>
          <button
            type="button"
            className="bg-white text-gray-800 py-2 rounded-sm mb-4 hover:bg-opacity-80 transition w-full flex justify-center items-center gap-6"
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google Logo"
              width={24}
              height={24}
            />
            Sign in with Google
          </button>

          <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-medium dark:text-neutral-200">
              أو
            </p>
          </div>
          <div className="grid grid-cols-1 w-full gap-5">
            {[
              { label: "اسم المستخدم او البريد الالكتروني", type: "text" },
              { label: "كلمه السر", type: "password" },
            ].map((input, index) => {
              return <Input key={index} {...input} />;
            })}
          </div>
          <div
            className="flex justify-between items-center  mt-2 mb-4"
            dir="rtl"
          >
            <p className="text-sm mt-4 mb-6 text-white" dir="rtl">
              <Link href="/f" className="text-blue-200 hover:underline">
                هل نسيت كلمه المرور؟{" "}
              </Link>
            </p>
            <div className="flex items-center" dir="ltr">
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-md focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="link-checkbox"
                className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300"
              >
                تذكرني
              </label>
            </div>
          </div>

          <button
            type="button"
            className="bg-blue-500 text-white py-2 rounded-sm mb-4 hover:bg-blue-600 transition focus:outline-none w-full"
          >
            تسجيل
          </button>

          <p className="text-sm text-center text-white" dir="rtl">
            ليس لديك حساب؟{" "}
            <Link
              href="/component/mainpage/Signup"
              className="text-blue-200 hover:underline"
            >
              انشاء حساب
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

interface InputProps {
  label: string;
  type: string;
}

const Input: React.FC<InputProps> = ({ label, type }) => {
  return (
    <div dir="rtl" lang="ar" className="w-full">
      <label
        htmlFor={label}
        className="block text-sm font-medium text-white mb-2"
      >
        {label}
      </label>
      <input
        type={type}
        id={label.toLowerCase().replace(" ", "-")}
        className="input-field bg-gray-100 text-gray-800 px-2 py-2 sm:py-3 rounded-sm focus:outline-none focus:ring focus:border-blue-300 block w-full"
      />
    </div>
  );
};

export default Signup;
