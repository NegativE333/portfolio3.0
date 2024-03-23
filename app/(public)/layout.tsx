"use client";

import { Navbar } from "@/components/navbar";
import { Separator } from "@/components/ui/separator";
import { Toaster } from 'react-hot-toast';

const PublicLayout = ({
    children
} : { children : React.ReactNode}) => {

    return (  
        <div className="h-[100vh]">
            <Navbar />
            <Separator />
            <div className="absolute inset-0 -z-10 h-full w-full bg-neutral-100/90 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-32 -z-10 m-auto h-[350px] w-[350px] rounded-full bg-orange-600 opacity-30 blur-[100px]"></div></div>
            <main className="h-full flex justify-center items-center">
                {children}
            </main>
            <Toaster position="bottom-center"/>
        </div>
    );
}

export default PublicLayout;