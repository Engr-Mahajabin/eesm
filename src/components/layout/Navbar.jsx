"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react";
import { navLinks } from "@/data/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => setMounted(true), []);

    const getLinkClass = (href) =>
        `text-sm font-medium transition flex items-center gap-1 py-2 ${pathname === href
            ? "text-blue-600 dark:text-blue-400"
            : "text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
        }`;

    return (
        <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <Image src="/logo.svg" alt="eESM" width={42} height={42} priority />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 lg:flex">
                    {navLinks.map((link) => (
                        <div key={link.title} className="relative group py-2">
                            <Link href={link.href} className={getLinkClass(link.href)}>
                                {link.title}
                                {link.submenu && <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />}
                            </Link>

                            {/* Pure CSS Hover Dropdown */}
                            {link.submenu && (
                                <div className="absolute left-0 top-full pt-2 w-72 invisible opacity-0 translate-y-2 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 z-50">
                                    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white py-2 shadow-xl dark:border-slate-800 dark:bg-slate-950">
                                        {link.submenu.map((sub) => (
                                            <Link
                                                key={sub.title}
                                                href={sub.href}
                                                className="block px-5 py-2.5 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-blue-400"
                                            >
                                                {sub.title}
                                            </Link>
                                        ))}
                                        <div className="my-1 border-t border-slate-200 dark:border-slate-800" />
                                        <Link
                                            href={link.href}
                                            className="block px-5 py-2.5 text-sm font-semibold text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-900"
                                        >
                                            View All →
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Right Controls */}
                <div className="hidden items-center gap-3 lg:flex">
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="rounded-xl border border-slate-200 p-2 transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
                    >
                        {mounted && theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                    </button>

                    <Link href="https://www.soft.aaeesm.com/" className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition hover:text-blue-600 dark:text-slate-300">
                        Login
                    </Link>
                    <Link href="/request-demo" className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
                        Request Demo
                    </Link>
                </div>

                {/* Mobile Toggle Button */}
                <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-slate-700 dark:text-slate-300">
                    {mobileOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 lg:hidden fixed top-20 left-0 w-full h-[calc(100vh-5rem)] p-5 space-y-4 overflow-y-auto">
                    <nav className="flex flex-col space-y-2">
                        {navLinks.map((link) => (
                            <div key={link.title} className="space-y-1">
                                <Link
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`block rounded-lg px-3 py-2 text-base font-semibold ${pathname === link.href ? "text-blue-600 dark:text-blue-400" : "text-slate-800 dark:text-slate-200"
                                        }`}
                                >
                                    {link.title}
                                </Link>

                                {/* Mobile Submenu (Flat list instead of heavy accordions) */}
                                {link.submenu && (
                                    <div className="pl-4 border-l border-slate-200 dark:border-slate-800 space-y-1">
                                        {link.submenu.map((sub) => (
                                            <Link
                                                key={sub.title}
                                                href={sub.href}
                                                onClick={() => setMobileOpen(false)}
                                                className="block rounded-lg px-3 py-1.5 text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900"
                                            >
                                                {sub.title}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Action Buttons */}
                    <div className="pt-4 space-y-2 border-t border-slate-200 dark:border-slate-800">
                        <Link href="https://www.soft.aaeesm.com/" onClick={() => setMobileOpen(false)} className="block w-full rounded-xl border py-2.5 text-center font-medium text-slate-700 dark:text-slate-300">
                            Login
                        </Link>
                        <Link href="/request-demo" onClick={() => setMobileOpen(false)} className="block w-full rounded-xl bg-blue-600 py-2.5 text-center font-semibold text-white">
                            Request Demo
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}