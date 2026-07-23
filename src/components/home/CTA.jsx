"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CalendarDays, Sparkles } from "lucide-react";

export default function CTA() {
    return (
        <section className="relative py-24 transition-colors duration-300 bg-transparent text-slate-900 dark:text-white">
            <div className="mx-auto max-w-7xl px-6">

                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="group relative overflow-hidden rounded-[32px] p-8 md:p-16 text-center transition-all duration-500
                     /* Light Mode Glass */
                     border border-sky-200/90 bg-gradient-to-b from-white/90 via-sky-50/50 to-white/90 shadow-2xl backdrop-blur-xl
                     /* Dark Mode Cyan Glassmorphism */
                     dark:border-[#38bdf8]/40 dark:bg-gradient-to-b dark:from-[#0284c7]/20 dark:via-[#0369a1]/15 dark:to-[#0284c7]/10
                     dark:shadow-[0_0_50px_-12px_rgba(56,189,248,0.25)] dark:hover:shadow-[0_0_60px_-10px_rgba(56,189,248,0.35)]"
                >
                    {/* Glowing Background Orbs */}
                    <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl dark:bg-[#38bdf8]/20 pointer-events-none" />
                    <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl dark:bg-[#0284c7]/30 pointer-events-none" />

                    {/* Grid Noise / Texture Overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-10 dark:opacity-20 pointer-events-none" />

                    <div className="relative z-10">

                        {/* Badge */}
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-300/80 bg-sky-100/80 dark:border-[#38bdf8]/40 dark:bg-[#0284c7]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sky-800 dark:text-[#7dd3fc] backdrop-blur-md shadow-sm dark:shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                            <Sparkles className="h-3.5 w-3.5 text-sky-600 dark:text-[#38bdf8]" />
                            Ready to Get Started?
                        </span>

                        {/* Main Heading */}
                        <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl leading-tight">
                            Strengthen Your Cybersecurity Compliance with{" "}
                            <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 dark:from-[#7dd3fc] dark:via-[#38bdf8] dark:to-[#60a5fa] bg-clip-text text-transparent">
                                eESM
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-slate-600 dark:text-[#bae6fd]/80 font-normal dark:font-light">
                            Discover security gaps, assess compliance, and generate
                            enterprise-grade reports using internationally recognized
                            cybersecurity frameworks.
                        </p>

                        {/* Action Buttons */}
                        <div className="mt-10 flex flex-wrap justify-center items-center gap-4">

                            {/* Primary CTA */}
                            <Link
                                href="/request-demo"
                                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 dark:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all duration-300 hover:scale-105"
                            >
                                Request Demo
                                <ArrowRight className="h-4 w-4" />
                            </Link>

                            {/* Secondary CTA */}
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-xl border border-sky-300/80 bg-white/80 dark:border-[#38bdf8]/40 dark:bg-[#0284c7]/20 px-7 py-3.5 text-sm font-semibold text-slate-800 dark:text-[#e0f2fe] hover:bg-sky-50 dark:hover:bg-[#0284c7]/40 transition-all duration-300 backdrop-blur-md shadow-sm"
                            >
                                <CalendarDays className="h-4 w-4 text-sky-600 dark:text-[#38bdf8]" />
                                Contact Sales
                            </Link>

                        </div>

                    </div>

                    {/* Bottom Accent Glow Sheen */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#38bdf8]/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </motion.div>

            </div>
        </section>
    );
}