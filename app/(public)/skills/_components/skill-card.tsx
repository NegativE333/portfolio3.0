import { Info } from "lucide-react"
import Image from "next/image"
import { SkillHoverCard } from "./skill-hover-card";
import { Button } from "@/components/ui/button";

interface SkillCardProps{
    name: string;
    imageUrl: string;
    info: string;
}

export const SkillCard = ({
    name,
    imageUrl,
    info
} : SkillCardProps) => {
    return(
        <div className="w-[130px] h-[120px] bg-white/50 shadow-lg rounded-md relative hover:shadow-xl hover:bg-white/90 transition group">
        <div className="h-[80%] w-full absolute">
            <Image 
                src={imageUrl}
                alt="img"
                fill
                className="object-contain p-4"
            />
        </div>
        <div className="absolute bottom-2 left-2 w-[70%] truncate text-sm text-muted-foreground group-hover:text-black transition">
            {name}
        </div>
        <SkillHoverCard info={info}>
            <Button
                variant="ghost" 
                className="absolute bottom-0 right-2 p-0 hover:bg-transparent"
            >
                <Info className="h-4 w-4 text-muted-foreground group-hover:text-black transition"/>
            </Button>
        </SkillHoverCard>
    </div>
    )
}