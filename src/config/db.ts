import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const { DB_URI, DB_NAME } = process.env;

export const connectDB = async () => {
  if (!DB_URI || !DB_NAME) {
    console.error("Database URI or name is missing from environment variables");
    process.exit(1);
  }

  try {
    await mongoose.connect(DB_URI, {
      dbName: DB_NAME,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
