"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { PageTitle } from "../_components/page-title";

const CV = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    },[]);

    if(!isMounted){
        return null;
    }

    return ( 
        <div className="px:2 h-full w-full flex flex-col sm:flex-row gap-8 py-2 sm:py-4 justify-center items-center">
            
            <PageTitle title="cv"/>

            <div className="sm:w-[70%] h-[500px] sm:h-[600px] flex items-center justify-center sm:px-16 px-2 relative">
                <iframe className="w-[100%] h-[100%] z-10" src="https://drive.google.com/file/d/1x2wc2hdRm0jyTqRFdtSzjdPVAk92mvoq/preview"></iframe>
                
                <p className="absolute">
                    <Loader2 className="h-56 w-6 animate-spin"/>
                </p>
                
            </div>
        </div>
    );
}
 
export default CV;