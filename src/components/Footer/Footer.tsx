import React from "react";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import Link from "next/link";
import Logo from "../Logo";
import { NAV_LINKS } from "@/constant/navlinks";
import { MdEmail, MdOutlinePhoneIphone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-yellow-500 text-slate-700 ">
      <div className="container mx-auto px-5 sm:px-0">
        <div className="lg:grid grid-cols-3 py-8 px-5">
          {/* Company Info LOGO */}
          <div className="flex flex-col justify-center items-center gap-3 ">
            <Logo imgSize="w-[10rem] h-24  p-2 " src="/images/LOGO-WHITE.png" />
            <p className="text-sm text-center">
              Building Your Dream Home with Precision & Quality
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col  justify-center items-center ">
            <ul className="flex flex-row  gap-3 pt-5 lg:pt-0">
              {NAV_LINKS.map((link, index) => (
                <Link
                  href={link.href}
                  key={index}
                  className="underline lg:no-underline hover:lg:underline text-xs sm:text-sm md:text-base"
                >
                  <li> {link.name}</li>
                </Link>
              ))}
            </ul>

            {/* Social Media */}
            <div className="mt-8 flex justify-center space-x-4 ">
              <a
                href="https://facebook.com"
                className="hover:text-gray-700"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                className="hover:text-gray-700"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                className="hover:text-gray-700"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
            {/* Copyright */}
            <div className="pt-5 text-center text-xs sm:text-sm text-banner-color font-bold hidden lg:block">
              &copy; {new Date().getFullYear()} Designed and Developed by
              Digital-Solutions. All rights reserved.
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center items-center mt-5 lg:mt-0  lg:max-w-sm lg:ml-16 xl:ml-32 ">
            <div className="flex flex-col justify-center items-center  gap-2 lg:gap-5 text-sm">
              <p className=" flex">
                <strong className="mr-3 hidden lg:block">CALL US:</strong>
                <MdOutlinePhoneIphone className=" text-xl" /> 404-641-2994
              </p>
              <p className=" flex">
                <strong className="mr-2 hidden lg:block">EMAIL US:</strong>{" "}
                <MdEmail className=" text-xl mr-1" /> dsdsatlanta@gmail.com
              </p>
            </div>

            {/* Copyright */}
            <div className="pt-3 text-center text-xs sm:text-sm text-banner-color font-bold lg:hidden">
              &copy; {new Date().getFullYear()} Designed and Developed by
              Digital-Solutions. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
