import Link from "next/link";
import React from "react";

const LinkButton = ({
  href,
  name,
  icon,
  className,
}: {
  href: string;
  name: string;
  icon?: React.ReactNode;
  className?: string;
}) => {
  return (
    <>
      <button type="button">
        <Link
          href={href}
          className={`  md:py-3 p-2 xl:px-6 rounded-sm  shadow-md font-semibold transition-all duration-200  flex items-center justify-center  gap-2 text-sm lg:text-base  ${className}`}
        >
          {icon}
          {name}
        </Link>
      </button>
    </>
  );
};

export default LinkButton;
