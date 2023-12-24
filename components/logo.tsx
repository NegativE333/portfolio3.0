import { Code2 } from "lucide-react"
import Link from "next/link"


export const Logo = () => {
    return(
        <div
            className=""
        >
            <Link href='/'>
                <Code2 className="h-8 w-8"/>
            </Link>
        </div>
    )
}