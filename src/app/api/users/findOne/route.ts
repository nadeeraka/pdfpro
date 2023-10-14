import { connect } from "@/app/dbConfig/connect";
import User from "@/models/users";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  await connect();
  console.log("test one");
  const reqBody = await request.json();
  const { id } = reqBody;

  // check user exist

  try {
    const user = await User.findOne({ id });
    if (user) {
      return NextResponse.json(
        { success: true, user, message: "success!" },
        { status: 200 }
      );
    }
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message, success: false },
      { status: 500 }
    );
  }
};
