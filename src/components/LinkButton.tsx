import Link from "next/link";
import React from "react";

const LinkButton = ({ href, name }: { href: string; name: string }) => {
  return (
    <>
      <button type="button">
        <Link
          href={href}
          className="bg-yellow-500 text-white py-3 px-6  shadow-md font-semibold hover:bg-yellow-600"
        >
          {name}
        </Link>
      </button>
    </>
  );
};

export default LinkButton;
