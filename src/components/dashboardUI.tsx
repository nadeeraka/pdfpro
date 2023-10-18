"use client";
import React, { useEffect, useState } from "react";
import { UploadButton } from "@/components/ui/uploadButton";
import Card from "./ui/card";
import { useDocsHoc } from "@/app/hooks/getDocsHoc";
import { Ghost } from "lucide-react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import EmptyPage from "./ui/emptyPage";

const DashboardUi = ({ userData }: any): React.ReactNode => {
  interface DataState {
    loading: boolean;
    data: any | [];
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
  console.log(Data);
  // console.log(data, loading, error);

  return (
    <section>
      <div className="sm:mx-10  mx-2 sm:mt-10 mt-6 h-screen">
        <div className=" w-full sm:h-24 h-14 flex justify-between sm:px-20 px-10 items-center border-b rounded sm:mb-10 mb-6">
          <p className="text-2xl sm:text-4xl font-bold  ">My Documents </p>
          <UploadButton />
        </div>
        <div className="sm:mt-10 mt-6 ">
          <p className="text-center font-semibold text-lg">
            All documents you have
          </p>

          <div className="grid  grid-rows-4 gap-2 sm:grid-cols-4 sm:gap-1   mt-2 sm:mx-10 ">
            <Card data={[]} />
            <Card data={[]} />
            <Card data={[]} />
            <Card data={[]} />
          </div>
          {/* {data.length > 0 && !loading ? (
            <Card data={[]} />
          ) : !error && loading ? (
            <Skeleton height={100} className="my-2 sm:my-5" count={3} />
          ) : (
            <EmptyPage text=" Lets upload a document." />
          )} */}
        </div>
      </div>
    </section>
  );
};

export default DashboardUi;
