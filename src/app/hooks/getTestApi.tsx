"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const getTestApi = () => {
  const [Data, setData] = useState("");

  const getUser = async () => {
    //   const userData = await
    axios.get("api/login");
  };

  useEffect(() => {
    axios.get("api/login").then((res: any) => {
      if (res) {
        setData(res);
      }
      return { data: "ok" };
    });
  }, []);
};