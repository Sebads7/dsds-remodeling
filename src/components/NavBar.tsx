"use client";
import React, { useEffect, useState } from "react";
import { NAV_LINKS } from "@/constant";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Modal from "./Modal";

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<string | null>("/");

  const pathname = usePathname();

  const handleModal = () => {
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    setActiveIndex(pathname);

    return () => {
      setActiveIndex(null);
    };
  }, [pathname]);

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
      className={` py-3  bg-[#F6F5F2]    z-10 ${
        isSticky ? "sticky top-0 border-b-2 border-yellow-500   " : ""
      }  `}
    >
      <div className="pr-20 pl-32  w-full flex  justify-between items-center ">
        {/* LOGO */}
        <Logo imgSize=" w-[8rem] h-[4.2rem]" src="/images/LOGO-COLOR.png" />

        {/* NAVBAR */}
        <nav>
          <ul className="w-full flex gap-5 ">
            {NAV_LINKS.map((link, index) => (
              <Link
                href={link.href}
                key={index}
                className="h-full w-full "
                onMouseEnter={() => setIsHovered(link.name)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <li
                  onClick={() => setActiveIndex(link.href)}
                  className={`  px-4 py-1 ${
                    activeIndex === link.href
                      ? "text-yellow-500 font-semibold"
                      : ""
                  } `}
                >
                  {link.name}
                </li>
                <li
                  className={`${
                    link.href === activeIndex
                      ? "w-0"
                      : link.name === isHovered
                      ? "bg-yellow-500 w-3/5 rounded-2xl"
                      : "w-0"
                  }  h-1 transition-all duration-300 ease-in-out mx-auto`}
                ></li>
              </Link>
            ))}
          </ul>
        </nav>
        {/* CONTACT-MODAL */}
        <div>
          <button
            className="bg-yellow-500 text-white py-3 px-6 font-semibold hover:bg-yellow-600 mr-1"
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
