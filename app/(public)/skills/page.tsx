"use client";

import { cn } from "@/lib/utils";
import { Marcellus } from "next/font/google";
import { data } from "./_data/data";
import {motion} from 'framer-motion';
import { SkillCard } from "./_components/skill-card";
import { ScrollArea } from "@/components/ui/scroll-area";

const marcellus = Marcellus({ subsets: ["latin"], weight: ["400"] });

const Education = () => {
    return ( 
        <div className="px:2 h-full w-full flex flex-col sm:flex-row gap-8 py-2 sm:py-4 justify-center items-center">
            <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:2}}
                className={cn("text-center text-3xl sm:w-[30%] flex items-center justify-center", marcellus.className)}
            >
                &gt;skills<motion.span 
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{repeat: Infinity, type: 'tween'}}    
                    >
                        _
                    </motion.span>
            </motion.div>
            <ScrollArea className="h-[600px] w-full px-8 sm:px-24">
                <motion.div 
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:1}}
                    className="flex items-center justify-center"
                >
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {data.map((skill, i) => (
                            <SkillCard 
                                key={i}
                                name={skill.name}
                                imageUrl={skill.imageUrl}
                                info={skill.info}
                            />
                        ))}
                    </div>
                </motion.div>
            </ScrollArea>
        </div>
    );
}
 
export default Education;