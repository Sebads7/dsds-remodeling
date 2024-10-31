import mongoose from "mongoose";

const uri = process.env.MONGODB_URI as string;

if (!uri) {
  throw new Error("Please add your Mongo URI to .env.local");
}

let clientPromise: Promise<typeof mongoose> | null = null;

async function connectToDatabase() {
  if (clientPromise) {
    return clientPromise;
  }

  try {
    clientPromise = mongoose.connect(uri);
    return clientPromise;
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
}

export default connectToDatabase;
