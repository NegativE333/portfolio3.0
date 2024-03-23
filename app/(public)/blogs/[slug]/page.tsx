import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { fullBlog } from '@/lib/interface';
import { client, urlFor } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';
import { RichText } from "@/components/rich-text";
import { format } from 'date-fns';
import { Roboto } from "next/font/google";
import { cn } from "@/lib/utils";

const rFont = Roboto({ subsets: ['latin'], weight: ['400'] });

interface BlogPageProps {
  params: { slug: string }
}

export const revalidate = 30;

async function getData(slug: string) {
  const query = `
    *[_type == "blog" && slug.current == '${slug}'] {
        "currentSlug": slug.current,
          title,
          smallDescription,
          content,
          titleImage,
          publishedAt
      }[0]`;

  const data = await client.fetch(query);
  return data;
}

const BlogPage = async ({
  params
}: BlogPageProps) => {

  const data: fullBlog = await getData(params.slug);

  return (
    <>
      <div
        className="px:16 w-full flex-col sm:flex-row gap-8 py-2 sm:py-4 justify-center items-center h-fit mt-8 hidden sm:flex"
      >
        <div className="sm:w-full bg-gray-500/40 shadow-lg p-4 rounded-lg sm:ml-4 gap-2 sm:gap-4 flex flex-col w-[95%]">
          <Image
            unoptimized
            src={urlFor(data.titleImage).url()}
            alt="mm"
            width={50}
            height={50}
            className="h-[70%] w-full rounded-lg"
          />
          <h1 className="text-center mt-2 text-lg sm:text-xl font-semibold">
            {data.title}
          </h1>
          <h2 className="text-center text-sm sm:text-base">
            {data.smallDescription}
          </h2>
          <div className="flex items-center justify-center">
            <Image
              unoptimized
              width={5}
              height={5}
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover"
              src="/om-tekade.png" alt="Simon Lewis"
            />
            <p className="ml-4 w-fit text-sm sm:text-base">
              <strong className="block font-medium text-black">
                Om Tekade
              </strong>
              <span className="text-sm text-black">
                {format(new Date(data.publishedAt), 'MMMM dd, yyyy')}
              </span>
            </p>
          </div>
        </div>

        <ScrollArea className="hidden sm:block h-[590px] w-full bg-gray-500/30 shadow-lg px-2 sm:px-8 rounded-lg sm:mr-4 text-gray-900">
          <div className={cn("sm:mt-2 mb-8 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-blue-400 prose-a:text-primary text-start sm:text-justify", rFont.className)}>
            <PortableText value={data.content} components={RichText} />
          </div>
        </ScrollArea>
      </div>

      <div className="sm:hidden h-full mt-44 flex flex-col gap-4 items-center">
        <div className="sm:w-full bg-gray-500/40 shadow-lg p-4 rounded-lg sm:ml-4 gap-2 sm:gap-4 flex flex-col w-[95%]">
          <Image
            unoptimized
            src={urlFor(data.titleImage).url()}
            alt="mm"
            width={50}
            height={50}
            className="h-[70%] w-full rounded-lg"
          />
          <h1 className="text-center mt-2 text-lg sm:text-xl font-semibold">
            {data.title}
          </h1>
          <h2 className="text-center text-sm sm:text-base">
            {data.smallDescription}
          </h2>
          <div className="flex items-center justify-center">
            <Image
              unoptimized
              width={5}
              height={5}
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover"
              src="/om-tekade.png" alt="Simon Lewis"
            />
            <p className="ml-4 w-fit text-sm sm:text-base">
              <strong className="block font-medium text-black">
                Om Tekade
              </strong>
              <span className="text-sm text-black">
                {format(new Date(data.publishedAt), 'MMMM dd, yyyy')}
              </span>
            </p>
          </div>
        </div>
        <div className="bg-gray-500/30 shadow-lg px-2 sm:px-8 rounded-lg sm:mr-4 text-gray-900 w-[95%]">
          <div className={cn("sm:mt-2 mb-8 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-blue-400 prose-a:text-primary text-start sm:text-justify", rFont.className)}>
            <PortableText value={data.content} components={RichText} />
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPage;