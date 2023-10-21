"use client";
import React from "react";
import PdfViewPage from "./pdfViewPage";
import ChatView from "./chatView";

const PdfView = ({ pdfData }: any) => {
  console.log(pdfData);
  return (
    <section>
      <div className="w-full  mt-6 sm:mt-10 mx:4  h-[calc(100vh-1.5rem)] ">
        <div className=" grid grid-rows-2 gap-4 sm:grid-cols-3 sm:gap-1  ">
          <div className="sm:col-span-2">
            <PdfViewPage />
          </div>

          <div className="">
            <ChatView />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PdfView;
