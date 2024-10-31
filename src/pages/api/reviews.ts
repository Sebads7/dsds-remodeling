import connectToDatabase from "@/lib/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import Review, { IReview } from "@/models/Review";

type ResponseData = {
  success: boolean;
  data?: IReview | IReview[];
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  await connectToDatabase();

  if (req.method === "POST") {
    const { name, rating, reviewDetail } = req.body;

    if (!name || !rating || !reviewDetail) {
      return res
        .status(400)
        .json({ success: false, error: "Please provide all required fields" });
    }
    const newReview = new Review({
      name,
      rating,
      reviewDetail,
    });
    const savedReview = await newReview.save();
    res.status(200).json({ success: true, data: savedReview });
  } else if (req.method === "GET") {
    const reviews = await Review.find();
    res.status(200).json({ success: true, data: reviews });
  } else {
    res.status(405).json({ success: false, error: "Method not allowed" });
  }
}
