import React from "react";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import Link from "next/link";
import Logo from "../Logo";
import { NAV_LINKS } from "@/constant/navlinks";

const Footer = () => {
  return (
    <footer className="bg-yellow-500 text-black ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 py-8 ">
          {/* Company Info */}
          <div className="flex flex-col justify-center items-center gap-3 ">
            <Logo imgSize="w-[10rem] h-24  p-2 " src="/images/LOGO-WHITE.png" />
            <p className="text-sm">
              Building Your Dream Home with Precision & Quality
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col  justify-center items-center ">
            <ul className="flex gap-3">
              {NAV_LINKS.map((link, index) => (
                <Link href={link.href} key={index} className="hover:underline">
                  <li> {link.name}</li>
                </Link>
              ))}
            </ul>

            {/* Social Media */}
            <div className="mt-8 flex justify-center space-x-4">
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
            <div className="mt-8 text-center text-sm">
              &copy; {new Date().getFullYear()} Designed and Developed by
              Sebastian Di Salvatore. All rights reserved.
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center gap-5 items-center">
            <p className="text-sm">
              <strong>Call Us:</strong> (404) 641-2994
            </p>
            <p className="text-sm">
              <strong>Email:</strong> ds&ds@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
