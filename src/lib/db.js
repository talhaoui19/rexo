import mongoose from "mongoose";

let isConnected = false;

export const ConnectToDb = async () => {
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.MONGODB_URL);
    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("MongoDB connection error:", error);
    throw new Error("Database connection failed");
  }
};

