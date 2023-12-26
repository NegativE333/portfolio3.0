import { Code2 } from "lucide-react"
import Link from "next/link"
import{ motion } from 'framer-motion';


export const Logo = () => {
    return(
        <div>
            <Link href='/'>
                <p className="text-3xl">
                    &gt;
                    <motion.span 
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{repeat: Infinity, type: 'tween'}}    
                    >
                        _
                    </motion.span>
                </p>
            </Link>
        </div>
    )
}