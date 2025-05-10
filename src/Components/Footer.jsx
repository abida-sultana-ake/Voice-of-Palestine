import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router";
const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-green-50 text-base-content rounded p-10">
        <nav className="grid grid-flow-col text-green-600 font-semibold gap-4">
          <NavLink className="font-bold text-green-600 link link-hover" to="/about">About us</NavLink>
          <NavLink className="font-bold text-green-600 link link-hover" to="/fq">FAQ</NavLink>
          <NavLink className="font-bold text-green-600 link link-hover" to="/privacyPolicy">Privacy Policy</NavLink>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a className="text-green-600">
            <FaFacebook className="size-7" />
            </a>
            <a className="text-green-600">
            <FaLinkedin className="size-7"  />
            </a>
            <a className="text-green-600">
            <FaInstagram className="size-7"  />
            </a>
          </div>
        </nav>
        <aside>
          <p className="text-green-600 font-semibold"> 
            Copyright © {new Date().getFullYear()} - All right reserved by Voices of Palestine
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
