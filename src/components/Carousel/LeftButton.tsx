import React from "react";
import { MdOutlineArrowCircleLeft } from "react-icons/md";

type Props = {
  activeIndex?: number;
  handlePrevClick?: () => void;
};

const LeftButton: React.FC<Props> = ({ activeIndex, handlePrevClick }) => {
  return (
    <>
      <button
        type="button"
        title="Previous"
        onClick={handlePrevClick}
        className={` text-5xl lg:mr-10 lg:ml-auto lg:translate-x-10  ${
          activeIndex === 0
            ? "disabled text-gray-400/50 cursor-default"
            : "hover:scale-105 cursor-pointer lg:hover:text-yellow-700 text-neutral-100/70 lg:text-gray-600"
        } `}
      >
        <MdOutlineArrowCircleLeft />
      </button>
    </>
  );
};

export default LeftButton;
