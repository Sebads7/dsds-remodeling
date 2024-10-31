import mongoose, { Schema, Document } from "mongoose";

export interface IReview extends Document {
  name: string;
  rating: number;
  reviewDetail: string;
  createdAt: Date;
}

const ReviewSchema = new Schema<IReview>({
  name: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  reviewDetail: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Review ||
  mongoose.model<IReview>("Review", ReviewSchema);
