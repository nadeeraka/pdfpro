import { connect } from "@/app/dbConfig/connect";
import { findExistingUser } from "@/lib/api/server";
import { UserData } from "@/lib/types";
import User from "@/models/users";
import { NextRequest, NextResponse } from "next/server";
import { Interface } from "readline";

const createUser = async ({ id, email, given_name, family_name }: UserData) => {
  const user = new User({ id, email, given_name, family_name });
  await user.save();
  return user;
};

export const POST = async (request: NextRequest) => {
  await connect();
  const reqBody = await request.json();
  const { email, id, given_name, family_name } = reqBody;

  // check if user exists
  findExistingUser(id);

  // save user data
  try {
    const newUser = await createUser({ id, email, given_name, family_name });
    return NextResponse.json(
      { message: "New user created successfully!", success: true, newUser },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message, success: false },
      { status: 500 }
    );
  }
};
