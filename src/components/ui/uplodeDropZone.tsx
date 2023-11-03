import { fileUploadProgress, generateShortName } from "@/lib/main";
import { Cloud, File } from "lucide-react";
import React, { use, useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import { Progress } from "./progress";
import { useUploadThing } from "@/lib/uploadthings";
import { Toast } from "./toast";
import { toast } from "./use-toast";
import { title } from "process";
import { createData } from "@/lib/api";

const UploadDropZone = ({ id }: { id: string }) => {
  const [isUpload, setIsUpload] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [isUploadFinished, setIsUploadFinished] = useState<boolean>(false);
  const [error, setError] = useState({ error: false, message: "" });
  const [data, setdata] = useState("");

  const { startUpload } = useUploadThing("pdfUploader");

  const validateFile = (file: any): boolean => {
    if (file.size > 4000000) {
      setError({ error: true, message: "File too large" });
      return false;
    } else {
      return checkFileType(file.type);
    }
  };

  const checkFileType = (type: string): boolean => {
    if (type === "application/pdf") {
      setIsUpload(true);
      return true;
    } else {
      console.log("hit");
      setError((prev) => ({ error: true, message: "File type not supported" }));
      return false;
    }
  };

  const intervel = setInterval(() => {
    setUploadProgress((prev: number) => {
      if (prev === 95) {
        setTimeout("", 1000);

        clearInterval(intervel);
        return prev + 5;
      }
      return prev + 25;
    });
  }, fileUploadProgress(4000));

  useEffect(() => {}, []);

  return (
    <Dropzone
      multiple={false}
      onDrop={async (acceptedFiles) => {
        if (validateFile(acceptedFiles[0])) {
          const res = await startUpload(acceptedFiles);

          if (res) {
            const [docData] = res;
            console.log(docData);
            if (!docData.key) {
              setError({ error: true, message: "File not uploaded" });
              toast({
                title: error.message,
                description: "Please try agin later!",
                variant: "destructive",
              });
            }
            setIsUploadFinished(true);

            // crete pdf data in our database
            const data = {
              key: docData.key,
              name: docData.fileName,
              uploadStatus: "SUCCESS",
              url: docData.url,
              user_id: id,
              size: docData.size,
            };
            try {
              await createData("api/docs/create", data);
              setError({ error: false, message: "" });
              toast({
                title: "File Uploaded",
                description: "File uploaded successfully",
                variant: "default",
              });
            } catch (e) {
              setError({ error: true, message: "File not uploaded" });
              toast({
                title: error.message,
                description: "Please try agin later!",
                variant: "destructive",
              });
              console.log(e);
            }

            // setIsUpload(false);
            // setUploadProgress(0);
            // console.log(result);
          }
        } else {
          toast({
            title: ` ${
              error.message ? error.message : "Something went wrong!"
            } !`,
            description: "Please try agin later!",
            variant: "destructive",
          });
        }
      }}
    >
      {({ getRootProps, getInputProps, acceptedFiles }) => (
        <div className="">
          <div {...getRootProps()}>
            <div className="w-full h-64 flex justify-center items-center">
              <div className="w-full h-56 flex flex-col items-center border-slate-200 bg-slate-100 border-2 rounded-lg">
                <div className="p-2 mx-2 text-slate-400 mt-10">
                  <Cloud />
                </div>
                <label
                  className="flex flex-col items-center text-center"
                  htmlFor="drop_zone"
                >
                  Drop document or click hear to upload file
                </label>
                <div className="block">
                  <p className="p-2 mx-2 text-slate-400">
                    Upload size upto 4mb
                  </p>
                </div>
                <div className="container mb-2">
                  {isUpload && (
                    <Progress value={uploadProgress} className="h-3" />
                  )}
                </div>
                {uploadProgress === 0 && acceptedFiles && acceptedFiles[0] ? (
                  <div className="flex justify-center items-center divide-x p-2 border-slate-200 border-2 bg-white overflow-hidden">
                    <File className="mx-2 text-blue-500 w-6" />
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
