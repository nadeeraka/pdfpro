import { connect } from "@/app/dbConfig/connect";
import { findExistingUser } from "@/lib/api/server";
import User from "@/models/users";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  await connect();
  const reqBody = await request.json();
  const { id } = reqBody;

  // check user exist

  const res = await findExistingUser(id);
  if (!res) {
    return NextResponse.json(
      { error: "user already exists!", success: true },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { error: "User created failed!", success: false },
      { status: 500 }
    );
  }
};
