import Image from "next/image";
import { MaxWidthWrapper } from "@/components/maxWidthWrapper";
import { APP_NAME } from "@/lib/settings/appSettings";
export default function Home() {
  return (
    <MaxWidthWrapper
      className={
        "mb-12 mt-28 sm:mt-40 flex flex-col justify-center items-center text-center"
      }
    >
      <div className="mx-auto mb-4 max-w-fit overflow-hidden flex justify-center items-center space-x-2 rounded-full border-gray-200 px-7 py-2 bg-white shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
        <p className="font-semibold  text-sm text-gray-700">
          {APP_NAME} is Public
        </p>
      </div>
    </MaxWidthWrapper>
  );
}
