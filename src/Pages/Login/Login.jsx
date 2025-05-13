import React from "react";
import { Link } from "react-router";
import Navbar from "../../Components/Navbar";

const Login = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div>
        <div className="flex  w-full bg-white">
          <div className="flex flex-col justify-center flex-1 p-8 lg:p-16 ">
            <div className="max-w-md w-full border border-green-400 bg-white text-gray-800 p-7 rounded-2xl mx-auto shadow-2xl hover:bg-green-100 transition-colors duration-300">
              <p className="uppercase text-sm font-semibold tracking-wider text-gray-500">
                Stand for Palesinte
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold mt-2 leading-tight">
                Log In
              </h1>

              <form className="mt-10 space-y-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm focus:border-green-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm focus:border-green-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
                />

               <Link to="/">
                <button
                  type="submit"
                  className="w-full rounded-2xl bg-green-600 py-3 font-semibold text-white shadow-md transition hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Log In
                </button>
               </Link>
              </form>
            </div>
          </div>
          <div>
            <img
              src="/public/assets/reg.jpg"
              className="h-[620px] m-12"
              alt="Palesinte"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
