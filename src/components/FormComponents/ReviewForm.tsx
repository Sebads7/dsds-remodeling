"use client";

import { useState } from "react";
import axios from "axios";
import SelectInput from "./SelectInput";
import SuccessModal from "./SuccessModal";

import Rating from "@mui/material/Rating";

type ReviewData = {
  _id?: string;
  name: string;
  rating: number | null;
  reviewDetail: string;
};

const ratingOptions = [
  {
    value: 1,
    label: (
      <div className="flex items-center gap-2">
        <Rating
          name="read-only"
          value={1}
          readOnly
          precision={0.5}
          className="text-yellow-500"
        />
        Poor
      </div>
    ),
  },
  {
    value: 2,
    label: (
      <div className="flex items-center gap-2">
        <Rating
          name="read-only"
          value={2}
          readOnly
          precision={0.5}
          className="text-yellow-500"
        />
        Fair
      </div>
    ),
  },
  {
    value: 3,
    label: (
      <div className="flex items-center gap-2">
        <Rating
          name="read-only"
          value={3}
          readOnly
          precision={0.5}
          className="text-yellow-500"
        />
        Good
      </div>
    ),
  },
  {
    value: 4,
    label: (
      <div className="flex items-center gap-2">
        <Rating
          name="read-only"
          value={4}
          readOnly
          precision={0.5}
          className="text-yellow-500"
        />
        Very Good
      </div>
    ),
  },
  {
    value: 5,
    label: (
      <div className="flex items-center gap-2">
        <Rating
          name="read-only"
          value={5}
          readOnly
          precision={0.5}
          className="text-yellow-500"
        />
        Excellent
      </div>
    ),
  },
];

const ReviewForm = ({
  onAddReview,
}: {
  onAddReview: (review: ReviewData) => void;
}) => {
  const [formData, setFormData] = useState<ReviewData>({
    name: "",
    rating: null,
    reviewDetail: "",
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const castValueByField = (name: string, value: string) => {
    const numberFields = ["rating"];
    if (numberFields.includes(name)) return Number(value);
    return value;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: castValueByField(name, value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/reviews", formData);

      if (response.data && response.data.success) {
        onAddReview(response.data.data);
      }

      setShowSuccessModal(true);
      setFormData({ name: "", rating: null, reviewDetail: "" });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-lg mx-auto p-6 bg-white  rounded-md shadow-2xl "
    >
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-main-dark">
        Are You a Previous Client? Leave a Review!
      </h2>

      <div className="text-neutral-700">
        <label className="block font-medium mb-1">Name</label>
        <input
          title="Please enter your name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
          className="w-full p-2 border border-neutral-500-500 focus-visible:ring-neutral-600 focus-visible:ring-[1px] focus-visible:outline-none rounded-none"
        />
      </div>

      <div>
        <label className="block font-medium mb-1  w-full h-full py-2">
          Rating (1-5)
        </label>
        <SelectInput
          value={formData.rating as number}
          onChange={(value) =>
            setFormData({ ...formData, rating: value as number })
          }
          options={ratingOptions}
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Your Review</label>
        <textarea
          rows={5}
          title="Please enter a review"
          placeholder="Write your review here..."
          name="reviewDetail"
          value={formData.reviewDetail}
          onChange={handleChange}
          required
          className="w-full p-2 border border-neutral-500 focus-visible:ring-neutral-600 focus-visible:ring-[1px] focus-visible:outline-none"
        />
      </div>

      <button
        type="submit"
        className="px-4 py-3 bg-amber-500 text-white w-full hover:bg-amber-500/90 transition duration-200 ease-in-out"
      >
        Submit Review
      </button>
      {showSuccessModal && (
        <>
          <SuccessModal
            setShowSuccessModal={setShowSuccessModal}
            message="Review submitted successfully!"
          />
        </>
      )}
    </form>
  );
};

export default ReviewForm;
