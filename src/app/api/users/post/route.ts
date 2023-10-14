import { connect } from "@/app/dbConfig/connect";
import User from "@/models/users";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  await connect();
  const reqBody = await request.json();
  const { email, id, given_name, family_name } = reqBody;

  // check user exist
  const user = await User.findOne({ email });
  if (user) {
    return NextResponse.json(
      { error: "user already exists!", success: true },
      { status: 200 }
    );
  }

  //    save user data

  const newUser = new User({
    id,
    email,
    given_name,
    family_name,
  });

  try {
    await newUser.save();
    console.log(newUser);

    NextResponse.json(
      { message: "New user create success!  ", success: true, newUser },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message, success: false },
      { status: 500 }
    );
  }
};
