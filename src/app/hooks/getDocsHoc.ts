"use client";
import { getData } from "@/lib/api";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const getDocsHoc = ({ id }: any) => {
  const init = {
    loading: true,
    data: "",
    error: false,
  };
  const [Data, setData] = useState(init);

  const getUserData = async () => {
    console.log(id, "ppp");
    if (!id) {
      setData({ ...Data, error: false, loading: false });
      return false;
    }
    const res = await getData("api/docs/get", id);
    console.log(res);

    // axios.get("api/login");
  };
  getUserData();

  // useEffect(() => {
  //   axios.get("api/users").then((res: any) => {
  //     if (res) {
  //       setData(res);
  //     }
  //     return { data: "ok" };
  //   });
  // }, []);
};
