import { Ghost } from "lucide-react";
import React from "react";

const EmptyPage = ({ text }: { text: string }) => {
  return (
    <div className="">
      <div className="flex justify-center mt-20 sm:mt-36">
        <Ghost className="text-zinc-800 h-16 w-16 sm:h-36 sm:w-36" />
      </div>
      <p className="text-zinc-700 text-lg sm:text-2xl text-center mt-2 sm:mt-6 font-semibold">
        Look like its empty...
      </p>
      <p className="text-zinc-700 text-lg sm:text-2xl text-center mt-1  font-semibold">
        {text}
      </p>
    </div>
  );
};

export default EmptyPage;
