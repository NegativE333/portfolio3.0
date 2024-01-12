"use client";

import { cn } from "@/lib/utils";
import { Marcellus } from "next/font/google";
import { data } from "./_data/data";
import { EduCard } from "./_components/edu-card";
import {motion} from 'framer-motion';

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
                &gt;education<motion.span 
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{repeat: Infinity, type: 'tween'}}    
                    >
                        _
                    </motion.span>
            </motion.div>
            <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:1}}
                className="w-full h-[600px] flex items-center justify-center">
                <div className="flex flex-col items-center justify-start sm:justify-center h-full w-full px-2 sm:px-44 gap-4 sm:gap-8">
                    {data.map((edu, i) => (
                        <EduCard 
                            key={i}
                            name={edu.name}
                            degree={edu.degree}
                            grade={edu.grade}
                            year={edu.year}
                            imageUrl={edu.imageUrl}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
 
export default Education;