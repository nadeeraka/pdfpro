"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { trpc } from "../_trpc/client";
import axios from "axios";
import { getUserHoc } from "../hooks/getUserHoc";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default function () {
  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");
  // const { getUser } = getKindeServerSession();
  // const user: any = getUser();
  // console.log(user);

  // const { data } = trpc.authCallback.useQuery(undefined, {
  //   onSuccess: ({ success }) => {
  //     if (success) {
  //       axios.get("api/login").then((res) => console.log(res));
  //      router.push(origin ? `/${origin}` : "/dashboard");
  //     }
  //   },
  // });

  console.log(getUserHoc());
  return <div>page</div>;
}
