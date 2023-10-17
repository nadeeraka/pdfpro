"use client";
import { checkUserAvailability } from "@/lib/api";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const getUserHoc = ({ id }: any) => {
  const [Data, setData] = useState("");

  const getUserData = async () => {
    console.log(id);
    checkUserAvailability(id);
    axios.get("api/login");
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
