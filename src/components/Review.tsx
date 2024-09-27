import React from "react";
import Image from "next/image";
import { REVIEW } from "@/constant/index";

const Review = () => {
  return (
    <>
      <div className="flex  items-center justify-center mx-auto w-full  gap-20">
        {REVIEW.map((review, index) => (
          <div
            className="w-[40rem] gap-5  flex border-2 p-5  justify-center items-center"
            key={index}
          >
            <Image
              src="/icons/customer-review2.png"
              className="bg-[#F6F5F2] "
              alt="image-1"
              width={100}
              height={100}
            />
            <ul className="text-center border   p-5">
              <li className="font-bold"> {review.name}</li>
              <li className="">{review.description}</li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default Review;
