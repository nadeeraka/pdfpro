import { useFindDoc } from "@/app/hooks/useFindDoc";
import React from "react";
import PdfView from "@/components/ui/pdf";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { findDocsBelongToUser, getDocData } from "@/lib/api/server";

interface pageProp {
  params: {
    fid: string;
  };
}

const PdfRenderPage = ({ params }: pageProp) => {
  // check user
  // if user not avalable redirect to login
  // redirectToPageIfUserNotFound("dashboard", params.fid);
  const pdfData = getDocData("dashboard", params.fid);
  // get data

  return <PdfView pdfData={pdfData} />;
};

export default PdfRenderPage;
