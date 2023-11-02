import { getEnv } from "@/lib/main";
import mongoose from "mongoose";

const handleConnection = (connection: any) => {
  connection.on("connected", () => {
    console.log("Database connected!");
  });

  connection.on("error", () => {
    console.log("Database not connected!");
    if (getEnv() === "development") {
      console.error("Database not connected in development mode!");
    } else {
      process.exit();
    }
  });
};

export const connect = (): void => {
  try {
    mongoose.connect(process.env.DATABASE_URL!);
    const connection = mongoose.connection;
    handleConnection(connection);
  } catch (error) {
    console.error(
      "Something went wrong with the MongoDB connection! Please check your connection!"
    );
  }
};
