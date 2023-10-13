import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { trpc } from "../_trpc/client";

const AuthCallback = ({}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  const { data } = trpc.test.useQuery();
  return <div>page</div>;
};

export default AuthCallback;
