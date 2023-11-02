"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function Callback() {
  const router = useRouter();
  router.push("/sign-in");

  return (
    <div>
      <p>Redirecting ....</p>
    </div>
  );
}
