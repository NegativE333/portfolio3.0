import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

interface SkillHoverCardProps{
    children: React.ReactNode;
    info: string;
}

export const SkillHoverCard = ({
    children,
    info
} : SkillHoverCardProps) => {
    return(
        <HoverCard>
            <HoverCardTrigger asChild>
                {children}
            </HoverCardTrigger>
            <HoverCardContent 
                align="end" 
                side="top" 
                sideOffset={6}
            >
                <div className="text-xs text-center">
                    {info}
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}