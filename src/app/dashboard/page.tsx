// "use client";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import axios from "axios";
import { redirect } from "next/navigation";
import React from "react";
import { getUserHoc } from "../hooks/getUserHoc";
import { genarateOrginBasedOnEnv } from "@/lib/main";

export default function Page() {
  const { getUser } = getKindeServerSession();
  const user = getUser();
  const path = genarateOrginBasedOnEnv();
  const sentUserData = (data: any) => {
    console.log(`${path}/api/users`);
    axios
      .post(`http://localhost:3000/api/users/post`, data)
      .then((r) => console.log(r))
      .catch((e) => console.log(e));
  };

  console.log(user);
  if (!user || !user.id) {
    redirect("auth-callback?origin=dashboard");
  } else {
    sentUserData(user);

    // getUserHoc();
  }
  return <div>Page</div>;
}
