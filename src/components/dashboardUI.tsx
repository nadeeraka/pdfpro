"use client";
import React, { FC, PropsWithChildren } from "react";
import { UploadButton } from "@/components/ui/uploadButton";

const DashboardUi = (): React.ReactNode => {
  return (
    <section>
      <div className="sm:mx-10  mx-2 sm:mt-10 mt-6 ">
        <div className=" w-full sm:h-24 h-14 flex justify-between sm:px-20 px-10 items-center border-b border-blue-300 border-4 rounded ring-offset-purple-400 sm:ring-4 ring-2 sm:mb-10 mb-6">
          <p className="text-2xl sm:text-4xl font-bold  ">My Documents </p>
          <UploadButton />
        </div>
        <div className="sm:mt-10 mt-6 ">
          <div className="grid grid-cols-4 gap-4"></div>
        </div>
      </div>
    </section>
  );
};

export default DashboardUi;
