// "use client";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";
import React from "react";
import { getUserHoc } from "../hooks/getUserHoc";
import { genarateOrginBasedOnEnv } from "@/lib/main";
import { setUserData, checkUserAvailability } from "@/lib/api";

export default function Page() {
  const { getUser } = getKindeServerSession();
  const user: any = getUser();
  const id = user.id;
  // const router = useRouter();
  const path = genarateOrginBasedOnEnv();

  console.log(user);
  if (!user || !id) {
    // router.push("/sign-in");
    redirect("auth-callback?origin=dashboard");
  } else {
    // console.log(user);
    checkUserAvailability("api/users/findOne", user);
    // setUserData("api/users/post", user);

    // getUserHoc();
  }
  return <div>Page</div>;
}
