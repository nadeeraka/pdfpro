import React from "react";
import { UploadButton } from "@/components/ui/uploadButton";
import Img1 from "../../../public/pdf.png";
import Image from "next/image";

type obj = [{ res: string }] | [];
const Card = ({ data }: { data: obj }) => {
  return (
    <div className="grid  grid-rows-4 gap-2 sm:grid-cols-4 sm:gap-4 sm:mt-10  mt-2 sm:mx-10  mx-2">
      <div className="sm:m-10 sm:mb-10 mt-6 mb-6 mx-10 rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10 sm:w-96 sm:h-96 w-72 h-72 hover:bg-transparent/20 active:bg-transparent/20 ">
        <Image alt="pdf image" src={Img1} className="sm:w-72 w-48" />
        <div className="text-center text-base">
          <p> this is some long ugly name </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
