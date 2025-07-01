import clsx from "clsx"
import { ArrowRight, ChevronRight } from "lucide-react"
import type { ReactNode } from "react"

const HoverBtn = ({ children }: { children: ReactNode }) => {
    return (
        <button
            className={clsx(
                "group relative flex items-center dark:text-white text-black",
                "transition-colors text-[12px] p-1"
            )}
        >
            {children}
            <span className="relative w-4 h-4 ml-2">

                <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                    <ChevronRight size={16} />
                </span>

                <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ArrowRight size={16} />
                </span>

            </span>
        </button>

    )
}

export default HoverBtn