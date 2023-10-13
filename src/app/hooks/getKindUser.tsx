"use client";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const getUserHoc = () => {
  const [Data, setData] = useState("");
  //   const { getUser } = getKindeServerSession();
  //   const user = getUser();

  const getUser = async () => {
    //   const userData = await
    axios.get("api/login");
  };

  useEffect(() => {
    axios.get("api/users").then((res: any) => {
      if (res) {
        setData(res);
      }
      return { data: "ok" };
    });
  }, []);
};
