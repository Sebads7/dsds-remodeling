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
      <h1 className="text-main-dark text-center text-4xl font-bold py-10">
        Testimonials
      </h1>

      <div className=" h-full  md:grid lg:grid-cols-2  md:pt-20">
        {/* LEFT SIDE */}
        <div className="w-full">
          <h2 className="bg-yellow-600 w-fit mx-auto p-2 text-white text-xl md:text-2xl font-semibold   text-center">
            The Remodeling Company You’re Looking For!
          </h2>
          <div className="xl:ml-16">
            <Review
              containerReview="flex-col items-center  "
              mainContainer="justify-center "
              reviewBox="border-none"
              arrayData={true}
            />
          </div>

          <div className="flex flex-col ">
            <div className="px-2 md:w-3/4 mx-auto my-5 md:my-10">
              <h2 className=" text-lg md:text-xl xl:text-2xl font-semibold text-center text-yellow-600  ">
                We take pride in transforming homes and bringing our clients’
                visions to life. Our dedication to quality craftsmanship and
                customer satisfaction speaks for itself. Don’t just take our
                word for it—hear from those who’ve trusted us with their homes.
              </h2>
            </div>
            <div className="mt-10">
              <ReviewForm onAddReview={addReview} />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative w-full  mt-10 lg:mt-0  ">
          <div className="sm:w-[90%] h-[35rem] lg:h-[60rem] sticky top-0 overflow-hidden overflow-y-scroll scrollbar-thin  scrollbar-thumb-white  mx-auto bg-banner-color/60 p-5 lg:p-10">
            <Image
              src="/images/happy-customer.jpg"
              width={300}
              height={800}
              alt="hero-background"
              className="w-full  2xl:h-[28rem] border-[8px] border-light-bg hidden lg:block opacity-55"
            />

            <div className=" mx-auto">
              <h4 className="text-xl md:text-2xl font-bold mb-3 text-light-color  mt-10">
                More of Our Clients Reviews!
              </h4>
              <ReviewListdb reviews={reviews} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
