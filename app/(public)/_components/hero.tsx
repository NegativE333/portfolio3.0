"use client";

import { Josefin_Sans, Nunito } from 'next/font/google'
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { cn } from '@/lib/utils';
import { Github, Linkedin } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';

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
            className="h-full flex flex-col gap-6 items-center justify-center"
        >
            <div className={cn("flex flex-col gap-1 items-start bg-white/50 hover:bg-white/70 transition p-4 rounded-lg shadow-xl", josefin.className)}>
                <motion.div 
                    initial={{opacity : 0}}
                    animate={{opacity: 1}}
                    transition={{duration : 0.7}}
                    className={cn("text-xl sm:text-3xl", nunito.className)}
                >
                    Hi there,
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={controls}
                    transition={{ duration: 0.7 }}
                    className="text-sm sm:text-lg text-justify"
                >
                    I&apos;m a computer engineering student deeply passionate about web development. Constantly exploring the latest technologies, I&apos;m driven by the challenge of crafting seamless user experiences and solving complex problems. From mastering frameworks to delving into backend systems, I thrive on pushing the boundaries of what&apos;s possible in the digital world.
                </motion.div>
            </div>
            <motion.div 
                initial={{opacity : 0}}
                animate={{opacity : 1}}
                transition={{duration: 3}}
                className='flex flex-col gap-4 items-center justify-center bg-white/50 p-4 rounded-lg shadow-xl'
            >
                <p className='text-center text-xs sm:text-sm'>
                    Follow me for updates on my work, insights into my creative process, and a glimpse into my work life. Don&apos;t be shy, come say hi!
                </p>
                <div 
                    className='flex gap-6'
                >
                    <motion.div
                        whileHover={{scale : 1.2}}
                    >
                        <Link href="https://github.com/NegativE333" target='_blank'>
                            <Github className='h-7 w-7'/>
                        </Link>
                    </motion.div>
                    <motion.div
                        whileHover={{scale : 1.2}}
                    >
                        <Link href="https://www.linkedin.com/in/om-tekade-b07474231/" target='_blank'>
                            <Linkedin className='h-7 w-7'/>
                        </Link>
                    </motion.div>
                    <motion.div
                        whileHover={{scale : 1.2}}
                    >
                        <Link href="https://twitter.com/om_tekade" target='_blank'>
                            <div className='h-7 w-7 text-[22px] flex items-center justify-center'>
                                <FaXTwitter />
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}