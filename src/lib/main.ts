import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { env } from "process";
const { getUser } = getKindeServerSession();

export const generateOriginBasedOnEnv = (): string => {
  let path: string = "";
  const e = process.env.NODE_ENV;
  if (e === "development") {
    path = "http://localhost:3000";
  } else {
    path = process.env.PRODUCTION_PATH!;
  }
  return path;
};

export const getEnv = (): string => {
  return process.env.NODE_ENV;
};

export const checkUserExists = (): boolean => {
  const user = getUser();
  const id = user.id ? user.id : "";
  if (id) {
    return true;
  }
  return false;
};

export const getUserId = (): string => {
  const user = getUser();
  return user.id || "";
};

export const redirectToPageIfUserNotFound = (fid: string, origin?: string) => {
  const genUrl: string = origin
    ? `/auth-callback?origin=${origin}/${fid}`
    : "/auth-callback";

  if (!checkUserExists()) {
    redirect(genUrl);
  }
  return false;
};
