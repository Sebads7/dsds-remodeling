import React from "react";
import { NAV_LINKS } from "@/constant";

import Link from "next/link";

const NavBar = () => {
  return (
    <div className="w-full flex justify-between items-center px-10 py-5 border-b-2">
      {/* LOGO */}
      <div className="p-3 bg-white">
        <h2>LOGO</h2>
      </div>
      {/* NAVBAR */}
      <nav>
        <ul className="w-full  flex gap-5">
          {NAV_LINKS.map((link, index) => (
            <Link href={link.href} key={index}>
              <li className="hover:bg-yellow-300 rounded-md px-4 py-2">
                {link.name}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      {/* CONTACT-MODAL */}
      <div>
        <button className="bg-yellow-300 p-3"> Request an Estimate</button>
      </div>
    </div>
  );
};

export default NavBar;
