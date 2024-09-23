"use client";
import React, { useEffect, useState } from "react";
import { NAV_LINKS } from "@/constant";

import Link from "next/link";
import Logo from "./Logo";
import Modal from "./Modal";

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    const isStickyNav = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", isStickyNav);

    //clean up

    return () => {
      window.removeEventListener("scroll", isStickyNav);
    };
  }, []);
  return (
    <div
      className={` py-3   border-b-2 bg-white z-10 ${
        isSticky ? "sticky top-0" : ""
      }  `}
    >
      <div className="px-20 w-full flex  justify-between items-center ">
        {/* LOGO */}
        <Logo />

        {/* NAVBAR */}
        <nav>
          <ul className="w-full flex gap-5">
            {NAV_LINKS.map((link, index) => (
              <Link href={link.href} key={index} className="h-full w-full ">
                <li className="hover:bg-yellow-500 hover:text-white rounded-md px-4 py-3  ">
                  {link.name}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
        {/* CONTACT-MODAL */}
        <div>
          <button
            className="bg-yellow-500 text-white py-3 px-6 rounded-md font-semibold hover:bg-yellow-600 mr-1"
            onClick={handleModal}
          >
            Get a Free Quote
          </button>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="absolute top-0 z-10">
          <Modal closeModal={handleModal} />
        </div>
      )}
    </div>
  );
};

export default NavBar;
