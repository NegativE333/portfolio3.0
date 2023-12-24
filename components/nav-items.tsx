"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";

export const NavItems = () => {

    const router = useRouter();
    const pathName = usePathname();

    const routes = [
        {
            label: "CV",
            // icon: <ScrollText className="h-4 w-4 mr-2" />,
            href: `/cv`
        },
        {
            label: "Projects",
            // icon: <Wallet className="h-4 w-4 mr-2" />,
            href: `/projects`
        },
        {
            label: "Skills",
            // icon: <BellRing className="h-4 w-4 mr-2" />,
            href: `/skills`
        },
        {
            label: "Education",
            // icon: <GanttChart className="h-4 w-4 mr-2" />,
            href: `/education`
        },
    ];

    const onClick = (href: string) => {
        router.push(href);
    };

    return(
        <div className="hidden sm:flex items-center justify-center ml-16">
            {routes.map((route) => (
                    <Link
                        key={route.href}
                        href={route.href}
                        className={cn("w-full font-normal justify-center items-center px-2 py-1 rounded-md mx-2", pathName === route.href && "bg-black/80 text-neutral-100")}
                    >
                        {route.label}
                    </Link>
                ))}
        </div>
    )
}