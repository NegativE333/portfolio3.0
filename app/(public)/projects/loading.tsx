import { Loader2 } from "lucide-react";

const ProjectLoading = () => {
    return (  
        <div className="flex items-center justify-center h-[100vh]">
            <Loader2 className="animate-spin"/>
        </div>
    );
}
 
export default ProjectLoading;