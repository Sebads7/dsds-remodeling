"use client";

import ReviewForm from "@/components/FormComponents/ReviewForm";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ReviewListdb from "@/components/ReviewComponents/ReviewListdb";

type ReviewData = {
  name: string;
  rating: number | null;
  reviewDetail: string;
};

const iconsData = [
  {
    src: "/divider/satisfaction.png",
    alt: "Client Satisfaction Image",
    title: "500 +",
    label: "Happy Clients",
  },
  {
    src: "/divider/expert.png",
    alt: " Expert Team Image",
    title: "+15 ",
    label: "Years Experience",
  },
  {
    src: "/divider/quality.png",
    alt: " Quality Work Image",
    title: "100%",
    label: "Satisfaction Guaranteed",
  },
];

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
      <h1 className="text-main-dark text-center text-5xl font-bold pt-10">
        Testimonials
      </h1>

      <div className=" h-full  flex flex-col">
        <div className="flex flex-col ">
          <div className="px-2 max-w-4xl text-center mx-auto  mt-5 mb-10 md:mb-20">
            <h2 className=" text-lg md:text-xl xl:text-2xl   ">
              We take pride in transforming homes and bringing our clients’
              visions to life. Our dedication to quality craftsmanship and
              customer satisfaction speaks for itself. Don’t just take our word
              for it—hear from those who’ve trusted us with their homes.
            </h2>
          </div>

          {/* ICONS */}
          <div className="flex items-center justify-between gap-10 max-w-sm  md:max-w-3xl mx-auto w-full">
            {iconsData.map((icon, index) => (
              <div
                className="flex flex-col justify-center items-center text-center gap-2"
                key={index}
              >
                <div className="bg-amber-50 p-3 md:px-6 md:py-6 rounded-full w-fit ">
                  <Image
                    className="size-10 md:size-14"
                    width={1200}
                    height={1200}
                    alt={icon.alt}
                    src={icon.src}
                    loading="eager"
                    color="black"
                  />
                </div>
                <p className="font-bold text-xl">{icon.title}</p>
                <p className="max-w-[5rem]">{icon.label}</p>
              </div>
            ))}
          </div>
        </div>

        <h4 className="text-xl md:mt-20 md:text-3xl lg:text-4xl font-bold mb-3 text-center  mt-10">
          What Our Clients Say
        </h4>

        <p className="text-center text-lg">
          Real experiences from real customers who trusted us with their home
          renovations
        </p>

        <div className="mt-10 flex flex-col-reverse lg:flex-row md:mx-auto gap-10 bg-stone-200 p-10 border rounded-md h-[60rem] lg:h-[40rem]">
          <ReviewForm onAddReview={addReview} />
          <ReviewListdb reviews={reviews} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
