import React from "react";
import { UploadButton } from "@/components/ui/uploadButton";
import Img1 from "../../../public/pdf.png";
import Image from "next/image";
import { MessageSquare, Plus, Trash } from "lucide-react";
import { Button } from "./button";

type obj = [{ res: string }] | [];
const Card = ({ data }: { data: obj }) => {
  return (
    // <div className="grid  grid-rows-4 gap-2 sm:grid-cols-4 sm:gap-4 sm:mt-10  mt-2 sm:mx-10  mx-2">
    //   <div className="sm:m-10 sm:mb-10 mt-6 mb-6 mx-10 rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10 sm:w-96 sm:h-96 w-72 h-72 hover:bg-transparent/20 active:bg-transparent/20 ">
    //     <Image alt="pdf image" src={Img1} className="sm:w-72 w-48" />
    //     <div className="text-center text-base">
    //       <p> this is some long ugly name </p>
    //     </div>
    //   </div>
    // </div>
    <div className=" ">
      <div className="sm:mx-10 mx-2 sm:mt-4 mt-2  bg-white/90  border-slate-50 border-4 sm:py-10 sm:px-10 py-4 px-4 shadow-lg ring-1 ring-zinc-400">
        <div className="flex ">
          <div className="sm:w-12 sm:h-12 w-8 h-8 rounded-full bg-blue-500"></div>
          <div className="sm:ml-16 ml-10 flex  items-center">
            <p className="sm:text-4xl text-2xl  text-zinc-600 font-bold ">
              title
            </p>
          </div>
        </div>
        <div className=" border-b-4 border-zinc-100  sm:m-5 m-2 "></div>
        <div className="flex justify-between sm:justify-center">
          <div className="flex items-center mr-4 sm:mr-4">
            <Plus />
            <p className="sm:ml-2 ml-1 text-lg">2010 dec</p>
          </div>

          <div className="flex items-center mr-4 sm:mr-4">
            <MessageSquare />
          </div>
          <div className="flex items-center ">
            <Button variant={"destructive"} size="sm" className="w-full">
              <Trash />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
