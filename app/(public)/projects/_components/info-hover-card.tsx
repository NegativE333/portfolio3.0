"use client";

import { Badge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";

interface HoverCardProps {
  children: React.ReactNode;
  title?: string;
  technologies?: string[];
  desc?: string;
}

export const InfoHoverCard = ({
  children,
  title,
  technologies,
  desc,
}: HoverCardProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent align="start" side="top" sideOffset={2}>
        <div className="flex justify-between space-x-4 text-center">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{title}</h4>
            <p className="text-xs">{desc}</p>
            <Separator className="mt-4"/>
            <p className="text-sm text-muted-foreground">
              Technologies used
            </p>
            <div className="flex flex-wrap gap-y-1 gap-x-0.5 items-center justify-center">
              {technologies?.map((tech, i) => (
                <Badge key={i} className="text-orange-700 bg-orange-400/20 border border-orange-400 hover:bg-transparent text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
