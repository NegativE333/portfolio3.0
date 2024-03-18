import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";

export const RichText = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="flex items-center justify-center">
          <Image
            src={urlFor(value).url()}
            alt="Post image"
            width={700}
            height={700}
            className="object-contain rounded-xl opacity-90 w-[90%] my-4 shadow-xl"
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc space-y-5">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="ml-10 py-5 space-y-5 list-decimal list-inside">
        {children}
      </ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl py-10 font-bold">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl py-10 font-bold">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl py-10 font-bold">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl pb-4 pt-6 text-start">
        {children}
      </h4>
    ),
    h5: ({ children }: any) => (
      <h5 className="font-semibold pb-4">
        {children}
      </h5>
    ),
    h6: ({ children }: any) => (
      <h6 className="font-semibold pb-4">
        {children}
      </h6>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-orange-600/80 border-l-4 pl-3 sm:ml-1 mb-4">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      return (
        <Link
          href={value.href}
          className="cursor-pointer text-blue-700"
          target='_blank'
        >
          <span className="hidden sm:inline">
            {children}
          </span>
          <span className="sm:hidden">
            Click here
          </span>
        </Link>
      );
    },
  },
};