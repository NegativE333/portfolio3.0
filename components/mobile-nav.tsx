"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import { Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "./nav-items";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";
const poppins = Poppins({ subsets: ['latin'], weight: '500' });

export const MobileSidebar = () => {

    const pathName = usePathname();
    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter();

    const onOpen = useMobileSidebar((state) => state.onOpen);
    const onClose = useMobileSidebar((state) => state.onClose);
    const isOpen = useMobileSidebar((state) => state.isOpen);

    useEffect(() => {
        setIsMounted(true);
    },[]);

    useEffect(() => {
        onClose();
    }, [pathName, onClose]);

    if(!isMounted){
        return null;
    }

    return(
        <>
            <Button
                onClick={onOpen}
                className="block md:hidden mr-2"
                variant="ghost"
                size="sm"
            >
                <Menu 
                    className="h-4 w-4"
                />
            </Button>
            <Sheet open={isOpen} onOpenChange={onClose}>
                <SheetContent
                    side="right"
                    className="p-2 pt-24"
                >
                    <div className="flex flex-col items-center justify-center gap-2">
                        {navItems.map((item, i) => (
                            <Button 
                                onClick={() => router.push(item.path)}
                                key={i}
                                variant="ghost"
                                className={cn("text-lg flex flex-col bg-transparent text-muted-foreground", poppins.className, pathName === item.path && "text-black")}
                            >
                                {item.name}
                                <Separator className={cn(pathName === item.path && "bg-black")}/>
                            </Button>
                        ))} 
                    </div>
                </SheetContent>
            </Sheet>
        </>
    )
}