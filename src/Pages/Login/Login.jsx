import React from "react";
import Navbar from "../../Components/Navbar";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          
          {/* Left Text Section */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Welcome back! Please login to continue sharing and supporting voices that matter.
            </p>
          </div>

          {/* Right Form Section */}
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
              />

              <label className="label mt-4">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
              />

              <label className="label mt-2">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>

              <button className="btn btn-neutral mt-4">Login</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;