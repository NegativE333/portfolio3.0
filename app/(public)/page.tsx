import { Desc } from "./_components/desc";
import { Hero } from "./_components/hero";

export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center h-full">
      <div className="sm:flex-1 h-full sm:px-20 mt-20 sm:mt-0 text-center sm:text-start p-2 sm:p-0">
        <Hero />
      </div>
      <div className="sm:flex-1 h-full sm:px-8 px-2 flex items-center justify-center">
        <Desc />
      </div>
    </div>
  )
}
