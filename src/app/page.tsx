import { MaxWidthWrapper } from "@/components/maxWidthWrapper";
import { APP_NAME } from "@/lib/settings/appSettings";
import Link from "next/link";
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

      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
        Chat with your <span className="text-blue-600">documents</span> in
        seconds.
      </h1>
      <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
        Quill allows you to have conversations with any PDF document. Simply
        upload your file and start asking questions right away.
      </p>

      <Link
        // className={buttonVariants({
        //   size: 'lg',
        //   className: 'mt-5',
        // })}
        href="/dashboard"
        target="_blank"
      >
        Get started {/* <ArrowRight className='ml-2 h-5 w-5' /> */}
      </Link>
    </MaxWidthWrapper>
  );
}
