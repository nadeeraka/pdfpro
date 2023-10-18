import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./dialog";
import { Button } from "./button";
import { createDoc } from "@/lib/api";

export const UploadButton = ({ id }: { id: string }): React.ReactNode => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handelOpen = (v: boolean) => {
    !v ? setIsOpen(v) : "";
  };

  const createDocument = async () => {
    // id,
    // name,
    // uploadStatus,
    // url,
    // key,
    // createdAt,
    // updatedAt,
    // user_id,
    if (!id) {
      return false;
      // To-Do goto sign in page
    }
    const data = {
      // id: 1,
      name: "test 1",
      uploadStatus: "SUCCESS",
      url: "not set",
      user_id: id,
    };
    const res = await createDoc("api/docs/create", data);
    console.log(res);
  };

  useEffect(() => {
    createDocument();
  }, []);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(v) => {
        handelOpen(v);
      }}
    >
      <DialogTrigger onClick={() => setIsOpen(true)} asChild>
        <Button>Upload PDF</Button>
      </DialogTrigger>

      <DialogContent>
        example content
        {/* <UploadDropzone isSubscribed={isSubscribed} /> */}
      </DialogContent>
    </Dialog>
  );
};
