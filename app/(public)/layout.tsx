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
        <div className="h-full">
            <Navbar />
            <Separator />
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-32 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-orange-600 opacity-20 blur-[100px]"></div></div>
            <PageTransition path={path}>
                <main className="h-full mt-16">
                    {children}
                </main>
            </PageTransition>
            <Toaster position="bottom-center"/>
        </div>
    );
}

export default PublicLayout;