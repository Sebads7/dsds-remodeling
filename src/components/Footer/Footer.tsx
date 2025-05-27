import React from "react";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Clock, Map, Phone } from "lucide-react";

import Link from "next/link";
import Logo from "../Logo";
import { NAV_LINKS } from "@/constant/navlinks";
import { MdEmail, MdOutlinePhoneIphone } from "react-icons/md";

const ServiceData = [
  { name: "Kitchen Remodeling" },
  { name: "Bathroom Renovation" },
  { name: "Home Additions" },
  { name: "General Contracting" },
  { name: "Interior/Exterior Painting" },
];

const ContactData = [
  {
    icon: <Phone className="size-4 text-amber-600" />,
    label: "Phone",
    value: "404-641-2994",
  },
  {
    icon: <MdEmail className="size-4 text-amber-600" />,
    label: "Email",
    value: "dsdsatlanta@gmail.com",
  },
  {
    icon: <Map className="size-4 text-amber-600" />,
    label: "Service Area",
    value: "Atlanta, GA",
  },
  // {
  //   icon: <Clock className="size-6 text-amber-600" />,
  //   label: "Business Hours",
  //   value: "Monday - Friday: 9am - 5pm",
  // },
];

const Footer = () => {
  return (
    <footer className="bg-stone-400   ">
      <div className="container mx-auto px-5 sm:px-0 py-10">
        <div className="flex justify-evenly py-8 px-5">
          {/* Company Info LOGO */}
          <div className="flex flex-col gap-3 ">
            <Logo imgSize="w-[10rem] h-24 ml-3 " src="/images/LOGO-WHITE.png" />
            <p className=" max-w-xs mt-1">
              Your trusted partner for home renovation and construction services
              in the Atlanta metro area.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4 ">
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
          </div>

          {/* Links */}
          <div className="flex flex-col ">
            <p className="font-semibold text-lg">Quick Links</p>
            <ul className="flex flex-col  gap-1 pt-2 text-xs sm:text-sm md:text-base">
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
          </div>

          <div>
            {/* Services */}
            <div className="flex flex-col">
              <p className="font-semibold text-lg">Our Services</p>
              <ul className="flex flex-col  gap-1 pt-2 ">
                {ServiceData.map((service, index) => (
                  <li key={index} className=" text-xs sm:text-sm md:text-base">
                    {service.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <p className="font-semibold text-lg">Contact Information</p>
            {ContactData.map((data, i) => (
              <div className="flex items-center gap-2 pt-2" key={i}>
                <div className="bg-orange-50 rounded-full p-1">{data.icon}</div>
                <p className="flex  flex-col font-semibold text-xs sm:text-sm md:text-base">
                  {data.label}
                  <span className="font-normal">{data.value}</span>
                </p>
              </div>
            ))}
          </div>

          <div className="">
            <p className="font-semibold text-lg">Business Hours </p>
            <div className="flex flex-col gap-1 pt-2 text-xs sm:text-sm md:text-base">
              <p>"Monday - Friday: 9am - 5pm",</p>
              <p>"Saturday: 10am - 2pm",</p>
              <p>"Sunday: Closed"</p>
            </div>
          </div>
        </div>
        <hr />
        {/* Copyright */}
        <div className="pt-5 text-center text-xs sm:text-sm  font-semibold">
          &copy; {new Date().getFullYear()} Designed and Developed by{" "}
          <a
            href="https://atlantawebs.com"
            className="underline font-medium pr-1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Atlanta Webs"
          >
            {" "}
            Atlanta Webs.
          </a>
          All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
