import { deleteOne } from "@/lib/api/server";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const reqBody = await request.json();

  const { uid, docId } = reqBody;
  // find the doc belong to user and then delete

  const res = await deleteOne(uid, docId);
  if (res) {
    return NextResponse.json(
      { error: "delete  document success! ", success: true, res },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { error: "No documents found!", success: false },
      { status: 200 }
    );
  }
};
