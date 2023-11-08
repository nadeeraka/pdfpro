"use client";
import { MessageSquare, Plus, Trash } from "lucide-react";
import { Button } from "./button";
import { dateFormat } from "@/lib/dateTime";
import { findDocById } from "@/lib/api";

const Card = ({
  title,
  url,
  createdAt,
  docId,
  userId,
  handleState,
}: {
  title: string;
  url: string;
  createdAt: string;
  docId: string;
  userId: string;
  handleState: any;
}) => {
  const handelDelete = async (uId: string, dId: string) => {
    const res = await findDocById("api/docs/delete", dId, uId);
    if (res?.data?.success) {
      handleState();
    }
  };

  const pageUrl: string = `dashboard/${docId}`;

  return (
    <div className=" ">
      <div className="sm:mx-10 mx-2 sm:mt-4 mt-2  bg-white/90  border-slate-50 border-4 sm:py-10 sm:px-10 py-4 px-4 shadow-lg ring-1 ring-zinc-400 rounded">
        <div className="flex ">
          <a href={pageUrl}>
            <div className="sm:w-12 sm:h-12 w-8 h-8 rounded-full bg-blue-500"></div>
            <div className="sm:ml-16 ml-10 flex  items-center">
              <p className="sm:text-4xl text-2xl  text-zinc-600 font-bold ">
                {title}
              </p>
            </div>
          </a>
        </div>
        <div className=" border-b-4 border-zinc-100  sm:m-5 m-2 "></div>
        <div className="flex justify-between sm:justify-center">
          <div className="flex items-center mr-4 sm:mr-4">
            <Plus />
            <p className="sm:ml-2 ml-1 text-lg">{dateFormat(createdAt)}</p>
          </div>

          <div className="flex items-center mr-4 sm:mr-4">
            <MessageSquare />
          </div>
          <div className="flex items-center ">
            <Button
              variant={"destructive"}
              size="sm"
              className="w-full"
              onClick={() => handelDelete(docId, userId)}
            >
              <Trash />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
