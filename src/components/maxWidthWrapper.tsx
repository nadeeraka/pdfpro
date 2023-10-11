import { cn } from "@/lib/utill";
import React, { ReactNode } from "react";

export const MaxWidthWrapper = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto width-full max-w-screen-xl px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};
