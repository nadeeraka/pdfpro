import { connect } from "@/app/dbConfig/connect";
import { findExistingUser } from "@/lib/api/server";
import Document from "@/models/documents";
import { NextRequest, NextResponse } from "next/server";

const createDoc = async ({
  id,
  name,
  uploadStatus,
  url,
  key,
  createdAt,
  updatedAt,
  user_id,
}: any) => {
  const docs = new Document({
    id,
    name,
    uploadStatus,
    url,
    key,
    createdAt,
    updatedAt,
    user_id,
  });
  await docs.save();
  return docs;
};

export const POST = async (request: NextRequest) => {
  await connect();
  const reqBody = await request.json();
  const { id, name, uploadStatus, url, key, createdAt, updatedAt, user_id } =
    reqBody;

  // check if user exists
  findExistingUser(user_id);

  // save  data
  try {
    const newUser = await createDoc({
      id,
      name,
      uploadStatus,
      url,
      key,
      createdAt,
      updatedAt,
      user_id,
    });
    return NextResponse.json(
      { message: "New document created successfully!", success: true, newUser },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message, success: false },
      { status: 500 }
    );
  }
};
