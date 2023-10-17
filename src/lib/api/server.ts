import Document from "@/models/documents";
import User from "@/models/users";
import { NextResponse } from "next/server";

export const findExistingUser = async (id: string) => {
  const existingUser = await User.findOne({ id });
  if (existingUser) {
    return false;
  }
  return true;
};

export const findDocsBelongToUser = async (id: string) => {
  const query = Document.where({ user_id: id });
  const documents = await query.find().count();
  if (documents) {
    return await query.find();
  }
  return false;
};
