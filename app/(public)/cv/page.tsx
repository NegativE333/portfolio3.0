"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Marcellus } from "next/font/google";
import { Loader2 } from "lucide-react";
import {motion} from 'framer-motion';

const marcellus = Marcellus({ subsets: ["latin"], weight: ["400"] });

const CV = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    },[]);

    if(!isMounted){
        return null;
    }

    return ( 
        <div className="px:2 h-full w-full flex flex-col sm:flex-row gap-8 py-2 sm:py-4 justify-center">
            <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:2}}
                className={cn("text-center text-3xl sm:w-[30%] flex items-center justify-center", marcellus.className)}
            >
                &gt;cv<motion.span 
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{repeat: Infinity, type: 'tween'}}    
                    >
                        _
                    </motion.span>
            </motion.div>
            <div className="sm:w-[70%] h-[500px] sm:h-[600px] flex items-center justify-center sm:px-16 px-2 relative">
                <iframe className="w-[100%] h-[100%] z-10" src="https://drive.google.com/file/d/1bg7ih6Xi2JmEuITOCZl9xCeYA9k3iGRG/preview"></iframe>
                
                <p className="absolute">
                    <Loader2 className="h-56 w-6 animate-spin"/>
                </p>
                
            </div>
        </div>
    );
}
 
export default CV;