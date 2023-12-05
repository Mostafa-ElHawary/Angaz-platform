import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <section className="flex flex-col items-center justify-center h-screen ">
      <div className=" p-8 rounded-md shadow-md w-full max-w-md">
        <div className="text-center mb-8">
          <Image src={``} alt="Your Image Alt" width={80} height={80} />
          <h3 className="text-3xl font-extrabold mt-4 text-gray-800">
            Welcome Back!
          </h3>
          <p className="text-sm text-gray-500">Log in to your account</p>
        </div>

        <button className="btn-google mb-4">Sign in with Google</button>

        <div className="divider mb-4"></div>

        <form className="flex flex-col">
          {[
            { label: "Your Email", type: "email" },
            { label: "Your Password", type: "password" },
          ].map((input, index) => (
            <Input key={index} {...input} />
          ))}

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <Link href={``} className="text-sm text-blue-500 hover:underline">
              Forgot Password?
            </Link>
          </div>

          <button className="btn-login mb-4">Log In</button>

          <p className="text-sm text-gray-600 text-center">
            Don't have an account?{" "}
            <Link href={``} className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

function Input({ label, type }: any) {
  return (
    <div className="mb-4">
      <label
        htmlFor={label}
        className="block text-sm font-semibold text-gray-600 mb-1"
      >
        {label}
      </label>
      <input
        type={type}
        id={label.toLowerCase().replace(" ", "-")}
        className="input-field"
        placeholder={label}
      />
    </div>
  );
}
