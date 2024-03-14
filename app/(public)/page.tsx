import { ScrollArea } from "@/components/ui/scroll-area";
import { Contact } from "./_components/contact";
import { Hero } from "./_components/hero";

export default function Home() {
  return (
    <ScrollArea className="h-[90vh]">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 items-center justify-center h-full">
            <div className="sm:flex-1 sm:h-[90vh] h-full flex flex-col sm:px-20 mt-4 sm:mt-0 text-center sm:text-start p-3 sm:p-0">
              <Hero />
            </div>
            <div className="sm:flex-1 sm:h-[90vh] h-full sm:px-8 px-3 flex items-center justify-center p-2 sm:p-0 mb-8 sm:mb-0">
              <Contact />
            </div>
        </div>
      </ScrollArea>
  )
}
