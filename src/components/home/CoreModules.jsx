"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
        color: "bg-blue-500/10 text-blue-600",
    },
    {
        title: "Architecture Framework",
        description:
            "Assess enterprise architecture using COBIT, TOGAF and OWASP.",
        icon: Building2,
        href: "/modules/architecture-framework",
        color: "bg-indigo-500/10 text-indigo-600",
    },
    {
        title: "Forensic Analysis",
        description:
            "Digital forensic readiness and investigation based on ISO 27037 series.",
        icon: SearchCheck,
        href: "/modules/forensic-analysis",
        color: "bg-amber-500/10 text-amber-600",
    },
    {
        title: "Pharmaceutical Compliance",
        description:
            "Support regulatory assessments for pharmaceutical organizations.",
        icon: HeartPulse,
        href: "/modules/pharmaceutical",
        color: "bg-emerald-500/10 text-emerald-600",
    },
    {
        title: "Governance, Risk & Compliance",
        description:
            "Centralized GRC assessment across ISO, NIST, PCI DSS, GDPR and more.",
        icon: ShieldCheck,
        href: "/modules/grc",
        color: "bg-cyan-500/10 text-cyan-600",
    },
];

export default function CoreModules() {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .5 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                        Core Modules
                    </span>

                    <h2 className="mt-5 text-4xl font-bold text-slate-900 dark:text-white">
                        Everything You Need in One Platform
                    </h2>

                    <p className="mt-5 text-lg text-slate-600 dark:text-slate-400">
                        eESM combines governance, cybersecurity assessment and
                        compliance management into a unified enterprise platform.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {modules.map((module, index) => {
                        const Icon = module.icon;

                        return (
                            <motion.div
                                key={module.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: .45,
                                    delay: index * .08,
                                }}
                                whileHover={{
                                    y: -8,
                                }}
                                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-blue-200 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
                            >

                                <div
                                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${module.color}`}
                                >
                                    <Icon className="h-7 w-7" />
                                </div>

                                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                                    {module.title}
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                                    {module.description}
                                </p>

                                <Link
                                    href={module.href}
                                    className="mt-8 inline-flex items-center gap-2 font-medium text-blue-600 transition group-hover:gap-3"
                                >
                                    Learn More
                                    <ArrowRight className="h-4 w-4" />
                                </Link>

                            </motion.div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}