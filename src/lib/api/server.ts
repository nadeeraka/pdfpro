import User from "@/models/users";
import { NextResponse } from "next/server";

export const findExistingUser = async (id: string) => {
  const existingUser = await User.findOne({ id });
  if (existingUser) {
    return false;
  }
  return true;
};
