"use client";

import Review from "@/components/ReviewComponents/Review";
import ReviewForm from "@/components/FormComponents/ReviewForm";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ReviewListdb from "@/components/ReviewComponents/ReviewListdb";

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
      <h1 className="text-slate-700 text-center text-4xl font-bold py-10">
        Testimonials
      </h1>
      <h2 className="bg-yellow-600 w-fit p-2 text-white text-2xl font-semibold ml-[15rem]">
        The Remodeling Company You’re Looking For!
      </h2>
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
          <div className="px-10 mx-20 h-[15rem] flex  justify-center items-center  border bg-yellow-600/80 ">
            <h2 className="text-2xl font-semibold text-center text-white drop-shadow-[0_.2px_.7px_rgba(0,0,0,0.8)] ">
              We take pride in transforming homes and bringing our clients’
              visions to life. Our dedication to quality craftsmanship and
              customer satisfaction speaks for itself. Don’t just take our word
              for it—hear from those who’ve trusted us with their homes.
            </h2>
          </div>
          <div className="w-full mt-10 ">
            <ReviewForm onAddReview={addReview} />
          </div>
        </div>
        <div>
          <h4 className="text-2xl font-bold mb-3 text-slate-700">
            More of Our Clients Reviews!
          </h4>
          <ReviewListdb reviews={reviews} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
