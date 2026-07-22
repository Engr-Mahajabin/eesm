"use client";

import { motion } from "framer-motion";
import {
    ShieldCheck,
    Brain,
    Globe,
    FileCheck2,
} from "lucide-react";

const stats = [
    {
        icon: Globe,
        title: "MULTI-FRAMEWORK",
        subheading: "Global Security Standards",
        subtitle: "Supports ISO, NIST, PCI DSS, COBIT, OWASP & more to streamline your compliance.",
    },
    {
        icon: ShieldCheck,
        title: "PRE-ASSESSMENT",
        subheading: "Posture Evaluation",
        subtitle: "Evaluate your current cybersecurity posture and quickly identify potential gaps.",
    },
    {
        icon: Brain,
        title: "AI-POWERED",
        subheading: "Smart Risk Analysis",
        subtitle: "Intelligent risk analysis & actionable recommendations tailored for your stack.",
    },
    {
        icon: FileCheck2,
        title: "ENTERPRISE READY",
        subheading: "Centralized GRC",
        subtitle: "Governance, Risk & Compliance platform designed for enterprise scale.",
    },
];

export default function PlatformStatistics() {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-7xl px-6">

                {/* Section Header */}
                <div className="mb-16 text-center">
                    {/* Badge */}
                    <span className="inline-block rounded-full border border-sky-300/60 bg-sky-100 dark:border-[#38bdf8]/40 dark:bg-[#0284c7]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sky-700 dark:text-[#7dd3fc] backdrop-blur-md shadow-sm">
                        Platform Highlights
                    </span>

                    {/* Headline */}
                    <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
                        Built for{" "}
                        <span className="bg-gradient-to-r from-sky-600 to-blue-700 dark:from-[#7dd3fc] dark:via-[#38bdf8] dark:to-[#60a5fa] bg-clip-text text-transparent">
                            Enterprise Cybersecurity
                        </span>
                    </h2>

                    {/* Subtitle */}
                    <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-[#bae6fd]/80 font-normal dark:font-light">
                        Everything organizations need to assess, manage and improve
                        cybersecurity compliance from one centralized platform.
                    </p>
                </div>

                {/* Grid Cards */}
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {stats.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                whileHover={{ y: -6 }}
                                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 transition-all duration-300
                           /* Light Mode */
                           border border-sky-200 bg-white/80 shadow-md backdrop-blur-md hover:border-sky-400
                        /* Dark Mode - Explicit RGBA for exact glass opacity */
                            dark:border-[#38bdf8]/40 dark:bg-[#0369a1]/15 dark:hover:bg-[#0369a1]/25 dark:hover:border-[#38bdf8] dark:shadow-[0_8px_32px_0_rgba(2,132,199,0.2)]"
                            >
                                <div>
                                    {/* Top Label/Pill Badge */}
                                    <div className="flex items-center justify-between">
                                        <span className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1 text-[11px] font-bold uppercase tracking-wider backdrop-blur-md
                                     border border-sky-300 bg-sky-100 text-sky-800
                                     dark:border-[#38bdf8]/40 dark:bg-[#0284c7]/30 dark:text-[#7dd3fc]">
                                            <Icon className="h-3.5 w-3.5 text-sky-600 dark:text-[#38bdf8]" />
                                            {item.title}
                                        </span>
                                    </div>

                                    {/* Header Title */}
                                    <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 dark:text-white drop-shadow-sm">
                                        {item.subheading}
                                    </h3>

                                    {/* Subheading & Text */}
                                    <p className="text-sm leading-relaxed text-slate-600 dark:text-[#e0f2fe]/80 font-normal dark:font-light my-10">
                                        {item.subtitle}
                                    </p>
                                </div>

                                {/* Bottom Cyan Glass Sheen */}
                                <div className="mt-6 h-1 w-full rounded-full bg-gradient-to-r from-[#38bdf8]/0 via-[#38bdf8]/60 to-[#38bdf8]/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}