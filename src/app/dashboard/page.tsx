// "use client";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";
import React from "react";
import { getUserHoc } from "../hooks/getUserHoc";
import { genarateOrginBasedOnEnv } from "@/lib/main";

export default function Page() {
  const { getUser } = getKindeServerSession();
  const user = getUser();
  // const router = useRouter();
  const path = genarateOrginBasedOnEnv();
  const sentUserData = (data: any) => {
    axios
      .post(`http://localhost:3000/api/users/post`, data)
      .then((r) => r)
      .catch((e) => console.log(e));
  };

  console.log(user);
  if (!user || !user.id) {
    // router.push("/sign-in");
    redirect("auth-callback?origin=dashboard");
  } else {
    sentUserData(user);

    // getUserHoc();
  }
  return <div>Page</div>;
}
