"use client";

import { motion } from "framer-motion";
import {
    ShieldCheck,
    BarChart3,
    FileCheck,
    Globe,
    Layers3,
    Activity,
} from "lucide-react";

const features = [
    {
        icon: ShieldCheck,
        title: "Centralized Security",
        description:
            "Manage governance, risk and compliance from a single unified platform.",
    },
    {
        icon: BarChart3,
        title: "Risk Assessment",
        description:
            "Identify security gaps, measure maturity and prioritize remediation efforts.",
    },
    {
        icon: FileCheck,
        title: "Compliance Automation",
        description:
            "Simplify compliance with automated assessments and reporting aligned with global standards.",
    },
    {
        icon: Globe,
        title: "International Standards",
        description:
            "Supports ISO, NIST, PCI DSS, GDPR, HIPAA, COBIT, TOGAF and more.",
    },
    {
        icon: Layers3,
        title: "Modular Platform",
        description:
            "Deploy only the modules your organization needs and scale as you grow.",
    },
    {
        icon: Activity,
        title: "Continuous Improvement",
        description:
            "Track compliance progress over time with actionable insights and recommendations.",
    },
];

export default function WhyEESM() {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                        Why eESM?
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
                        A Smarter Way to Manage Security & Compliance
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
                        eESM combines internationally recognized frameworks,
                        intelligent assessments and enterprise reporting into
                        one comprehensive security and compliance platform.
                    </p>

                </div>

                {/* Cards */}

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <motion.div
                                key={feature.title}
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

                                <h3 className="mt-6 text-xl font-semibold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white">
                                    {feature.title}
                                </h3>

                                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}