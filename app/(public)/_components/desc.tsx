"use client";

import { Github, Instagram, Link, Linkedin, Twitter } from "lucide-react"
import { motion } from "framer-motion";

export const Desc = () => {

    

    return(
        <div className="flex flex-col gap-12 items-center justify-center relative">
            <div className="grid grid-cols-2 gap-8">
                <motion.div
                    initial={{x:-100, y:-100, opacity:0}}
                    animate={{x:0, y:0, opacity:1}}
                    transition={{duration:1}}
                >
                    <motion.a
                        animate={{opacity: [0.7, 1, 1, 0.7]}}
                        transition={{ duration : 2.5, type: 'tween', repeat: Infinity }}
                    >
                        <motion.div
                            whileHover={{ scale : 1.2 }}
                        >
                            <Github className="h-9 w-9 cursor-pointer"/>
                        </motion.div>
                    </motion.a>
                </motion.div>
                <motion.div
                    initial={{x:100, y:-100, opacity:0}}
                    animate={{x:0, y:0, opacity:1}}
                    transition={{duration:1}}
                >
                    <motion.a
                        animate={{opacity: [0.7, 1, 1, 0.7]}}
                        transition={{ duration : 2.5, type: 'tween', repeat: Infinity }}
                    >
                        <motion.div
                            whileHover={{ scale : 1.2 }}
                        >
                            <Linkedin className="h-9 w-9 cursor-pointer"/>
                        </motion.div>
                    </motion.a>
                </motion.div>
                <motion.div
                    initial={{y:100, x:-100, opacity:0}}
                    animate={{y:0, x:0, opacity:1}}
                    transition={{duration:1}}
                >
                    <motion.a
                        animate={{opacity: [0.7, 1, 1, 0.7]}}
                        transition={{ duration : 2.5, type: 'tween', repeat: Infinity }}
                    >
                        <motion.div
                            whileHover={{ scale : 1.2 }}
                        >
                            <Instagram className="h-9 w-9 cursor-pointer"/>
                        </motion.div>
                    </motion.a>
                </motion.div>
                <motion.div
                    initial={{y:100, x:100, opacity:0}}
                    animate={{y:0, x:0, opacity:1}}
                    transition={{duration:1}}
                >
                    <motion.a
                        animate={{opacity: [0.7, 1, 1, 0.7]}}
                        transition={{ duration : 2.5, type: 'tween', repeat: Infinity }}
                    >
                        <motion.div
                            whileHover={{ scale : 1.2 }}
                        >
                            <Twitter className="h-9 w-9 cursor-pointer"/>
                        </motion.div>
                    </motion.a>
                </motion.div>
            </div>
            <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{ duration : 1 }}
            >
                <motion.div
                    initial={{ backgroundColor : 'black', border: 'solid', borderColor: 'black'}}
                    transition={{ duration : 0.5 }}
                    whileHover={{scale: 1.1, border: 'solid', borderColor: 'black', backgroundColor: 'transparent', color: 'black'}}
                    className="p-2 rounded-md text-white/90 cursor-pointer"
                >
                    View my CV
                </motion.div>
            </motion.div>
        </div>
    )
}