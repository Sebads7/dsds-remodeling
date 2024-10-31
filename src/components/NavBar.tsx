"use client";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Modal from "./Modal";
import { IoMdClose } from "react-icons/io";
import { NAV_LINKS } from "@/constant/navlinks";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
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
      className={` pt-5 pb-8  bg-[#F6F5F2]/90    z-10 ${
        isSticky ? " top-0 border-b-2 border-yellow-500   " : ""
      }  `}
    >
      <div className="xl:pr-20 xl:pl-32 px-16 md:px-10  w-full flex  justify-between items-center ">
        {/* MOBILE MENU BUTTON */}
        <button
          title="Mobile Menu"
          type="button"
          onClick={() => setShowMenu(true)}
          className="block md:hidden"
        >
          <GiHamburgerMenu className="text-4xl" />
        </button>
        {/* LOGO */}
        <Logo
          imgSize=" w-[7rem] h-[4.2rem] lg:w-[9rem] lg:h-[5.2rem]"
          src="/images/LOGO-COLOR.png"
        />

        {/* NAVBAR */}
        <nav className="hidden md:block text-slate-80 ">
          <ul className="w-full flex lg:gap-5 text-sm lg:text-base ">
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
        <div className="text-sm lg:text-base hidden sm:block">
          <button
            className={`text-white bg-yellow-500  py-3 px-3 lg:px-6 font-semibold hover:bg-yellow-600 mr-1 `}
            onClick={handleModal}
          >
            Get a Free Quote
          </button>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="absolute top-0 h-svh w-full z-50">
          <Modal closeModal={handleModal} />
        </div>
      )}

      {/* MOBILE MENU */}
      {showMenu && (
        <div className="fixed top-0 h-svh w-full z-50 bg-black/80">
          <motion.nav
            className="bg-white h-svh w-3/4 pt-10"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              type: "spring",
              stiffness: 50,
              ease: "easeInOut",
            }}
          >
            <button
              className="  w-full "
              type="button"
              title="Close Menu"
              onClick={() => setShowMenu(false)}
            >
              <IoMdClose className=" text-2xl right-0 ml-auto mr-10" />
            </button>

            <ul className=" flex flex-col gap-5 pt-5  ">
              {NAV_LINKS.map((link, index) => (
                <Link
                  href={link.href}
                  key={index}
                  className="h-full w-full "
                  onMouseEnter={() => setIsHovered(link.name)}
                  onMouseLeave={() => setIsHovered(null)}
                  onClick={() => setShowMenu(false)}
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
                </Link>
              ))}
            </ul>
          </motion.nav>
        </div>
      )}
    </div>
  );
};

export default NavBar;
