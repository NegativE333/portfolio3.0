"use client";

import { motion } from "framer-motion";
import { data } from "./_data/data";
import { ProjectCard } from "./_components/project-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PageTitle } from "../_components/page-title";

const Projects = () => {
  return (
    <div
      className="px:2 h-full w-full flex flex-col sm:flex-row gap-8 py-2 sm:py-4 justify-center"
    >

      <PageTitle title="projects"/>
      
      <ScrollArea className="h-[590px] w-full px-2 sm:px-8">
        <motion.div 
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:2}}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-8 gap-2 sm:pt-8 sm:pb-12"
        >
          {data.map((d) => (
              <ProjectCard 
                  key={d.title}
                  title={d.title}
                  desc={d.desc}
                  createdAt={d.createdAt}
                  imageUrl={d.imageUrl}
                  ghref={d.ghref}
                  href={d.href}
                  technologies={d.technologies}
              />
          ))}
        </motion.div>
      </ScrollArea>
    </div>
  );
};

export default Projects;
