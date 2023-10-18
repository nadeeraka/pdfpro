import { connect } from "@/app/dbConfig/connect";
import { findDocsBelongToUser, findExistingUser } from "@/lib/api/server";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const reqBody = await request.json();

  const { id } = reqBody;
  // check user exist and find docs

  const res = await findDocsBelongToUser(id);
  if (res) {
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
