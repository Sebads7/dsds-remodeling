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
    <div className="w-full h-full pb-20 bg-[#F6F5F2]  px-5">
      <h1 className="text-slate-700 text-center text-4xl font-bold py-10">
        Testimonials
      </h1>
      <h2 className="bg-yellow-600 w-fit p-2 text-white text-xl md:text-2xl font-semibold xl:ml-[15rem] mx-auto text-center">
        The Remodeling Company You’re Looking For!
      </h2>
      <div className=" xl:pl-32 grid xl:grid-cols-2   pt-10">
        <div className="mx-auto md:w-3/4">
          <Review
            containerReview="flex-col items-center  "
            mainContainer="justify-center "
            reviewBox="border-none"
            arrayData={true}
          />
        </div>
        <div className="hidden md:block mx-auto">
          <Image
            src="/images/happy-customer.jpg"
            width={300}
            height={800}
            alt="hero-background"
            className="w-[35rem]  h-[28rem] border-[1rem] border-gray-200"
          />
        </div>
      </div>

      <div className=" grid grid-cols-1  xl:grid-cols-2 pt-10 lg:pt-20">
        <div className="flex flex-col ">
          <div className="sm:w-3/4 mx-auto xl:mx-20 xl:h-[15rem] flex  justify-center items-center  lg:border lg:bg-yellow-600/80  p-2">
            <h2 className="text-xl md:text-2xl font-semibold text-center text-yellow-600 lg:text-white lg:drop-shadow-[0_.2px_.7px_rgba(0,0,0,0.8)] ">
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
        <div className=" mx-auto">
          <h4 className="text-xl md:text-2xl font-bold mb-3 text-slate-700 mt-10">
            More of Our Clients Reviews!
          </h4>
          <ReviewListdb reviews={reviews} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
