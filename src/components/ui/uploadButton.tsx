import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./dialog";
import { Button } from "./button";

export const UploadButton = (): React.ReactNode => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handelOpen = (v: boolean) => {
    !v ? setIsOpen(v) : "";
  };

  const createDocument = async () => {};

  useEffect(() => {}, []);

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
