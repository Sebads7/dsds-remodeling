"use client";

import Review from "@/components/Review";
import ReviewForm from "@/components/ReviewList/ReviewForm";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ReviewListdb from "@/components/ReviewList/ReviewListdb";

type ReviewData = {
  name: string;
  rating: number;
  reviewDetail: string;
};

const TestimonialPage = () => {
  const [reviews, setReviews] = useState<ReviewData[]>([]);

  const fetchReviews = async () => {
    const response = await axios.get("/api/reviews");
    if (response.data && response.data.success) {
      setReviews(response.data.data);
    }
  };

  const addReview = async (newReview: ReviewData) => {
    setReviews([...reviews, newReview]);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="w-full h-full pb-20 bg-[#F6F5F2] ">
      <h1 className="text-center text-4xl font-bold py-10">Testimonials</h1>
      <div className=" pl-32 grid grid-cols-2  pt-10">
        <Review
          containerReview="flex-col items-center"
          mainContainer="justify-center "
          reviewBox="border-none"
          arrayData={true}
        />
        <div>
          <Image
            src="/images/happy-customer.jpg"
            width={300}
            height={800}
            alt="hero-background"
            className="w-[35rem]  h-[28rem] border-[1rem] border-gray-200"
          />
        </div>
      </div>

      <div className=" grid grid-cols-2 pt-20">
        <div className="flex flex-col ">
          <div className="px-16 mx-20 h-[20rem] flex  justify-center items-center  border bg-yellow-500">
            <h2 className="text-2xl text-center text-white ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
              laudantium, ex sint optio labore ut. Ut, assumenda, laudantium quo
              dolores alias at ducimus saepe suscipit numquam similique qui et!
              Iusto.
            </h2>
          </div>
          <div className="w-full">
            <ReviewForm onAddReview={addReview} />
          </div>
        </div>
        <div>
          <ReviewListdb reviews={reviews} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
