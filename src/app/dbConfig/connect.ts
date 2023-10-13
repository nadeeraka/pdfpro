import mongoose from "mongoose";

export const connect = (): void => {
  try {
    mongoose.connect(process.env.DATABASE_URL!);
    const connection = mongoose.connection;
    // console.log(mongoose.connect, "test");
    connection.on("connected", () => {
      console.log("connected! ");
    });
    connection.on("error", () => {
      console.log("DB not connected! ");
      process.exit();
    });
  } catch (error) {
    console.error(
      "Something went wrong in MongoDB! please check your connection!"
    );
  }
};
