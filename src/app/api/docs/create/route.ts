import { connect } from "@/app/dbConfig/connect";
import Document from "@/models/documents";
import { NextRequest, NextResponse } from "next/server";

const createDoc = async ({
  name,
  uploadStatus,
  url,
  key,
  createdAt,
  updatedAt,
  user_id,
  size,
}: any) => {
  const docs = new Document({
    name,
    uploadStatus,
    url,
    // key,
    size,
    user_id,
  });
  await docs.save();
  return docs;
};

export const POST = async (request: NextRequest) => {
  await connect();
  const reqBody = await request.json();
  const { name, uploadStatus, url, key, user_id, size } = reqBody;

  // save  data
  try {
    console.log(name, uploadStatus, url, key, user_id, size);
    const newDoc = await createDoc({
      name,
      uploadStatus,
      url,
      key,
      user_id,
      size,
    });

    return NextResponse.json(
      { message: "New document created successfully!", success: true, newDoc },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message, success: false },
      { status: 500 }
    );
  }
};
