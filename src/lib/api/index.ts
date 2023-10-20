import axios from "axios";
import { generateOriginBasedOnEnv } from "../main";

const path = generateOriginBasedOnEnv();
const abortController = new AbortController();
const queryApi = async (
  uri: string,
  data: any,
  method: "GET" | "POST",
  needData = false
) => {
  let res: any = "";

  switch (method) {
    case "POST":
      console.log(data);
      res = await axios.post(`${path}/${uri}`, data);
      console.log(res);
      break;
    case "GET":
      res = await axios.get(`${path}/${uri}`, {
        signal: abortController.signal,
      });
      break;
    default:
      throw new Error(`Unsupported method: ${method}`);
  }

  if (!res.data.success) return false;

  return needData ? res : "";
};

export const checkUserAvailability = (uri: string, id: string) => {
  return queryApi(uri, id, "POST", true);
};

export const getDocData = (uri: string, id: string) => {
  const data = { id: id };
  return queryApi(uri, data, "POST", true);
};

export const createData = async (uri: string, data: any) => {
  return queryApi(uri, data, "POST");
};

export const findDocById = (uri: string, uid: string, docId: string) => {
  const data = { uid, docId };
  return queryApi(uri, data, "POST", true);
};

export const getDocById = (uri: string, docId: string) => {
  console.log(`${uri}/${docId}`);
  return queryApi(`${uri}/${docId}`, "", "GET");
};
