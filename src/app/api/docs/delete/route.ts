import { findDocsById } from "@/lib/api/server";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const reqBody = await request.json();

  const { uid, docId } = reqBody;
  // check user exist and find docs

  const res = await findDocsById(uid, docId);
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
