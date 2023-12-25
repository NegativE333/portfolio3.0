import Image from "next/image"
import { motion } from "framer-motion"
import { CalendarDays, ExternalLink, FileCode, Info } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { InfoHoverCard } from "./info-hover-card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ProjectCardProps{
    title: string,
    desc: string,
    technologies: string[],
    imageUrl: string,
    createdAt: string,
    href: string,
    ghref: string,
}

export const ProjectCard = ({
    title,
    desc,
    technologies,
    imageUrl,
    href,
    ghref,
    createdAt
} : ProjectCardProps) => {
    return(
        <div className="wrapper group bg-slate-100 p-2 antialiased text-gray-900">
          <Image
            src={imageUrl}
            alt="image"
            height={350}
            width={350}
            className="bg-white group-hover:bg-black transition p-0.5 rounded-md shadow-xl"
          />
            <motion.div 
                whileHover={{y:40}}
                className="hidden sm:relative sm:block px-4 -mt-16"
                style={{ zIndex : 0}}
            >
            <div className="bg-white px-5 py-4 rounded-lg shadow-lg">
              <div className="flex items-baseline">
                <span className="bg-teal-100 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide py-0.5">
                  {technologies[0]}
                </span>
                <div className="ml-auto flex gap-1">
                    <motion.div 
                        whileHover={{scale:1.2}} 
                    >
                        <Link href={ghref} target="_blank">
                            <FileCode className="h-5 w-5"/>
                        </Link>
                    </motion.div>
                    <motion.div 
                        whileHover={{scale:1.2}} 
                    >
                        <Link href={href} target="_blank">
                            <ExternalLink className="h-5 w-5"/>
                        </Link>
                    </motion.div>
                </div>
              </div>
              <Separator className="mt-2"/>
              <h4 className="mt-2 text-xl font-semibold uppercase leading-tight truncate">
                {title}
              </h4>
              <div className="flex items-center">
                <InfoHoverCard
                    title={title}
                    desc={desc}
                    technologies={technologies}
                >
                    <div className="mt-1 flex items-center gap-1 rounded-md hover:bg-gray-200 cursor-pointer w-fit p-0.5">
                        <Info className="h-4 w-4"/>
                        More Info
                    </div>
                </InfoHoverCard>
                <div className="ml-auto flex items-center text-sm text-muted-foreground gap-0.5">
                    <CalendarDays className="h-3 w-3"/>
                    {createdAt}
                </div>
              </div>
            </div>
          </motion.div>
          <div 
              className="relative sm:hidden px-4 -mt-16"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-baseline">
                <span className="bg-teal-100 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide py-0.5">
                  {technologies[0]}
                </span>
                <div className="ml-auto flex gap-1">
                    <motion.div 
                        whileHover={{scale:1.2}} 
                    >
                        <Link href={ghref} target="_blank">
                            <FileCode className="h-5 w-5"/>
                        </Link>
                    </motion.div>
                    <motion.div 
                        whileHover={{scale:1.2}} 
                    >
                        <Link href={href} target="_blank">
                            <ExternalLink className="h-5 w-5"/>
                        </Link>
                    </motion.div>
                </div>
              </div>
              <h4 className="mt-2 text-xl font-semibold uppercase leading-tight truncate">
                {title}
              </h4>
              <InfoHoverCard
                title={title}
                desc={desc}
                technologies={technologies}
              >
                <Button variant="ghost" className="mt-1 flex items-center gap-1 rounded-md hover:bg-gray-200 cursor-pointer w-fit p-0.5">
                    <Info className="h-4 w-4"/>
                    More Info
                </Button>
              </InfoHoverCard>
            </div>
          </div>
        </div>
    )
}