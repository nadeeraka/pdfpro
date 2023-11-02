import { connect } from "@/app/dbConfig/connect";
import {
  findDocsBelongToUser as findDocs,
  findDocsBelongToUser,
  findExistingUser,
  getDocInfo,
} from "@/lib/api/server";
import { NextRequest, NextResponse } from "next/server";
import Document from "@/models/documents";

export const POST = async (request: NextRequest) => {
  const { id } = await request.json();

  const document = await getDocInfo(id);

  if (document) {
    console.log(document, "documents");
    return NextResponse.json(
      { message: "Fetch document success!", success: true, document },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { message: "No documents found!", success: false },
      { status: 200 }
    );
  }
};
