import { ScrollArea } from "@/components/ui/scroll-area";
import { fullBlog } from '@/lib/interface';
import { client, urlFor } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';
import { RichText } from "@/components/rich-text";
import { format } from 'date-fns';
import { Roboto } from "next/font/google";
import { cn } from "@/lib/utils";
import { BlogInfo } from "../_components/blog-info";

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
          audioLink,
          audioDur,
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
        <BlogInfo 
          imageSrc={urlFor(data.titleImage).url()}
          audioLink={data?.audioLink?.asset}
          audioDur={data.audioDur}
          title={data.title}
          desc={data.smallDescription}
          date={format(new Date(data.publishedAt), 'MMMM dd, yyyy')}
        />
        <ScrollArea className="hidden sm:block h-[590px] w-full bg-gray-500/30 shadow-lg px-2 sm:px-8 rounded-lg sm:mr-4 text-gray-900">
          <div className={cn("sm:mt-2 mb-8 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-blue-400 prose-a:text-primary text-start sm:text-justify", rFont.className)}>
            <PortableText value={data.content} components={RichText} />
          </div>
        </ScrollArea>
      </div>

      <div className="sm:hidden h-full mt-44 flex flex-col gap-4 items-center">
        <BlogInfo 
          imageSrc={urlFor(data.titleImage).url()}
          audioLink={data?.audioLink?.asset}
          audioDur={data.audioDur}
          title={data.title}
          desc={data.smallDescription}
          date={format(new Date(data.publishedAt), 'MMMM dd, yyyy')}
        />
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