"use client";

import { Badge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { CalendarDays } from "lucide-react";

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
      <HoverCardTrigger>{children}</HoverCardTrigger>
      <HoverCardContent align="center" side="top" sideOffset={6}>
        <div className="flex justify-between space-x-4 text-center">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{title}</h4>
            <p className="text-sm">{desc}</p>
            <Separator className="mt-4"/>
            <p className="text-sm text-muted-foreground">
              Technologies used
            </p>
            <div className="flex flex-wrap items-center justify-center gap-0.5">
              {technologies?.map((tech, i) => (
                <Badge key={i} className="bg-transparent text-black border border-black hover:bg-transparent">
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
