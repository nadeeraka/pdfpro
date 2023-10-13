import { connect } from "@/app/dbConfig/connect";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  await connect();
  //   console.log(data, "test2");
  const reqBody = await request.json();
  const { email, id, given_name, family_name } = reqBody;
  console.log(
    email,
    id,
    given_name,
    family_name,
    "888888888888888888888888888888888888888888888888888888888"
  );
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
