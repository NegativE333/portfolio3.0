"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export const PageTransition = ({
    children,
    path,
}: { children: React.ReactNode, path: string }) => {
    const pathName = usePathname();
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={path}
            >
                <motion.div
                    className="absolute top-0 left-0 w-[100%] h-[100vh] bg-[#0f0f0f]/50 origin-bottom z-20"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                </motion.div>
                <motion.div
                    className="absolute top-0 left-0 w-[100%] h-[100vh] bg-[#0f0f0f]/50 origin-top z-20"
                    initial={{ scaleY: 1 }}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                </motion.div>
                {children}
            </motion.div>
        </AnimatePresence>
    )
}