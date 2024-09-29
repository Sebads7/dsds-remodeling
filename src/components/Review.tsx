import React from "react";
// import Image from "next/image";
import { REVIEW } from "@/constant/index";
import LinkButton from "./LinkButton";
import Rating from "@mui/material/Rating";
import { IoPersonCircleOutline } from "react-icons/io5";

const Review = () => {
  return (
    <>
      <div className="flex flex-col  items-center justify-center mx-auto w-full  gap-20">
        <div className="flex gap-10">
          {REVIEW.map((review, index) => (
            <div
              className="w-[40rem] gap-5  flex  border-yellow-500 border p-5  justify-center items-center"
              key={index}
            >
              <ul className="text-center   p-5">
                <li className="font-bold flex items-center gap-2   ">
                  <span>
                    <IoPersonCircleOutline size={30} />
                  </span>
                  {review.name}
                  <Rating name="read-only" value={5} readOnly className="" />
                </li>
                <li className="text-muted-foreground text-left">
                  {review.description}
                </li>
              </ul>
            </div>
          ))}
        </div>
        <LinkButton href="/testimonials" name="View All Our Testimonials" />
      </div>
    </>
  );
};

export default Review;
