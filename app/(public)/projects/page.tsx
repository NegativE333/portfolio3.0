"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Marcellus } from "next/font/google";
import { data } from "./_data/data";
import { ProjectCard } from "./_components/project-list";

const marcellus = Marcellus({ subsets: ["latin"], weight: ["400"] });

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 500 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="px:2 sm:px-64 h-full w-full flex flex-col gap-8 py-12 justify-center"
    >
      <div className={cn("text-center text-3xl", marcellus.className)}>
        Projects
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
      </div>
    </motion.div>
  );
};

export default Projects;
