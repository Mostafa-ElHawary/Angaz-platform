import Image from "next/image";
import Link from "next/link";
import coffe from "@/app/assets/svgImg/undraw_coffee_time_e8cw.svg";


interface LoginProps {
  backgroundImage: string;
}

const Login: React.FC<LoginProps> = ({ backgroundImage }) => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <Image src={coffe} alt="Your Image Alt" width={500} height={80} />
      <div className="container mx-auto mt-8 p-8 bg-white rounded-xl shadow-2xl flex flex-col md:flex-row">
        <div className="flex-1 md:p-8">
          <h2 className="text-4xl font-extrabold text-indigo-600 mb-4">
            Welcome Back!
          </h2>
          <p className="text-lg text-gray-700 mb-6">Log in to your account</p>
          <div className="mb-6 space-y-4">
            <Link
              href={``}
              passHref
              className="btn-google flex items-center justify-center bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition w-full"
            >
              <i className="fab fa-google mr-2"></i> Sign in with Google
            </Link>
          </div>
          <div className="border-b border-gray-400 mb-6"></div>
          <form className="flex flex-col space-y-4">
            <Input label="Your Email" type="email" />
            <Input label="Your Password" type="password" />
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <Link
                href={``}
                passHref
                className="text-sm text-indigo-500 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
            <button
              type="button"
              className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition focus:outline-none w-full"
            >
              Log In
            </button>
          </form>
          <p className="text-lg text-gray-700 mt-6">
            Don't have an account?{' '}
            <Link
              href={``}
              passHref
              className="text-indigo-500 hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
        <div className="hidden md:flex md:items-center md:justify-center md:p-8">
          <Image src={backgroundImage} alt="" />
        </div>
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
    <div className="mb-6">
      <label
        htmlFor={label}
        className="block text-lg font-semibold text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        type={type}
        id={label.toLowerCase().replace(' ', '-')}
        className="input-field px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-indigo-500"
        placeholder={label}
      />
    </div>
  );
};

export default Login;