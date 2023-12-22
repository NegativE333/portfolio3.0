import { Navbar } from "@/components/navbar";
import { Separator } from "@/components/ui/separator";


const PublicLayout = ({
    children
} : { children : React.ReactNode}) => {
    return (  
        <div className="h-full bg-slate-100">
            <Navbar />
            <Separator />
            <main className="bg-slate-100 h-[99%]">
                {children}
            </main>
        </div>
    );
}
 
export default PublicLayout;