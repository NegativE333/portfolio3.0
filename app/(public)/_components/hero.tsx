"use client";

import { Josefin_Sans, Nunito } from 'next/font/google'
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { cn } from '@/lib/utils';

const josefin = Josefin_Sans({ subsets : ['latin'] });
const nunito = Nunito({ subsets : ['latin']});

export const Hero = () => {

    const controls = useAnimation();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            controls.start({ opacity: 1 });
        }, 800);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [controls])

    return(
        <div 
            className="h-full flex items-center justify-center"
        >
            <div className={cn("flex flex-col gap-1 sm:items-start justify-center bg-white p-4 rounded-lg shadow-xl", josefin.className)}>
                <motion.div 
                    initial={{opacity : 0}}
                    animate={{opacity: 1}}
                    transition={{duration : 0.7}}
                    className={cn("text-2xl sm:text-3xl", nunito.className)}
                >
                    Hi there,
                </motion.div>
                <p className="text-xl sm:text-2xl">
                    
                </p>
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={controls}
                    transition={{ duration: 0.7 }}
                    className="text-md sm:text-lg"
                >
                    I am <span className="font-semibold">Om Tekade</span>, a dedicated computer engineer and tech enthusiast. With expertise in cutting-edge technologies like <span className="font-semibold">Next.js</span>, <span className="font-semibold">Node.js</span>, <span className="font-semibold">Prisma</span> and more, I fuse creativity with code. Outside the digital realm, you&apos;ll find me exploring nature through trekking and getting lost in the immersive realms of anime. Embracing the dynamic challenges of programming, I&apos;m on a perpetual quest for innovation and learning. Join me in traversing the ever-evolving landscape of technology.
                </motion.div>
            </div>
        </div>
    )
}