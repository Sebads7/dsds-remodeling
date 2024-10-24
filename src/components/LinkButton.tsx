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
          className={`bg-yellow-500 text-white md:py-3 p-2 md:px-6  shadow-md font-semibold hover:bg-yellow-600 flex items-center justify-center  gap-2 text-sm md:text-base  ${className}`}
        >
          {icon}

          {name}
        </Link>
      </button>
    </>
  );
};

export default LinkButton;
