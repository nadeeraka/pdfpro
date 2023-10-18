"use client";
import { getData } from "@/lib/api";
import { InitType } from "@/lib/types";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const useDocsHoc = (id: any) => {
  const initData: InitType = {
    loading: true,
    data: [],
    error: false,
  };
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getUserData = async () => {
    if (!id) {
      setLoading(false);
      setError(true);
      return false;
    }

    const res = await getData("api/docs/get", id);
    if (res) {
      setData(res);
      setLoading(false);
      setError(true);
      return true;
    }
    setLoading(false);
    setError(true);

    // axios.get("api/login");
  };

  useEffect(() => {
    getUserData();
  }, []);
  console.log(data, loading, error);
  return { data, loading, error };
};
