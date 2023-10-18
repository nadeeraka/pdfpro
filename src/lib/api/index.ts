import axios from "axios";
import { generateOriginBasedOnEnv } from "../main";

const path = generateOriginBasedOnEnv();

const queryApi = async (
  uri: string,
  data: any,
  method: "GET" | "POST",
  needData = false
) => {
  let res: any = "";

  switch (method) {
    case "POST":
      // console.log(data);
      res = await axios.post(`${path}/${uri}`, data);
      break;
    case "GET":
      res = await axios.get(`${path}/${uri}`);
      break;
    default:
      throw new Error(`Unsupported method: ${method}`);
  }

  if (!res.data.success) return false;

  return needData ? res : true;
};

export const setUserData = async (uri: string, data: any) => {
  return queryApi(uri, data, "POST");
};

export const checkUserAvailability = (uri: string, id: string) => {
  return queryApi(uri, id, "POST", true);
};

export const getData = (uri: string, id: string) => {
  const data = { id: id };
  return queryApi(uri, data, "POST", true);
};
