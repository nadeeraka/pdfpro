"use client";
import React, { FC, PropsWithChildren, useEffect, useState } from "react";
import { UploadButton } from "@/components/ui/uploadButton";
import Img1 from "../../public/pdf.png";
import Image from "next/image";
import Card from "./ui/card";
import { getTestApi } from "@/app/hooks/getTestApi";
import { getUserHoc } from "@/app/hooks/getKindUser";
import { useDocsHoc } from "@/app/hooks/getDocsHoc";
import { InitType } from "@/lib/types";

const DashboardUi = ({ userData }: any): React.ReactNode => {
  interface DataState {
    loading: boolean;
    data: any;
    error: boolean;
  }
  const [Data, setData] = useState<DataState | null>(null);
  const { data, loading, error } = useDocsHoc(userData.id);

  useEffect(() => {
    const init: DataState = {
      loading: loading,
      data: data,
      error: error,
    };
    setData(init);
  }, [loading, data, error]);
  // console.log(Data);
  // console.log(data, loading, error);

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

          <div className="grid  grid-rows-4 gap-2 sm:grid-cols-4 sm:gap-4 sm:mt-10  mt-2 sm:mx-10  mx-2">
            <Card /> <Card /> <Card /> <Card />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardUi;
