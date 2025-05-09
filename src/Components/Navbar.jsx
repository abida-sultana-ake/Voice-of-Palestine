import React from "react";
import { NavLink } from "react-router";
import { MdLanguage } from "react-icons/md";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink className="font-bold text-green-600" to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className="font-bold text-green-600" to="/stories">Stories</NavLink>
      </li>
      <li>
        <details>
          <summary className="font-bold text-green-600" >Timeline</summary>
          <ul className="p-2">
            <li>
              <NavLink className="font-bold text-green-600" to="/educate">Educate</NavLink>
            </li>
            <li>
              <NavLink className="font-bold text-green-600" to="/map">Map</NavLink>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <NavLink className="font-bold text-green-600" to="/voice">Voice</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar backdrop-blur-md bg-green-50 px-4 border-b border-white/20 shadow-md">
      <div className="navbar-start">
      <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden mr=2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <img src="/assets/logo.jpg" className="lg:w-16 lg:h-16 size-15 " alt="logo" />
          <span className="lg:text-2xl font-bold bg-gradient-to-r from-red-600 via-white to-green-600 text-transparent bg-clip-text cursor-pointer">
            Voices of Palestine
          </span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn font-bold btn-soft btn-success mr-3">Donate</a>
        <a className="btn font-bold btn-soft btn-success mr-3">Login</a>
        <div className=" flex justify-center items-center gap-3">
        <MdLanguage className="size-7 text-green-400" />
        <input type="checkbox" defaultChecked className="toggle toggle-success" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;