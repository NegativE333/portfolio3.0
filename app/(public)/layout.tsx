"use client";

import { Navbar } from "@/components/navbar";
import { PageTransition } from "@/components/transition/PageTransition";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";
import { Toaster } from 'react-hot-toast';


const PublicLayout = ({
    children
} : { children : React.ReactNode}) => {

    const path = usePathname();

    return (  
        <div className="h-full bg-slate-200/80">
            <Navbar />
            <Separator />
            <PageTransition path={path}>
                <main className="bg-slate-200/80 h-full mt-16">
                    {children}
                </main>
            </PageTransition>
            <Toaster position="bottom-center"/>
        </div>
    );
}
 
export default PublicLayout;