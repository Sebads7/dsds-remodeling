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
        className={`hidden md:block text-5xl mr-10 ml-auto translate-x-10  ${
          activeIndex === 0
            ? "disabled text-gray-400/50 cursor-default"
            : "hover:scale-105 cursor-pointer hover:text-yellow-700 text-gray-600"
        } `}
      >
        <MdOutlineArrowCircleLeft />
      </button>
    </>
  );
};

export default LeftButton;
