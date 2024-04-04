import { Mail } from "lucide-react";
import { Logo } from "./logo";
import { Nav } from "./nav-items";
import { MobileSidebar } from "./mobile-nav";

export const Navbar = () => {

    return(
        <div className="flex items-center h-14 shadow-md w-full bg-zinc-50 sm:px-20 px-4 fixed z-10">
            <Logo />
            <Nav />
            <div 
                className="ml-auto flex sm:hidden"
            >
                <MobileSidebar />
            </div>
        </div>
    )
}