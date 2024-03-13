import { ScrollArea } from "@/components/ui/scroll-area";
import { PageTitle } from "../_components/page-title";
import { BlogCard } from "./_components/blog-card";
import { client, urlFor } from "@/lib/sanity";
import { simpleBlogCard } from "@/lib/interface";

export const revalidate = 30; // revalidate at most 30 seconds

async function getData() {
  const query = `
  *[_type == 'blog'] | order(publishedAt desc) {
    title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage,
    publishedAt
  }`;

  const data = await client.fetch(query);

  return data;
}

const Blogs = async () => {
  const data: simpleBlogCard[] = await getData();
  
  return (
    <div
      className="px:2 h-full w-full flex flex-col sm:flex-row gap-8 py-2 sm:py-4 justify-center"
    >

      <PageTitle title="blogs"/>
      
      <ScrollArea className="h-[590px] w-full px-2 sm:px-8">
        <div
          className="flex flex-col gap-4 sm:pt-8 sm:pb-12"
        >
          {data.map((blog, idx) => (
            <BlogCard 
              key={idx}
              imageUrl={urlFor(blog.titleImage).url()}
              title={blog.title}
              description={blog.smallDescription}
              publishedAt={blog.publishedAt}
              slug={blog.currentSlug}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Blogs;
