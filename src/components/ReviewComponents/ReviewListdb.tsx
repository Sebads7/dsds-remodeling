"use client";
import React from "react";
import Rating from "@mui/material/Rating";
import { IoPersonCircleOutline } from "react-icons/io5";

interface Review {
  _id?: string;
  name: string;
  rating: number;
  reviewDetail: string;
}

const ReviewListdb = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div className="flex flex-col gap-10  p-2 md:p-10 border-[8px] border-light-bg overflow-y-auto">
      {reviews.length === 0 ? (
        <div className="flex flex-col gap-5 justify-start items-center h-full w-full pt-20">
          <p>Loading Reviews</p>
          <svg
            className="animate-spin -ml-1 mr-3 h-10 w-10 text-light-color"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      ) : (
        <>
          {reviews.map((review, index) => (
            <div
              className={`w-full border-b-[1px] border-b-light-bg flex justify-center items-center  gap-5  text-white/80  `}
              key={index}
            >
              <ul className="text-center   p-5">
                <li className="font-bold flex items-center gap-2   ">
                  <span>
                    <IoPersonCircleOutline size={30} />
                  </span>
                  {review.name}
                  <Rating
                    name="read-only"
                    value={review.rating}
                    readOnly
                    className=""
                  />
                </li>
                <li className=" text-left text-sm md:text-base">
                  {review.reviewDetail}
                </li>
              </ul>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ReviewListdb;
