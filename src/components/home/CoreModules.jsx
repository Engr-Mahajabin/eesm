"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
    Brain,
    Building2,
    SearchCheck,
    HeartPulse,
    ShieldCheck,
    ArrowRight,
} from "lucide-react";

const modules = [
    {
        title: "AI Management",
        description:
            "Manage AI governance, risks and compliance aligned with ISO/IEC 42001.",
        icon: Brain,
        href: "/modules/ai-management",
        image: "/images/home/ai-management.png",
    },
    {
        title: "Architecture Framework",
        description:
            "Assess enterprise architecture using COBIT, TOGAF and OWASP.",
        icon: Building2,
        href: "/modules/architecture-framework",
        image: "/images/home/architecture-framework.png",
    },
    {
        title: "Forensic Analysis",
        description:
            "Digital forensic readiness and investigation based on ISO IEC 27037, ISO IEC 27041, ISO IEC 27042 and ISO IEC 27043 series.",
        icon: SearchCheck,
        href: "/modules/forensic-analysis",
        image: "/images/home/forensic-analysis.png",
    },
    {
        title: "Pharmaceutical Compliance",
        description:
            "Support regulatory assessments for pharmaceutical organizations.",
        icon: HeartPulse,
        href: "/modules/pharmaceutical",
        image: "/images/home/pharmaceutical-compliance.png",
    },
    {
        title: "Governance, Risk & Compliance",
        description:
            "Centralized GRC assessment across ISO, CIS, CMMC, NIST, PCI DSS, GDPR, HIPAA and more.",
        icon: ShieldCheck,
        href: "/modules/grc",
        image: "/images/home/grc.png",
    },
];

export default function CoreModules() {
    return (
        <section className="py-24 transition-colors duration-300 bg-transparent text-slate-900 dark:text-white">
            <div className="mx-auto max-w-7xl px-6">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="inline-block rounded-full border border-sky-300/80 bg-sky-100/80 dark:border-[#38bdf8]/40 dark:bg-[#0284c7]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sky-800 dark:text-[#7dd3fc] backdrop-blur-md shadow-sm dark:shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                        Core Modules
                    </span>

                    <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
                        Everything You Need in{" "}
                        <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 dark:from-[#7dd3fc] dark:via-[#38bdf8] dark:to-[#60a5fa] bg-clip-text text-transparent">
                            One Single Platform
                        </span>
                    </h2>

                    <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-[#bae6fd]/80 font-normal dark:font-light">
                        eESM combines governance, cybersecurity assessment and
                        compliance management into a unified enterprise platform.
                    </p>
                </motion.div>

                {/* Cards Grid with Wave Zig-Zag Offset */}
                <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-start">
                    {modules.map((module, index) => {
                        const Icon = module.icon;

                        let offsetClass = "";
                        if (index === 1 || index === 3) {
                            offsetClass = "xl:translate-y-12";
                        } else if (index === 2) {
                            offsetClass = "xl:translate-y-24";
                        }

                        return (
                            <motion.div
                                key={module.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.45,
                                    delay: index * 0.08,
                                }}
                                whileHover={{ y: -8 }}
                                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl p-3.5 transition-all duration-300
                           /* Light Mode Glass */
                           border border-sky-200/90 bg-white/80 shadow-md backdrop-blur-md hover:border-sky-400 hover:shadow-xl
                           /* Dark Mode Cyan Glass */
                           dark:border-[#38bdf8]/40 dark:bg-[#0369a1]/15 dark:hover:bg-[#0369a1]/25 dark:hover:border-[#38bdf8]
                           dark:shadow-[0_8px_32px_0_rgba(2,132,199,0.2)] dark:hover:shadow-[0_12px_40px_0_rgba(56,189,248,0.35)]
                           ${offsetClass}`}
                            >
                                <div>
                                    {/* Clean Image View Container (No Overlapping Badge) */}
                                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#03152e]">
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#020b18]/40 via-transparent to-transparent z-10 pointer-events-none" />

                                        <Image
                                            src={module.image}
                                            alt={module.title}
                                            fill
                                            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                            }}
                                        />
                                    </div>

                                    {/* Text Content with Title + Icon Header */}
                                    <div className="px-1 pt-4 pb-2">

                                        {/* Header with Icon and Title aligned together */}
                                        <div className="flex items-start gap-2.5">
                                            <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg 
                                      border border-sky-300/80 bg-sky-50 text-sky-600 shadow-sm
                                      dark:border-[#38bdf8]/50 dark:bg-[#0284c7]/30 dark:text-[#7dd3fc]">
                                                <Icon className="h-4 w-4" />
                                            </div>

                                            <h3 className="text-base font-bold leading-snug tracking-tight text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-[#38bdf8] transition-colors">
                                                {module.title}
                                            </h3>
                                        </div>

                                        <p className="mt-2.5 text-xs leading-relaxed text-slate-600 dark:text-[#e0f2fe]/70 font-normal dark:font-light line-clamp-3">
                                            {module.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Learn More Link */}
                                <div className="px-1 pt-2 pb-1">
                                    <Link
                                        href={module.href}
                                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-[#38bdf8] transition-all group-hover:gap-2.5"
                                    >
                                        Learn More
                                        <ArrowRight className="h-3.5 w-3.5" />
                                    </Link>
                                </div>

                                {/* Bottom Cyan Sheen */}
                                <div className="mt-2 h-1 w-full rounded-full bg-gradient-to-r from-[#38bdf8]/0 via-[#38bdf8]/60 to-[#38bdf8]/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}