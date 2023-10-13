import { connect } from "@/app/dbConfig/connect";
import { NextResponse } from "next/server";

export const POST = async (data: any) => {
  await connect();
  console.log(data, "test2");
  const response = NextResponse.json(
    {
      message: "Logout success!",
      success: true,
    },
    { status: 200 }
  );
  console.log("ok");

  return response;
};
