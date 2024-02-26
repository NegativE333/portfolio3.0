"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Marcellus } from "next/font/google";
import { cn } from "@/lib/utils";

const marcellus = Marcellus({ subsets: ["latin"], weight: ["400"] });

interface PageTitleProps{
    title: string;
}

export const PageTitle = ({
    title,
} : PageTitleProps) => {
    return(
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:2}}
            className={cn("text-center text-3xl sm:w-[30%] flex items-center justify-center", marcellus.className)}
        >
            <ChevronRight className="h-8 w-8"/>{title}<motion.span 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{repeat: Infinity, type: 'tween'}}    
            >
                _
            </motion.span>
      </motion.div>
    )
}