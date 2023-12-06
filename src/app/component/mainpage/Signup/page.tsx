"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Support from "@/app/assets/svgImg/undraw_showing_support_re_5f2v.svg";
import PhoneInput from "react-phone-input-2";

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
              انشيء حساب جديد
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
            Sign up with Google
          </button>

          <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-medium dark:text-neutral-200">
              أو
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5">
            {[
              { label: "الاسم الأخير", type: "text" },
              { label: "الاسم الأول", type: "text" },
              { label: "الرقم الشخصي", type: "tel" },
              { label: "البريد الالكتروني", type: "email" },
              { label: "تأكيد كلمه السر", type: "password" },
              { label: "كلمه السر", type: "password" },
            ].map((input, index) => {
              if (input.type === "tel") {
                return (
                  <div className="w-full" key={index}>
                    <label
                      dir="rtl"
                      htmlFor={input.label}
                      className="block text-sm font-medium text-white mb-1"
                    >
                      {input.label}
                    </label>
                    <PhoneInput
                      specialLabel={""}
                      country={"eg"}
                      containerStyle={{
                        display: "flex",
                        alignItems: "center",
                        color: "black",
                        padding: "5.5px",
                        borderRadius :"2px",
                        backgroundColor: "#fff",
                      }}
                      buttonStyle={{
                        backgroundColor: "#fff",
                        border: "none",
                        borderRight: "0.5px solid Grey",
                      }}
                      inputStyle={{
                        border: "none",
                        color: "grey",
                        fontSize: "18px !important",
                        outline: "none",
                      }}
                      inputClass=""
                    />
                  </div>
                );
              }
              return <Input key={index} {...input} />;
            })}
          </div>

          <p className="text-sm mt-4 mb-6 text-white placeholder-gray-500" dir="rtl">
            بالتسجيل في انجاز انت توافق علي{" "}
            <Link href={``} className="text-blue-200 hover:underline">
              الخصوصية
            </Link>{" "}
            و
            <Link href={``} className="text-blue-200 hover:underline">
              {" "}
              الشروط والاحكام
            </Link>
          </p>

          <button
            type="button"
            className="bg-blue-500 text-white py-2 rounded-sm mb-4 hover:bg-blue-600 transition focus:outline-none w-full"
          >
            تسجيل
          </button>

          <p className="text-sm text-center text-white" dir="rtl">
            هل لديك حساب بالفعل؟{" "}
            <Link
              href="/component/mainpage/login"
              className="text-blue-200 hover:underline"
            >
              دخول
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
        className="block text-sm font-medium text-white mb-1"
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
