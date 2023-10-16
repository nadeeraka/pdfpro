"use client";
import React, { FC, PropsWithChildren } from "react";
import { UploadButton } from "@/components/ui/uploadButton";
import Img1 from "../../public/pdf.png";
import Image from "next/image";
import Card from "./ui/card";

const DashboardUi = (): React.ReactNode => {
  return (
    <section>
      <div className="sm:mx-10  mx-2 sm:mt-10 mt-6 h-screen">
        <div className=" w-full sm:h-24 h-14 flex justify-between sm:px-20 px-10 items-center border-b rounded ring-offset-purple-400 sm:ring-2 ring-1 sm:mb-10 mb-6">
          <p className="text-2xl sm:text-4xl font-bold  ">My Documents </p>
          <UploadButton />
        </div>
        <div className="sm:mt-10 mt-6 ">
          <p className="text-center font-semibold text-lg">
            All documents you have
          </p>
          <div className="grid grid-cols-4 gap-4 sm:mt-10  mt-2 sm:mx-10  mx-2">
            <Card />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardUi;
