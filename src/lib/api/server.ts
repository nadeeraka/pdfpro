import Document from "@/models/documents";
import User from "@/models/users";
import { NextResponse } from "next/server";

export const findExistingUser = async (id: string) => {
  const existingUser = await User.findOne({ id });
  return existingUser || false;
};

export const findDocsBelongToUser = async (id: string) => {
  const query = await Document.find({ user_id: id });
  return query || false;
};

export const findUserIsExists = async (id: string) => {
  const existingUser = await User.findOne({ id });

  return existingUser || false;
};

export const findDocsById = async (uid: string, docId: string) => {
  const query = await Document.find({ user_id: uid }).find({ _id: docId });
  return query || false;
};

export const deleteOne = async (uid: string, docId: string) => {
  const query = await Document.find({ user_id: uid })
    .find({ _id: docId })
    .deleteOne();
  return query || false;
};
