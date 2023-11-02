import { fileUploadProgress, generateShortName } from "@/lib/main";
import { Cloud, File } from "lucide-react";
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Progress } from "./progress";
import { useUploadThing } from "@/lib/uploadthings";

const UploadDropZone = () => {
  const [isUpload, setisUpload] = useState<boolean>(false);
  const [isUploadFinished, setisUploadFinished] = useState<boolean>(false);
  const [uploadProgress, setuploadProgress] = useState<number>(0);

  const { startUpload } = useUploadThing("pdfUploader");

  const validateFills = (file: any) => {
    console.log(file.size);
    if (file.size > 4000000) {
      console.log("too large", file.size - 4000000);
      return false;
    }
    checkFills(file.type);
  };
  const checkFills = (name: string): boolean => {
    console.log(name);
    if (name === "application/pdf") {
      setisUpload(true);
      return true;
    }
    return false;
  };

  const intervel = setInterval(() => {
    if (uploadProgress < 95) {
      setuploadProgress((prev) => prev + 25);
    } else {
      clearInterval(intervel);
      setuploadProgress(100);
      return;
    }
  }, fileUploadProgress(4000));

  console.log(isUpload);
  return (
    <Dropzone
      multiple={false}
      onDrop={(acceptedFiles) => {
        validateFills(acceptedFiles[0] && startUpload(acceptedFiles));
      }}
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
                <div className="container mb-2">
                  {isUpload && (
                    <Progress value={uploadProgress} className="h-3" />
                  )}
                </div>
                {uploadProgress === 0 && acceptedFiles && acceptedFiles[0] ? (
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
