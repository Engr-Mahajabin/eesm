"use client";

import { motion } from "framer-motion";
import {
    ShieldCheck,
    BadgeCheck,
    BarChart3,
    Globe,
    Layers3,
    Sparkles,
} from "lucide-react";

const reasons = [
    {
        icon: ShieldCheck,
        title: "Enterprise Ready",
        description:
            "Designed for organizations of all sizes with a scalable and secure architecture.",
    },
    {
        icon: BadgeCheck,
        title: "Standards-Based Assessments",
        description:
            "Built around internationally recognized frameworks including ISO, NIST, PCI DSS, GDPR and HIPAA.",
    },
    {
        icon: BarChart3,
        title: "Actionable Reporting",
        description:
            "Generate executive dashboards, compliance reports and gap analysis for better decision making.",
    },
    {
        icon: Globe,
        title: "Global Compliance",
        description:
            "Support multiple industries with regulatory and international compliance requirements.",
    },
    {
        icon: Layers3,
        title: "Modular & Scalable",
        description:
            "Deploy only the assessment modules you need and expand as your organization grows.",
    },
    {
        icon: Sparkles,
        title: "Continuous Improvement",
        description:
            "Track maturity, monitor progress and continuously improve your cybersecurity posture.",
    },
];

export default function WhyChooseEESM() {
    return (
        <section className="bg-slate-50 py-24 dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                        Why Choose eESM
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
                        Trusted Platform for Enterprise Security & Compliance
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
                        eESM helps organizations streamline governance, strengthen
                        cybersecurity and achieve regulatory compliance with confidence.
                    </p>

                </div>

                {/* Cards */}

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {reasons.map((reason, index) => {
                        const Icon = reason.icon;

                        return (
                            <motion.div
                                key={reason.title}
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
                                    {reason.title}
                                </h3>

                                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                                    {reason.description}
                                </p>
                            </motion.div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}