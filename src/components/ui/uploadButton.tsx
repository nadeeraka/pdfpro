import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./dialog";
import { Button } from "./button";

export const UploadButton = (): React.ReactNode => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handelOpen = (v: boolean) => {
    if (!v) setIsOpen(v);
  };

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
