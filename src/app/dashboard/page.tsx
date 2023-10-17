// "use client";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";
import React from "react";
// import { getUserHoc } from "../hooks/getTestApi";
import { setUserData, checkUserAvailability } from "@/lib/api";
import DashboardUI from "@/components/dashboardUI";

export default function Page() {
  const { getUser } = getKindeServerSession();
  const user: any = getUser();
  // const id = user.id;

  const userCheck = async () => {
    const result = await checkUserAvailability("api/users/findOne", user);

    if (!result) {
      const r = await setUserData("api/users/post", user);
      if (!r) {
        redirect("auth-callback?origin=dashboard");
      }
    }
  };
  // check user exist
  if (!user) {
    redirect("auth-callback?origin=dashboard");
  } else {
    // check user already in db or not
    userCheck();
  }

  return <DashboardUI userData={user} />;
}
