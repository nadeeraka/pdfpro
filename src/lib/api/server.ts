import Document from "@/models/documents";
import User from "@/models/users";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import {
  checkUserExists,
  getUserId,
  redirectToPageIfUserNotFound,
} from "../main";

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

export const getDocData = async (origin: string, fid: string): Promise<any> => {
  const id = getUserId();

  if (redirectToPageIfUserNotFound(fid, origin)) {
    try {
      return await findDocsById(id, fid);
    } catch (error) {
      console.error(`Error fetching documents: ${error}`);
    }
  }
};

export const getDocInfo = async (did: string) => {
  const id = getUserId();
  return findDocsById(id, did);
};
