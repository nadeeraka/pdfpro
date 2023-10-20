import Document from "@/models/documents";
import User from "@/models/users";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
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

export const redirectToPageIfUserNotFound = (
  origin: string,
  fid: string,
  user: any
): boolean => {
  // const { fid } = params;

  // const { getUser } = getKindeServerSession();
  // const user = getUser();

  // if (!user || !user.id) redirect(`/auth-callback?origin=dashboard/${fid}`);

  const genUrl: string = `/auth-callback?origin=${origin}/${fid}`;

  if (!user || !user.id) {
    redirect(genUrl);
  }
  return true;
};

export const getDocData = async (origin: string, fid: string) => {
  const { getUser } = getKindeServerSession();
  const user = getUser();
  const id = user.id ? user.id : "";
  console.log(id);
  return (
    redirectToPageIfUserNotFound(origin, fid, user) && findDocsById(id, fid)
  );
};
