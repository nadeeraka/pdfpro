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
  const query = Document.find({ user_id: id });
  if (query) {
    return query;
  }
  return false;
};

export const findUserIsExists = async (id: string) => {
  const existingUser = await User.findOne({ id });
  if (existingUser) {
    return true;
  }
  return false;
};

export const findDocsById = async (uid: string, docId: string) => {
  const query = await Document.find({ user_id: uid }).find({ _id: docId });
  // const documents = await query.where({ _id: docId });
  if (query) {
    console.log(query);
    return query;
  }
  return false;
};
