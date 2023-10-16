import React from "react";
import { UploadButton } from "@/components/ui/uploadButton";
import Img1 from "../../../public/pdf.png";
import Image from "next/image";

const Card = () => {
  return (
    <div className=" rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10 w-96 h-96">
      <Image alt="pdf image" src={Img1} />
      <div className="text-center text-base">
        <p> this is some long ungly name </p>
      </div>
    </div>
  );
};

export default Card;
