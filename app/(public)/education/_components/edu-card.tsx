import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({ subsets: ['latin'], weight: '500' });

interface EduCardProps{
    name: string;
    degree: string;
    year: string;
    imageUrl: string;
}

export const EduCard = ({
    name,
    degree,
    year,
    imageUrl
} : EduCardProps) => {
    return(
        <div className="w-full h-[130px] rounded-lg relative flex bg-white shadow-lg hover:shadow-2xl transition group">
            <div className="w-[40%] sm:w-[20%] h-full absolute">
                <Image 
                    src={imageUrl}
                    alt="img"
                    layout="fill"
                    className="object-cover rounded-s-lg  border-black group-hover:scale-105 transition group-hover:border-none"
                />
            </div>
            <div className={cn("ml-[42%] sm:ml-[22%] h-full flex flex-col gap-0.5 justify-center", poppins.className)}>
                <p className="text-md sm:text-xl">
                    {name}
                </p>
                <Separator className="my-0.5"/>
                <p className="text-xs sm:text-lg text-muted-foreground group-hover:text-black transition">
                    {degree}
                </p>
                <Separator className="my-0.5"/>
                <p className="text-xs sm:text-lg text-muted-foreground group-hover:text-black transition">
                    {year}
                </p>
            </div>
        </div>
    )
}