import { Mail } from "lucide-react"
import { Logo } from "./logo"


export const Navbar = () => {
    return(
        <div className="flex items-center h-14 shadow-md w-full bg-white px-20 fixed z-30">
            <Logo />
            <div 
                className="ml-auto px-2 py-1 border border-black/20 rounded-md hover:bg-neutral-100 hover:border-black/40 transition hover:shadow-sm"
            >
                <Mail />
            </div>
        </div>
    )
}