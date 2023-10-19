"use client";
import { useFindDoc } from "@/app/hooks/useFindDoc";
import React from "react";

interface pageProp {
  params: {
    fid: string;
  };
}
const PdfRenderPage = ({ params }: pageProp) => {
  const data = useFindDoc(params.fid);
  console.log(params.fid);
  return <div>PdfRenderPage {params.fid}</div>;
};

export default PdfRenderPage;
