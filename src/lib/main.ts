import { env } from "process";

export const genarateOrginBasedOnEnv = () => {
  let path = "";
  const e = process.env.NODE_ENV;
  if (e === "development") {
    path = "http://localhost:3000";
  }
  return path;
};
