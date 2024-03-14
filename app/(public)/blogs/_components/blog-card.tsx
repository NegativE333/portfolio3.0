import Image from "next/image";
import { format } from 'date-fns';

interface BlogCardProps{
    imageUrl: string;
    title: string;
    description: string;
    publishedAt: string;
    slug: string;
}

export const BlogCard = ({
    imageUrl,
    title,
    description,
    publishedAt,
    slug
}: BlogCardProps) => {
    return (
        <div className="px-2">
            <a href={`/blogs/${slug}`}>
                <article className="mx-auto flex max-w-md flex-col rounded-2xl bg-gray-500/30 px-4 py-4 shadow md:max-w-4xl md:flex-row md:items-center group">
                    <div className="shrink-0 my-1 md:mr-8 md:max-w-sm">
                        <Image
                            unoptimized
                            className="rounded-lg w-full h-[23vh] sm:h-[30vh] object-cover"
                            width={250}
                            height={250}
                            src={imageUrl}
                            alt="Img"
                        />
                    </div>
                    <div className="flex flex-col gap-3 justify-center items-center">
                        <p className="block text-lg sm:text-2xl font-medium text-gray-700 text-center group-hover:text-black transition">
                            {title}
                        </p>
                        <p className="text-black text-center text-sm sm:text-base">
                            {description}
                        </p>
                        <div className="flex items-center justify-center">
                            <Image
                                unoptimized
                                width={5}
                                height={5}
                                className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover border border-black"
                                src="/om-tekade.png" alt="Simon Lewis"
                            />
                            <p className="ml-2 sm:ml-4 w-fit text-xs sm:text-base">
                                <strong className="block font-medium text-gray-800">
                                    Om Tekade
                                </strong>
                                <span className="text-xs text-black/80">
                                    {format(new Date(publishedAt), 'MMMM dd, yyyy')}
                                </span>
                            </p>
                        </div>
                    </div>
                </article>
            </a>
        </div>
    )
}