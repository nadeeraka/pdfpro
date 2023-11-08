import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
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

export const redirectToLogin = () => {
  if (!checkUserExists()) {
    redirect("/login");
  }
};

export const generateId = (): string => {
  const id = Math.floor(Math.random() * 10000000);
  return id.toString();
};

export const generateShortName = (name: string): string => {
  if (name.length < 32) {
    return name;
  }

  return name.split("").slice(0, 30).concat([".", ".", "."]).join("");
};

export const fileUploadProgress = (size: number): number => {
  if (size < 10000) return 10000;

  return size;
};

export const fibonacci = (n: number): number => {
  if (n <= 1) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
};

// fix server concat error

export const removeFileAbb = (fileName: string): string => {
  return fileName.replace(".pdf", "");
};
