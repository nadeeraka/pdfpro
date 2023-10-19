"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { trpc } from "../_trpc/client";
import axios from "axios";
// import { getUserHoc } from "../hooks/getTestApi";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default function Callback() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");
  router.push("/sign-in");

  return (
    <div>
      <p>Redirecting ....</p>
    </div>
  );
}
