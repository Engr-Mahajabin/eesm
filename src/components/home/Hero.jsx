"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-28 pb-20 text-center">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6">

                {/* Top Text Section */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center"
                >
                    {/* Badge */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-300/80 bg-sky-100/80 dark:border-white/20 dark:bg-white/10 px-4 py-1.5 text-sm font-medium text-sky-800 dark:text-[#7dd3fc] backdrop-blur-md shadow-sm dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_4px_20px_rgba(0,0,0,0.2)]">
                        <ShieldCheck className="h-4 w-4 text-sky-600 dark:text-[#38bdf8] dark:drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                        <span className="dark:drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                            Healthcare workforce analytics platform
                        </span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="max-w-4xl text-5xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white md:text-7xl dark:drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
                        Simplify Cybersecurity
                        <br />
                        <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 dark:bg-gradient-to-b dark:from-[#e0f2fe] dark:via-[#38bdf8] dark:to-[#0284c7] bg-clip-text text-transparent dark:drop-shadow-[0_0_20px_rgba(56,189,248,0.4)]">
                            Governance & Compliance
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-[#e0f2fe]/90 font-normal dark:font-normal dark:drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                        eGovernance Enterprise Security Manager (eESM) helps organizations
                        assess compliance, identify security gaps, manage cyber risks and
                        strengthen governance using internationally recognized frameworks.
                    </p>

                    {/* Action Buttons */}
                    <div className="mt-10 flex flex-wrap gap-4 justify-center">
                        {/* Primary Button */}
                        <Link
                            href="/request-demo"
                            className="inline-flex items-center gap-2 rounded-xl bg-sky-600 hover:bg-sky-700 dark:bg-gradient-to-b dark:from-[#38bdf8] dark:to-[#0066ee] px-8 py-3.5 font-semibold text-white transition hover:brightness-110 shadow-md dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),0_10px_25px_rgba(0,102,238,0.4)]"
                        >
                            Request a demo
                            <ArrowRight className="h-5 w-5" />
                        </Link>

                        {/* Glass Secondary Button */}
                        <Link
                            href="/modules"
                            className="inline-flex items-center gap-1.5 rounded-xl border border-sky-300/80 bg-sky-100/50 hover:bg-sky-100 text-sky-800 dark:border-white/25 dark:bg-white/10 dark:hover:bg-white/20 dark:text-[#7dd3fc] px-8 py-3.5 font-semibold backdrop-blur-md transition dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]"
                        >
                            Explore the platform
                            <ChevronRight className="h-4 w-4 opacity-80" />
                        </Link>
                    </div>
                </motion.div>

                {/* Dashboard Frame Container */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative mt-6 w-full max-w-5xl"
                >
                    <div className="rounded-2xl border border-sky-200/80 bg-white/70 shadow-xl dark:border-white/20 dark:bg-white/5 p-2 backdrop-blur-lg dark:shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_20px_50px_rgba(0,0,0,0.3)]">
                        <Image
                            src="/images/hero/hero_dashboard.png"
                            alt="Assessment Dashboard"
                            width={1200}
                            height={675}
                            priority
                            className="h-auto w-full rounded-xl object-cover border border-sky-100 dark:border-white/10"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}