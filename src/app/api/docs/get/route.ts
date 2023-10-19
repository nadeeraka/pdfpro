import { connect } from "@/app/dbConfig/connect";
import {
  findDocsBelongToUser as findDocs,
  findDocsBelongToUser,
  findExistingUser,
} from "@/lib/api/server";
import { NextRequest, NextResponse } from "next/server";
import Document from "@/models/documents";

export const POST = async (request: NextRequest) => {
  const { id } = await request.json();

  const documents = await findDocsBelongToUser(id);

  if (documents) {
    console.log(documents, "documents");
    return NextResponse.json(
      { message: "All documents", success: true, documents },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { message: "No documents found!", success: false },
      { status: 200 }
    );
  }
};
