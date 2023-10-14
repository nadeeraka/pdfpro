import axios from "axios";
import { genarateOrginBasedOnEnv } from "../main";

const path = genarateOrginBasedOnEnv();

const queryApi = async (
  uri: string,
  data: any,
  isPost: boolean,
  needData = false
) => {
  let res: any = "";
  if (isPost) {
    res = await axios.post(`${path}/${uri}`, data);
  } else {
    res = await axios.get(`${path}/${uri}`);
  }

  console.log(res);
  if (res.data.success) {
    // console.log("ok");
    if (needData) {
      return res;
    }
    return true;
  }
  return false;
};

export const setUserData = async (uri: string, data: any) => {
  return queryApi(uri, data, true);
};

export const checkUserAvailability = (uri: string, id: string) => {
  console.log(id);
  return queryApi(uri, id, true, true);
};
