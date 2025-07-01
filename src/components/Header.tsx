import { ChevronDown, ChevronUp, Menu, Moon, Sun, X } from "lucide-react";
import clsx from "clsx";
import { Link, useLocation } from "react-router";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { menu, projects } from "./Mapping";
import HoverBtn from "./HoverBtn";

const Header = ({ onhandleScroll }: { onhandleScroll: () => void }) => {
    const { setMode, isDark } = useTheme();
    const location = useLocation();

    const [template, setTemplate] = useState<boolean>(false);
    const [tabbar, setTabBar] = useState<boolean>(false);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const tabUseRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                (tabUseRef.current && !tabUseRef.current.contains(event.target as Node)) &&
                (menuRef.current && !menuRef.current.contains(event.target as Node))
            ) {
                setTabBar(false);
                setMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full z-50 p-5">
            <div className={clsx(menuOpen ? "" : "h-fit", "overflow-hidden rounded-3xl")}>

                {/* Navbar */}
                <div className={clsx(menuOpen ? "border-b-0 rounded-t-3xl" : "rounded-full", "border p-1.5 md:py-0 bg-[#fafafa]/50 dark:bg-[#121212]/50 backdrop-blur-md border-neutral-300 dark:border-neutral-800 max-w-2xl mx-auto flex justify-between px-2")}>

                    {/* Logo & Tab Toggle */}
                    <div className="pl-3 flex items-center gap-2">
                        <h1 className="font-semibold text-xl sm:text-2xl">Ibhimwhar</h1>
                        <button
                            onClick={() => setTabBar(!tabbar)}
                            className="relative transition-colors rounded-full p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 bg-neutral-100 dark:bg-neutral-900"
                        >
                            <span className="bg-red-500 rounded-full p-1 absolute top-0 right-0" />
                            <span className="bg-red-500 rounded-full p-1 absolute top-0 right-0 animate-ping" />
                            {tabbar ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex items-center gap-3">

                        {/* Semi Mobile */}
                        <ul className="hidden sm:flex md:hidden items-center gap-2">
                            {menu.map((item, idx) => (
                                <Link
                                    to={item.link}
                                    key={idx}
                                    className={clsx(
                                        "transition-colors rounded-full p-2",
                                        item.link === location.pathname && "bg-neutral-200 dark:bg-neutral-800"
                                    )}
                                >
                                    <item.icon size={18} />
                                </Link>
                            ))}
                        </ul>

                        {/* Desktop */}
                        <ul className="hidden md:flex items-center gap-2">
                            {menu.map((item, idx) => (
                                <Link
                                    to={item.link}
                                    key={idx}
                                    className={clsx(
                                        "py-3 px-1 text-sm capitalize transition-colors dark:hover:text-white/70 hover:text-black/70",
                                        item.link === location.pathname && "border-b-2 border-black dark:border-white"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </ul>

                        {/* Book a Call Button */}
                        <button onClick={onhandleScroll} className="font-semibold transition-colors rounded-full text-sm p-2 px-3 text-white bg-slate-800 hover:bg-slate-900 dark:bg-white dark:hover:bg-white/70 dark:text-slate-800">
                            Book a call
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className={clsx(
                                "transition-all sm:hidden h-fit rounded-full p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 bg-neutral-100 dark:bg-neutral-900",
                                menuOpen && "rotate-180"
                            )}
                        >
                            {menuOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </nav>
                </div>

                {/* Mobile Dropdown Menu */}
                <div
                    ref={menuRef}
                    className={clsx(
                        menuOpen ? "translate-y-0" : "-translate-y-full scale-y-0 rounded-t-0",
                        "transition-transform duration-300 relative -top-5 p-5 pt-10 border -z-40 rounded-3xl bg-[#fafafa]/50 dark:bg-[#121212]/50 backdrop-blur-md border-neutral-300 dark:border-neutral-800 max-w-2xl mx-auto"
                    )}
                >
                    {menu.map((item, idx) => (
                        <Link
                            to={item.link}
                            key={idx}
                            className={clsx(
                                "block p-2 text-sm capitalize transition-colors",
                                item.link === location.pathname ? "font-bold text-black dark:text-white text-base" : "text-black/50 dark:text-white/70"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Tabs Dropdown */}
            <div
                ref={tabUseRef}
                className={clsx(
                    "shadow-md w-full max-w-lg rounded-lg bg-[#fcfbfb] dark:bg-[#0f0f0f] dark:shadow-[#0f0f0f] border border-neutral-300 dark:border-neutral-800 absolute top-[13vh] left-1/2 -translate-x-1/2 transition-all duration-300",
                    tabbar ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
                )}
            >
                <div className="border-b border-neutral-300 dark:border-neutral-800 px-6 flex justify-between items-center">

                    <div className="flex gap-3 text-sm font-thin">
                        {["Pro", "Free"].map((list, index) => {
                            const isActive = (list === "Pro" && template === false) || (list === "Free" && template === true);
                            return (
                                <button
                                    key={index}
                                    onClick={() => setTemplate(list === "Free")}
                                    className={clsx(
                                        "py-3 text-neutral-500",
                                        isActive && "border-b-2 border-black dark:border-white"
                                    )}
                                >
                                    <span className={clsx("p-1.5 px-2 rounded-lg transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800", isActive && "text-black dark:text-white")}>{list}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Dark mode switch */}
                    <button
                        onClick={() => setMode(isDark ? "light" : "dark")}
                        className={clsx(
                            "text-[11px] transition-colors text-neutral-500 hover:text-black dark:hover:text-white flex gap-1"
                        )}
                    >
                        {isDark ? (
                            <>
                                <Sun size={16} />
                                Switch to Light
                            </>
                        ) : (
                            <>
                                <Moon size={16} />
                                Switch to Dark
                            </>
                        )}
                    </button>
                </div>

                {/* Tabs Content */}
                <div className="mt-4 pl-6">
                    {template === false ? (
                        <div className="max-h-[360px] overflow-y-auto pr-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-sm">Template ({projects.length})</h2>
                                <HoverBtn>Purchase</HoverBtn>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {projects.map((item) => (
                                    <a
                                        href={item.link}
                                        key={item.name}
                                        className="group cursor-pointer transition-colors relative overflow-hidden p-2 flex flex-col items-center text-center rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900"
                                    >
                                        <img
                                            src={item.img}
                                            alt={`Project ${item.name}`}
                                            className="object-cover w-full h-24 rounded mb-2"
                                        />
                                        <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{item.name}</p>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="max-h-[360px] overflow-y-auto pr-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-sm">Template ({projects.length})</h2>
                                <HoverBtn>Free Download</HoverBtn>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {projects.map((item) => (
                                    <a
                                        href={item.link}
                                        key={item.name}
                                        className="group cursor-pointer transition-colors relative overflow-hidden p-2 flex flex-col items-center text-center rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900"
                                    >
                                        <img
                                            src={item.img}
                                            alt={`Project ${item.name}`}
                                            className="object-cover w-full h-24 rounded mb-2"
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Bottom Tabs */}
                <div className="flex justify-center items-center p-4">
                    {["Main Page", "Examples (205)", `Templates (${projects.length})`].map((text, idx) => (
                        <HoverBtn key={idx}>{text}</HoverBtn>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;