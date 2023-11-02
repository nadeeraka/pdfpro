import { generateShortName } from "@/lib/main";
import { Cloud, File } from "lucide-react";
import React from "react";
import Dropzone from "react-dropzone";

const UploadDropZone = () => {
  const checkFills = (name: string): boolean => {
    console.log(name);
    if (name === "application/pdf") {
      return true;
    }
    return false;
  };
  return (
    <Dropzone
      multiple={false}
      onDrop={(acceptedFiles) => checkFills(acceptedFiles[0].type)}
    >
      {({ getRootProps, getInputProps, acceptedFiles }) => (
        <div className="">
          <div {...getRootProps()}>
            <div className=" w-full h-64 flex justify-center items-center">
              <div className="w-full h-56 flex flex-col items-center border-slate-200 bg-slate-100 border-2 rounded-lg">
                <div className="p-2 mx-2 text-slate-400 mt-10">
                  <Cloud />
                </div>

                <label
                  className="flex flex-col items-center text-center "
                  htmlFor="drop_zone"
                >
                  Drop document or click hear to upload file
                </label>
                <div className="block">
                  <p className=" p-2 mx-2 text-slate-400 ">
                    Upload size upto 4mb
                  </p>
                </div>
                {acceptedFiles && acceptedFiles[0] ? (
                  <div className="flex justify-center items-center  divide-x  p-2 border-slate-200 border-2 bg-white  overflow-hidden">
                    <File className=" mx-2  text-blue-500 w-6 " />{" "}
                    {generateShortName(acceptedFiles[0].name)}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      )}
    </Dropzone>
  );
};

export default UploadDropZone;
