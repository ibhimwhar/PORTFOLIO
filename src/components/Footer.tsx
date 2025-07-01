import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { links } from "./Mapping"
import clsx from "clsx";

const Footer = () => {
  const { setMode, isDark } = useTheme();

  return (
    <footer className="flex justify-between items-center max-w-xl mx-auto border-t border-neutral-300 dark:border-neutral-800 p-5">
      <p className="text-[12px] text-neutral-500 leading-relaxed">
        &copy; {new Date().getFullYear()} Ibhimwhar Dev.
      </p>

      <div className="flex gap-5">

        <div className="flex flex-wrap gap-3 sm:gap-6">
          {links.slice(3).map((link, i) => (
            link.link ? (
              <a key={i} href={link.link} className="flex items-center gap-2 transition-colors rounded text-neutral-500 hover:text-black dark:hover:text-white hover:underline text-[10px]">
                <span className="hidden sm:list-item">{link.title}</span>
                <span className="sm:hidden"><link.icon size={16} /></span>
              </a>
            ) : ""
          ))}

        </div>

        <button
          onClick={() => setMode(isDark ? "light" : "dark")}
          className={clsx(isDark && "rotate-180", "text-[11px] transition-all text-neutral-500 hover:text-black dark:hover:text-white border p-1.5 rounded-full", "border-neutral-300 dark:border-neutral-800")}
        >
          {isDark=== false ? (
            <Moon size={18} />
          ) : (
            <Sun size={18} />
          )}
        </button>

      </div>

    </footer>
  )
}

export default Footer