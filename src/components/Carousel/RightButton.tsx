import { PROJECTS_PAGE } from "@/constant/projects-data";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import React from "react";

type Props = {
  activeIndex?: number;
  handleNextClick?: () => void;
  elmPerPge?: number | undefined;
};

const RightButton: React.FC<Props> = ({
  activeIndex,
  handleNextClick,
  elmPerPge,
}) => {
  return (
    <>
      <button
        type="button"
        title="Next"
        className={`text-5xl lg:ml-10 lg:mr-auto   lg:-translate-x-10  ${
          elmPerPge !== undefined
            ? activeIndex === PROJECTS_PAGE[0].images.length - elmPerPge
            : activeIndex === PROJECTS_PAGE[0].images.length - 1
            ? "disabled text-gray-400/50 cursor-default "
            : "hover:scale-105 cursor-pointer lg:hover:text-yellow-700 text-neutral-100/70 lg:text-gray-600"
        } `}
        onClick={handleNextClick}
      >
        <MdOutlineArrowCircleRight />
      </button>
    </>
  );
};

export default RightButton;
