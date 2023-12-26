import { Mail } from "lucide-react";
import { Logo } from "./logo";
import { Nav } from "./nav-items";
import { MobileSidebar } from "./mobile-nav";

export const Navbar = () => {

    return(
        <div className="flex items-center h-14 shadow-md w-full bg-white sm:px-20 px-4 fixed z-30">
            <Logo />
            <Nav />
            <div 
                className="ml-auto px-2 py-1 border border-black/20 rounded-md hover:bg-neutral-100 hover:border-black/40 transition hover:shadow-sm hidden sm:flex"
            >
                <Mail />
            </div>
            <div 
                className="ml-auto flex sm:hidden"
            >
                <MobileSidebar />
            </div>
        </div>
    )
}