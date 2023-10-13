import mongoose from "mongoose";

export const connect = async () => {
  try {
    //   const connection = await  mongoose.connect(process.env.DATABASE_URL!)
    await mongoose.connect(process.env.DATABASE_URL!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("connected! ");
    });
    connection.on("error", () => {
      console.log("DB not connected! ");
      process.exit();
    });
  } catch (error: any) {
    console.error(
      "Something went wrong in MongoDB! please check your connection!"
    );
  }
};
