"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    Brain,
    Landmark,
    Network,
    Fingerprint,
    Pill,
    ArrowRight,
} from "lucide-react";

const capabilities = [
    {
        title: "AI Management System",
        description:
            "Govern AI governance, risk, lifecycle and compliance using ISO/IEC 42001.",
        icon: Brain,
        href: "/modules/ai-management",
    },
    {
        title: "Governance, Risk & Compliance",
        description:
            "Assess security controls and manage organizational compliance using global frameworks.",
        icon: Landmark,
        href: "/modules/governance-risk-compliance",
    },
    {
        title: "Enterprise Architecture",
        description:
            "Align business strategy, governance and technology architecture across the enterprise.",
        icon: Network,
        href: "/modules/architecture-framework",
    },
    {
        title: "Digital Forensics",
        description:
            "Support digital investigations, evidence handling and forensic readiness.",
        icon: Fingerprint,
        href: "/modules/forensic-analysis",
    },
    {
        title: "Pharmaceutical Compliance",
        description:
            "Ensure regulatory compliance for pharmaceutical and life science organizations.",
        icon: Pill,
        href: "/modules/pharmaceutical",
    },
];

export default function CoreCapabilities() {
    return (
        <section className="bg-slate-50 py-24 dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                        Core Capabilities
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
                        Enterprise Modules Built for Modern Organizations
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
                        eESM provides specialized assessment modules that help organizations
                        improve governance, strengthen cybersecurity and achieve compliance
                        with international standards.
                    </p>
                </div>

                {/* Cards */}

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {capabilities.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                whileHover={{ y: -6 }}
                                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-blue-500 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
                            >
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
                                    <Icon size={30} />
                                </div>

                                <h3 className="mt-6 text-xl font-semibold text-slate-900 group-hover:text-blue-600 dark:text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                                    {item.description}
                                </p>

                                <Link
                                    href={item.href}
                                    className="mt-8 inline-flex items-center gap-2 font-medium text-blue-600 transition hover:gap-3"
                                >
                                    Learn More
                                    <ArrowRight size={18} />
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}