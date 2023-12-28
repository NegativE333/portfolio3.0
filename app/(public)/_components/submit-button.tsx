import { Send } from "lucide-react"
import { useFormStatus } from "react-dom";


export const SubmitButton = () => {

    
    const { pending } = useFormStatus();

    return(
        <button 
            type="submit" 
            className="group flex items-center justify-center gap-1 h-[3rem] w-[6rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-105 hover:scale-110 active:scale-105 hover:bg-gray-950 disabled:scale-100 disabled:opacity-65 shadow-md"
            disabled={pending}
        >
            {pending ? <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div> : (
                <>
                    Send <Send className="h-4 w-4 text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"/>
                </>
            )}
        </button>
    )
}