import Link from "next/link";
import React from "react";

const LinkButton = ({
  href,
  name,
  icon,
}: {
  href: string;
  name: string;
  icon?: React.ReactNode;
}) => {
  return (
    <>
      <button type="button">
        <Link
          href={href}
          className="bg-yellow-500 text-white md:py-3 p-2 md:px-6  shadow-md font-semibold hover:bg-yellow-600 flex items-center gap-2 text-sm md:text-base"
        >
          {icon}

          {name}
        </Link>
      </button>
    </>
  );
};

export default LinkButton;
