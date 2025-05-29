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
import { Mail, Phone } from "lucide-react";

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
      className={` py-4      z-10 ${
        isSticky
          ? "fixed z-[999] w-full top-0 lg:border-b-2 lg:border-orange-300 lg:bg-light-bg/90   "
          : "bg-light-bg/90"
      }  `}
    >
      <div
        className={` justify-end gap-4 text-stone-600 text-base font-light pr-24 hidden  ${
          isSticky ? "hidden" : "lg:flex"
        } `}
      >
        <p className="flex items-center gap-1">
          <span>
            <Phone className="size-5" />
          </span>
          <span>404-641-2994</span>
        </p>
        <p className="flex items-center gap-1">
          <Mail className="size-5" /> info@dsdsatlanta.com
        </p>
      </div>
      <div className="xl:pr-20 xl:pl-32 lg:px-16   w-full flex  justify-between items-center ">
        {/* MOBILE MENU BUTTON */}
        <div
          className={`   h-full flex justify-center items-center  md:hidden ${
            isSticky
              ? " top-0 inset-0 z-[999] p-1  shadow-lg ml-10 w-fit bg-stone-100/90 border-2 border-stone-200 rounded-md"
              : "static pl-10 pt-3"
          }`}
        >
          <button
            title="Mobile Menu"
            type="button"
            onClick={() => setShowMenu(true)}
            className=""
          >
            <GiHamburgerMenu className="text-4xl text-stone-700" />
          </button>
        </div>
        {/* LOGO */}

        <Logo
          imgSize={`   translate-x-10 md:translate-x-0 -translate-y-1 ${
            isSticky
              ? "hidden lg:block h-10 w-16"
              : "block h-18 w-28 lg:-translate-y-4"
          }`}
          src="/images/LOGO-COLOR.png"
        />

        <div className="flex items-center gap-10">
          {/* NAVBAR */}
          <nav className="hidden md:block text-slate-80 ">
            <ul className="w-full flex  gap-1 text-sm lg:text-base ">
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
                    className={` md:px-1  lg:px-4 py-1 ${
                      activeIndex === link.href
                        ? "text-orange-400 font-semibold"
                        : "text-banner-color"
                    } `}
                  >
                    {link.name}
                  </li>
                  <li
                    className={`${
                      link.href === activeIndex
                        ? "w-0"
                        : link.name === isHovered
                        ? "bg-amber-600 w-3/5 rounded-2xl"
                        : "w-0"
                    }  h-1 transition-all duration-300 ease-in-out mx-auto`}
                  ></li>
                </Link>
              ))}
            </ul>
          </nav>
          {/* CONTACT-MODAL */}

          <button
            className={`text-white bg-amber-500 text-sm lg:text-base hidden sm:block  py-3 px-3 lg:px-5 rounded-3xl font-semibold hover:bg-amber-500/90 mr-1 `}
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

            <ul className=" flex flex-col gap-4 pt-5 pl-3  ">
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
                    className={`  px-4 ${
                      activeIndex === link.href
                        ? "text-orange-500 font-semibold text-xl"
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
