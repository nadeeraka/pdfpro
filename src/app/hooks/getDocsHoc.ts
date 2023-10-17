"use client";
import { getData } from "@/lib/api";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const getDocsHoc = (id: any) => {
  const init = {
    loading: true,
    data: "",
    error: false,
  };
  const [Data, setData] = useState(init);

  const getUserData = async () => {
    if (!id) {
      setData({ ...Data, error: false, loading: false });
      return false;
    }
    console.log(id, "ppp");
    const res = await getData("api/docs/get", id);
    console.log(res);

    // axios.get("api/login");
  };

  useEffect(() => {
    getUserData();
  }, []);
};
