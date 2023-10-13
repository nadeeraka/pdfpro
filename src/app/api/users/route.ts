import { connect } from "@/app/dbConfig/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  await connect();
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
