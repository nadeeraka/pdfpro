import { env } from "process";

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
