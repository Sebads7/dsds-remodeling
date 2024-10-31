"use client";

import { useState } from "react";
import axios from "axios";
import SelectInput from "../SelectInput";

type ReviewData = {
  _id?: string;
  name: string;
  rating: number;
  reviewDetail: string;
};

const ReviewForm = ({
  onAddReview,
}: {
  onAddReview: (review: ReviewData) => void;
}) => {
  const [formData, setFormData] = useState<ReviewData>({
    name: "",
    rating: 1,
    reviewDetail: "",
  });

  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "rating" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null); // Clear any previous messages

    try {
      const response = await axios.post("/api/reviews", formData);

      if (response.data && response.data.success) {
        onAddReview(response.data.data);
      }

      setMessage("Review submitted successfully!");
      setFormData({ name: "", rating: 1, reviewDetail: "" });
    } catch (error) {
      setMessage("Error submitting review");
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-md mx-auto p-4 bg-gray-100 rounded-md"
    >
      <h2 className="text-2xl font-bold mb-4">Leave a Review</h2>

      <div>
        <label className="block font-semibold mb-1">Name</label>
        <input
          title="Please enter your name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border border-yellow-500 focus-visible:ring-yellow-500 focus-visible:ring-[1px] focus-visible:outline-none"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1  w-full h-full py-2">
          Rating (1-5)
        </label>
        <SelectInput
          value={formData.rating as number}
          onChange={(value) =>
            setFormData({ ...formData, rating: value as number })
          }
          options={["1", "2", "3", "4", " 5"]}
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Review</label>
        <textarea
          rows={5}
          title="Please enter a review"
          name="reviewDetail"
          value={formData.reviewDetail}
          onChange={handleChange}
          required
          className="w-full p-2 border border-yellow-500 focus-visible:ring-yellow-500 focus-visible:ring-[1px] focus-visible:outline-none"
        />
      </div>

      <button
        type="submit"
        className="px-4 py-3 bg-yellow-600 text-white w-full hover:bg-yellow-500 transition duration-200 ease-in-out"
      >
        Submit Review
      </button>

      {message && <p className="mt-4 text-center">{message}</p>}
    </form>
  );
};

export default ReviewForm;
