import React from "react";
import { NavLink } from "react-router";
import { MdLanguage } from "react-icons/md";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink className="font-bold text-green-600" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="font-bold text-green-600" to="/stories">
          Stories
        </NavLink>
      </li>
      <li>
        <details>
          <summary className="font-bold text-green-600">Timeline</summary>
          <ul className="p-2 bg-white rounded-box shadow space-y-2">
            <li>
              <NavLink className="font-bold text-green-600" to="/educate">
                Educate
              </NavLink>
            </li>
            <li>
              <NavLink className="font-bold text-green-600" to="/map">
                Map
              </NavLink>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <NavLink className="font-bold text-green-600" to="/voice">
          Voice
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar z-50 backdrop-blur-md bg-green-50 px-2 md:px-6 border-b border-white/20 sticky top-0 shadow-md w-full">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost size-15 lg:hidden">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[60] p-2 shadow bg-white rounded-box w-52"
          >
            {links}
          </ul>
        </div>

        <div className="flex items-center gap-3 lg:ml-2">
          <img
            src="/assets/logo.jpg"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 object-cover rounded-full"
            alt="logo"
          />
          <span className="text-sm md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-red-600 via-white to-green-600 text-transparent bg-clip-text cursor-pointer">
            Voices of Palestine
          </span>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">{links}</ul>
      </div>

      <div className="navbar-end flex items-center gap-2 text-sm md:text-base">
        <a className="btn btn-xs md:btn-sm lg:btn-md font-bold btn-success">
          Donate
        </a>
        <a className="btn btn-xs md:btn-sm lg:btn-md font-bold btn-success">
          Login
        </a>
        <div className="hidden lg:flex items-center gap-2">
          <MdLanguage className="text-xl text-green-400" />
          <input
            type="checkbox"
            defaultChecked
            className="toggle toggle-success toggle-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
