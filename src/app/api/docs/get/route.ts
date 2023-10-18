import { connect } from "@/app/dbConfig/connect";
import { findDocsBelongToUser, findExistingUser } from "@/lib/api/server";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  console.log("zod!");

  const reqBody = await request.json();

  const { id } = reqBody;
  console.log(id, "soo");
  // check user exist and find docs

  const res = await findDocsBelongToUser(id);
  if (res) {
    console.log(res, "res");
    return NextResponse.json(
      { error: "all documents", success: true, res },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { error: "No documents found!", success: false },
      { status: 200 }
    );
  }
};
